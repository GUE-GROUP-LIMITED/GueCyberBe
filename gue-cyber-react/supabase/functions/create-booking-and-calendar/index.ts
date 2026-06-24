// Booking → cPanel SMTP + Outlook .ics invite
// No third-party subscription required.
// Secrets needed in Supabase dashboard:
//   SMTP_HOST        = mail.guecyber.com
//   SMTP_PORT        = 587
//   SMTP_TLS_MODE    = starttls | tls   (optional)
//   ENABLE_BOOKING_SMTP = true | false   (optional, default false)
//   SMTP_USER        = gabriel.aloho@guecyber.com
//   SMTP_PASS        = <your cPanel email password>
//   BOOKING_TO_EMAIL = gabriel.aloho@guecyber.com

/// <reference path="./types.d.ts" />

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type BookingPayload = {
  fullName?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
  preferredDateTime?: string;
  timezone?: string;
};

function safe(value: string | undefined, fallback = ""): string {
  return value && value.trim() ? value.trim() : fallback;
}

function normalizeSmtpTlsMode(rawMode: string, port: number): boolean {
  const mode = rawMode.toLowerCase();
  if (mode === "tls") return true;
  if (mode === "starttls") return false;
  return port === 465;
}

function isWeekendDateTimeLocal(value: string): boolean {
  const [datePart] = value.split("T");
  const [y, mo, d] = datePart.split("-").map(Number);
  if (!y || !mo || !d) return false;
  const day = new Date(Date.UTC(y, mo - 1, d)).getUTCDay();
  return day === 0 || day === 6;
}

function easterSundayUtc(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(Date.UTC(year, month - 1, day));
}

function formatYmdUtc(date: Date): string {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function addUtcDays(baseDate: Date, days: number): Date {
  const date = new Date(baseDate.getTime());
  date.setUTCDate(date.getUTCDate() + days);
  return date;
}

function belgianHolidaySet(year: number): Set<string> {
  const easter = easterSundayUtc(year);
  return new Set<string>([
    `${year}-01-01`,
    `${year}-05-01`,
    `${year}-07-21`,
    `${year}-08-15`,
    `${year}-11-01`,
    `${year}-11-11`,
    `${year}-12-25`,
    formatYmdUtc(addUtcDays(easter, 1)),
    formatYmdUtc(addUtcDays(easter, 39)),
    formatYmdUtc(addUtcDays(easter, 50)),
  ]);
}

function isBelgianHolidayDate(datePart: string): boolean {
  const [y] = datePart.split("-").map(Number);
  if (!y) return false;
  return belgianHolidaySet(y).has(datePart);
}

function isWithinBookingHours(value: string): boolean {
  const [, timePart = ""] = value.split("T");
  const [h = "", m = ""] = timePart.split(":");
  const hour = Number(h);
  const minute = Number(m);
  if (Number.isNaN(hour) || Number.isNaN(minute)) return false;
  if (hour < 9) return false;
  if (hour > 17) return false;
  if (hour === 17 && minute > 0) return false;
  return true;
}

/** Format YYYY-MM-DDTHH:mm to iCal YYYYMMDDTHHMMSS */
function toIcalDate(dt: string): string {
  return dt.replace(/[-:]/g, "").replace("T", "T").slice(0, 15) + "00";
}

/** Add minutes to a YYYY-MM-DDTHH:mm string, returns same format */
function addMinutes(dt: string, mins: number): string {
  const [date, time] = dt.split("T");
  const [y, mo, d] = date.split("-").map(Number);
  const [h, m] = time.split(":").map(Number);
  const base = new Date(Date.UTC(y, mo - 1, d, h, m));
  base.setUTCMinutes(base.getUTCMinutes() + mins);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${base.getUTCFullYear()}-${pad(base.getUTCMonth() + 1)}-${pad(base.getUTCDate())}T${pad(base.getUTCHours())}:${pad(base.getUTCMinutes())}`;
}

/** Build a valid .ics (iCalendar) string for Outlook */
function buildIcs(opts: {
  uid: string;
  summary: string;
  description: string;
  start: string;
  end: string;
  timezone: string;
  organizerEmail: string;
  organizerName: string;
  attendeeEmail: string;
}): string {
  const now = toIcalDate(new Date().toISOString().slice(0, 16));
  const startIcal = toIcalDate(opts.start);
  const endIcal = toIcalDate(opts.end);
  const descEscaped = opts.description.replace(/\n/g, "\\n").replace(/,/g, "\\,");

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Gue Cyber//Booking//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `UID:${opts.uid}`,
    `DTSTAMP:${now}Z`,
    `DTSTART;TZID=${opts.timezone}:${startIcal}`,
    `DTEND;TZID=${opts.timezone}:${endIcal}`,
    `SUMMARY:${opts.summary}`,
    `DESCRIPTION:${descEscaped}`,
    `ORGANIZER;CN=${opts.organizerName}:mailto:${opts.organizerEmail}`,
    `ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;CN=${opts.attendeeEmail}:mailto:${opts.attendeeEmail}`,
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const payload = (await req.json()) as BookingPayload;

    const fullName = safe(payload.fullName);
    const clientEmail = safe(payload.email);
    const company = safe(payload.company);
    const service = safe(payload.service, "Security Assessment");
    const message = safe(payload.message);
    const preferredDateTime = safe(payload.preferredDateTime);
    const timezone = safe(payload.timezone, "Europe/Brussels");

    if (!fullName || !clientEmail || !preferredDateTime) {
      return new Response(
        JSON.stringify({ error: "fullName, email and preferredDateTime are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    if (isWeekendDateTimeLocal(preferredDateTime)) {
      return new Response(
        JSON.stringify({ error: "Weekend bookings are not available. Please choose Monday to Friday." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const [datePart = ""] = preferredDateTime.split("T");
    if (isBelgianHolidayDate(datePart)) {
      return new Response(
        JSON.stringify({ error: "Bookings are not available on public holidays." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    if (!isWithinBookingHours(preferredDateTime)) {
      return new Response(
        JSON.stringify({ error: "Bookings are available only between 09:00 and 17:00." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // --- SMTP secrets from Supabase dashboard ---
    const smtpHost = Deno.env.get("SMTP_HOST") || "mail.guecyber.com";
    const smtpPort = parseInt(Deno.env.get("SMTP_PORT") || "587", 10);
    const smtpTlsModeRaw = safe(Deno.env.get("SMTP_TLS_MODE"));
    const enableBookingSmtp = safe(Deno.env.get("ENABLE_BOOKING_SMTP"), "false").toLowerCase() === "true";
    const smtpUser = Deno.env.get("SMTP_USER") || "";
    const smtpPass = Deno.env.get("SMTP_PASS") || "";
    const toEmail = Deno.env.get("BOOKING_TO_EMAIL") || "gabriel.aloho@guecyber.com";

    if (enableBookingSmtp && (!smtpUser || !smtpPass)) {
      return new Response(
        JSON.stringify({ error: "SMTP credentials (SMTP_USER, SMTP_PASS) are not set in Supabase function secrets." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // --- Build .ics invite ---
    const uid = `booking-${crypto.randomUUID()}@guecyber.com`;
    const endDateTime = addMinutes(preferredDateTime, 60);

    const description = [
      `Client: ${fullName}`,
      `Email: ${clientEmail}`,
      `Company: ${company || "N/A"}`,
      `Service: ${service}`,
      ``,
      `Message:`,
      message || "N/A",
    ].join("\n");

    const icsContent = buildIcs({
      uid,
      summary: `Gue Cyber — Booking: ${fullName} (${service})`,
      description,
      start: preferredDateTime,
      end: endDateTime,
      timezone,
      organizerEmail: toEmail,
      organizerName: "Gue Cyber",
      attendeeEmail: toEmail,
    });

    // --- Email body ---
    const htmlBody = `
<h2>New Booking Request — Gue Cyber</h2>
<table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
  <tr><td><strong>Name</strong></td><td>${fullName}</td></tr>
  <tr><td><strong>Email</strong></td><td>${clientEmail}</td></tr>
  <tr><td><strong>Company</strong></td><td>${company || "N/A"}</td></tr>
  <tr><td><strong>Service</strong></td><td>${service}</td></tr>
  <tr><td><strong>Preferred Date/Time</strong></td><td>${preferredDateTime.replace("T", " ")} (${timezone})</td></tr>
  <tr><td><strong>Message</strong></td><td>${message || "N/A"}</td></tr>
</table>
<p style="margin-top:16px;color:#555;">A calendar invite (.ics) is attached. Open it in Outlook to accept the booking into your calendar.</p>
    `.trim();

    // --- Send via cPanel SMTP (optional) ---
    let mailSent = false;
    let mailWarning = "Email delivery is currently disabled for this environment.";

    if (enableBookingSmtp) {
      const smtpTls = normalizeSmtpTlsMode(smtpTlsModeRaw, smtpPort);
      const primaryTransport = { port: smtpPort, tls: smtpTls };
      const fallbackTransport = smtpTls ? { port: 587, tls: false } : { port: 465, tls: true };

      const sendOptions = {
        from: smtpUser,
        to: toEmail,
        subject: `New Booking: ${fullName} — ${preferredDateTime.replace("T", " ")}`,
        html: htmlBody,
        attachments: [
          {
            filename: "booking-invite.ics",
            content: new TextEncoder().encode(icsContent),
            contentType: "text/calendar; method=REQUEST",
          },
        ],
      };

      const { SMTPClient } = await import("https://deno.land/x/denomailer@1.6.0/mod.ts");

      const sendWithTransport = async (transport: { port: number; tls: boolean }) => {
        const client = new SMTPClient({
          connection: {
            hostname: smtpHost,
            port: transport.port,
            tls: transport.tls,
            auth: {
              username: smtpUser,
              password: smtpPass,
            },
          },
        });

        try {
          await client.send(sendOptions);
        } finally {
          try {
            await client.close();
          } catch {
            // Ignore close errors to preserve original send failure.
          }
        }
      };

      try {
        try {
          await sendWithTransport(primaryTransport);
          mailSent = true;
          mailWarning = "";
        } catch (firstError) {
          const firstMessage = firstError instanceof Error ? firstError.message : String(firstError);
          const protocolError = /invalid cmd|starttls|tls|ssl/i.test(firstMessage);
          const hasExplicitMode = smtpTlsModeRaw.toLowerCase() === "tls" || smtpTlsModeRaw.toLowerCase() === "starttls";

          if (!protocolError || hasExplicitMode) {
            throw firstError;
          }

          await sendWithTransport(fallbackTransport);
          mailSent = true;
          mailWarning = "";
        }
      } catch (mailError) {
        const msg = mailError instanceof Error ? mailError.message : String(mailError);
        mailWarning = `Booking saved, but email delivery failed: ${msg}`;
        console.error("SMTP send failed", msg);
      }
    }

    // --- Optionally save to Supabase ---
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (supabaseUrl && serviceRoleKey) {
      const db = createClient(supabaseUrl, serviceRoleKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      });
      await db.from("booking_requests").insert([{
        full_name: fullName,
        email: clientEmail,
        company,
        service,
        message,
        preferred_datetime_local: preferredDateTime,
        timezone,
      }]);
    }

    return new Response(JSON.stringify({ ok: true, mailSent, warning: mailWarning || undefined }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
