import { useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../lib/config";
import { supabase } from "../lib/supabase";
import "./Contact.css";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "",
    preferredDateTime: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) nextErrors.fullName = "Please enter your full name.";
    if (!formData.email.trim()) nextErrors.email = "Please enter your email address.";
    if (formData.email.trim() && !emailPattern.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formData.service) nextErrors.service = "Please select a service.";
    if (!formData.preferredDateTime) nextErrors.preferredDateTime = "Preferred date and time is required.";
    const bookingDateError = getBookingDateTimeError(formData.preferredDateTime);
    if (bookingDateError) {
      nextErrors.preferredDateTime = bookingDateError;
    }
    if (!formData.message.trim()) nextErrors.message = "Please include a short message.";
    if (!formData.consent) nextErrors.consent = "Please agree to the Privacy Policy before submitting.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      setSubmitMessage("");
      return;
    }

    try {
      if (!supabase) {
        throw new Error("Supabase is not configured.");
      }

      const { data, error } = await supabase.functions.invoke(config.supabase.bookingFunctionName, {
        body: {
          fullName: formData.fullName,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          preferredDateTime: formData.preferredDateTime,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Europe/Brussels",
        },
      });

      if (error || data?.error) {
        throw new Error(data?.error || error?.message || "Could not submit booking request.");
      }

      setSubmitMessage("Thanks. Your request has been received. We will contact you shortly.");
      setFormData({
        fullName: "",
        email: "",
        company: "",
        service: "",
        preferredDateTime: "",
        message: "",
        consent: false,
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Could not submit booking request.";
      setSubmitMessage(msg);
    }
  };

  return (
    <>
      <section className="contact-page contact-hero">
        <div className="contact-grid"></div>
        <div className="contact-glow"></div>
        <div className="contact-wrap">
          <div className="contact-copy">
            <p className="contact-label-kicker">// Contact Gue Cyber</p>
            <h1>Tell Us What You Need Help With</h1>
            <p>
              Use this form if you want to discuss IT support, software development, testing, cloud setup, or a basic
              security review. If the fastest next step is an assessment, you can also book that directly.
            </p>
            <div className="contact-points">
              <div className="contact-point">
                <strong>Based in Avelgem, West Flanders</strong>
                <span>Working with individuals, SMEs, and teams that need direct technical input in Belgium.</span>
              </div>
              <div className="contact-point">
                <strong>Use the form for scoped requests</strong>
                <span>Include a short summary, your preferred timing, and any existing tools or constraints.</span>
              </div>
              <div className="contact-point">
                <strong>Need a structured first step?</strong>
                <span>Book a free introductory assessment if you want help clarifying priorities before a project starts.</span>
              </div>
            </div>
            <p className="contact-secondary-links">
              Prefer a direct booking flow? <a href="/assessment">Request an assessment</a>. For product enquiries,
              you can also ask about <a href="https://insights.guecyber.com" target="_blank" rel="noreferrer">GueInsight</a>.
            </p>
          </div>

            <div className="contact-card">
              <div className="contact-card-head">
                <h2>Send your request</h2>
                <p>We will review your message and come back with the most useful next step.</p>
              </div>
              <form onSubmit={handleSubmit} noValidate>
                <div className="contact-group">
                  <label className="contact-label" htmlFor="fullName">Full Name</label>
                  <input
                    className={`contact-input ${errors.fullName ? "error" : ""}`}
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange("fullName")}
                  />
                  {errors.fullName ? <p className="contact-error">{errors.fullName}</p> : null}
                </div>

                <div className="contact-group">
                  <label className="contact-label" htmlFor="email">Email</label>
                  <input
                    className={`contact-input ${errors.email ? "error" : ""}`}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange("email")}
                  />
                  {errors.email ? <p className="contact-error">{errors.email}</p> : null}
                </div>

                <div className="contact-group">
                  <label className="contact-label" htmlFor="company">
                    <span>Company</span> <span className="contact-label-muted">(optional)</span>
                  </label>
                  <input
                    className="contact-input"
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange("company")}
                  />
                </div>

                <div className="contact-group">
                  <label className="contact-label" htmlFor="service">Service Interested In</label>
                  <select
                    className={`contact-select ${errors.service ? "error" : ""}`}
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange("service")}
                  >
                    <option value="">Select a service</option>
                    <option value="assessment">Security Assessment</option>
                    <option value="consulting">IT Consultancy</option>
                    <option value="itSupport">Software Development</option>
                    <option value="cloud">Cloud and DevOps Support</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.service ? <p className="contact-error">{errors.service}</p> : null}
                </div>

                <div className="contact-group">
                  <label className="contact-label" htmlFor="preferredDateTime">Preferred Date & Time</label>
                  <input
                    className={`contact-input ${errors.preferredDateTime ? "error" : ""}`}
                    type="datetime-local"
                    id="preferredDateTime"
                    name="preferredDateTime"
                    value={formData.preferredDateTime}
                    onChange={(event) => {
                      const value = event.target.value;
                      setFormData((prev) => ({ ...prev, preferredDateTime: value }));
                      setErrors((prev) => ({
                        ...prev,
                        preferredDateTime: getBookingDateTimeError(value),
                      }));
                    }}
                  />
                  {errors.preferredDateTime ? <p className="contact-error">{errors.preferredDateTime}</p> : null}
                </div>

                <div className="contact-group">
                  <label className="contact-label" htmlFor="message">Message</label>
                  <textarea
                    className={`contact-textarea ${errors.message ? "error" : ""}`}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange("message")}
                    rows={5}
                  />
                  {errors.message ? <p className="contact-error">{errors.message}</p> : null}
                </div>

                <div className="contact-consent">
                  <label className="contact-consent-row" htmlFor="consent">
                    <input
                      id="consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(event) => {
                        setFormData((prev) => ({ ...prev, consent: event.target.checked }));
                        setErrors((prev) => ({ ...prev, consent: "" }));
                      }}
                    />
                    <span>
                      I agree to the processing of my details and confirm I have read the{' '}
                      <Link to="/privacy">Privacy Policy</Link>.
                    </span>
                  </label>
                  <p className="contact-consent-note">
                    We use your details only to respond to your request and manage our communication with you.
                  </p>
                  {errors.consent ? <p className="contact-error">{errors.consent}</p> : null}
                </div>

                {submitMessage ? <div className="contact-success">{submitMessage}</div> : null}

                <button type="submit" className="contact-submit">
                  <span>Submit Request</span>
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </form>
            </div>
        </div>
      </section>
    </>
  );
}
