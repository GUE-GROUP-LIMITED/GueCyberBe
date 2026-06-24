// Booking → cPanel SMTP + Outlook .ics invite
// No third-party subscription required.
// Secrets needed in Supabase dashboard:
//   SMTP_HOST        = mail.guecyber.com
//   SMTP_PORT        = 587
//   SMTP_USER        = gabriel.aloho@guecyber.com
//   SMTP_PASS        = <your cPanel email password>
//   BOOKING_TO_EMAIL = gabriel.aloho@guecyber.com

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { SmtpClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

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

Deno.serve(async (req) => {
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

    // --- SMTP secrets from Supabase dashboard ---
    const smtpHost = Deno.env.get("SMTP_HOST") || "mail.guecyber.com";
    const smtpPort = parseInt(Deno.env.get("SMTP_PORT") || "587", 10);
    const smtpUser = Deno.env.get("SMTP_USER") || "";
    const smtpPass = Deno.env.get("SMTP_PASS") || "";
    const toEmail = Deno.env.get("BOOKING_TO_EMAIL") || "gabriel.aloho@guecyber.com";

    if (!smtpUser || !smtpPass) {
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

    // --- Send via cPanel SMTP ---
    const client = new SmtpClient();
    await client.connectTLS({
      hostname: smtpHost,
      port: smtpPort,
      username: smtpUser,
      password: smtpPass,
    });

    await client.send({
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
    });

    await client.close();

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

    return new Response(JSON.stringify({ ok: true }), {
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
