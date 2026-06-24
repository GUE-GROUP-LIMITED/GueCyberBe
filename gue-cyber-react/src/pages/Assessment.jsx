import { useState } from "react";
import { useTranslation } from "react-i18next";
import { config } from "../lib/config";
import { supabase } from "../lib/supabase";
import "./Assessment.css";

function isWeekendDateTimeLocal(value) {
  if (!value || !value.includes("T")) return false;
  const [datePart] = value.split("T");
  const [y, mo, d] = datePart.split("-").map(Number);
  if (!y || !mo || !d) return false;
  const day = new Date(Date.UTC(y, mo - 1, d)).getUTCDay();
  return day === 0 || day === 6;
}

function easterSundayUtc(year) {
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

function formatYmdUtc(date) {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function addUtcDays(baseDate, days) {
  const date = new Date(baseDate.getTime());
  date.setUTCDate(date.getUTCDate() + days);
  return date;
}

function belgianHolidaySet(year) {
  const easter = easterSundayUtc(year);
  return new Set([
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

function isBelgianHolidayDate(datePart) {
  if (!datePart) return false;
  const [y] = datePart.split("-").map(Number);
  if (!y) return false;
  return belgianHolidaySet(y).has(datePart);
}

function isWithinBookingHours(value) {
  if (!value || !value.includes("T")) return false;
  const [, timePart] = value.split("T");
  const [h = "", m = ""] = timePart.split(":");
  const hour = Number(h);
  const minute = Number(m);
  if (Number.isNaN(hour) || Number.isNaN(minute)) return false;
  if (hour < 9) return false;
  if (hour > 17) return false;
  if (hour === 17 && minute > 0) return false;
  return true;
}

function getBookingDateTimeError(value) {
  if (!value || !value.includes("T")) return "";
  const [datePart] = value.split("T");
  if (isWeekendDateTimeLocal(value)) {
    return "Weekend bookings are not available. Please choose Monday to Friday.";
  }
  if (isBelgianHolidayDate(datePart)) {
    return "Bookings are not available on public holidays.";
  }
  if (!isWithinBookingHours(value)) {
    return "Bookings are available only between 09:00 and 17:00.";
  }
  return "";
}

export default function Assessment() {
  const { t } = useTranslation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [preferredDateTime, setPreferredDateTime] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !preferredDateTime.trim()) {
      setSubmitError("Please fill in your name, email, and preferred date/time.");
      return;
    }

    const bookingDateError = getBookingDateTimeError(preferredDateTime);
    if (bookingDateError) {
      setSubmitError(bookingDateError);
      return;
    }

    setSubmitError("");
    setSubmitting(true);

    try {
      const key = "guecyber_leads";
      const existing = JSON.parse(localStorage.getItem(key) || '[]');
      existing.push({ fullName, email, preferredDateTime, message, createdAt: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(existing));

      if (!supabase) {
        throw new Error("Supabase is not configured.");
      }

      const { data, error } = await supabase.functions.invoke(config.supabase.bookingFunctionName, {
        body: {
          fullName,
          email,
          company: "",
          service: "assessment",
          message,
          preferredDateTime,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Europe/Brussels",
        },
      });

      if (error || data?.error) {
        throw new Error(data?.error || error?.message || "Failed to submit booking request.");
      }

      setSubmitted(true);
      setFullName("");
      setEmail("");
      setPreferredDateTime("");
      setMessage("");
    } catch (err) {
      const messageText = err instanceof Error ? err.message : "Could not submit your booking. Please try again.";
      setSubmitError(messageText);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="assessment-page">
      <section className="assessment-hero">
        <div className="assessment-grid"></div>
        <div className="assessment-glow"></div>
        <div className="assessment-wrap">
          <div className="assessment-copy">
            <p className="assessment-label">// Book Your Assessment</p>
            <h1>{t("assessment.title")}</h1>
            <p className="assessment-subtitle">{t("assessment.subtitle")}</p>
            <div className="assessment-note">
              We will confirm your preferred slot by email and send a calendar invite.
            </div>
          </div>

          <div className="assessment-card">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="assessment-form">
                <label htmlFor="assessment-name">{t("contact.fullName")}</label>
                <input
                  id="assessment-name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />

                <label htmlFor="assessment-email">{t("contact.email")}</label>
                <input
                  id="assessment-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label htmlFor="assessment-datetime">Preferred Date and Time</label>
                <input
                  id="assessment-datetime"
                  type="datetime-local"
                  value={preferredDateTime}
                  onChange={(e) => {
                    const value = e.target.value;
                    setPreferredDateTime(value);
                    setSubmitError(getBookingDateTimeError(value));
                  }}
                  required
                />

                <label htmlFor="assessment-message">{t("contact.message")}</label>
                <textarea
                  id="assessment-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                />

                {submitError ? <p className="assessment-error">{submitError}</p> : null}

                <button type="submit" className="assessment-submit" disabled={submitting}>
                  {submitting ? "Submitting..." : t("assessment.button")}
                </button>
              </form>
            ) : (
              <div className="assessment-success">
                <h2>Request Sent</h2>
                <p>{t("assessment.thanks")}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
