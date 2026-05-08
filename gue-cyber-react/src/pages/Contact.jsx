import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "",
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

    if (!formData.fullName.trim()) nextErrors.fullName = t('contact.form.fullNameRequired');
    if (!formData.email.trim()) nextErrors.email = t('contact.form.emailRequired');
    if (formData.email.trim() && !emailPattern.test(formData.email.trim())) {
      nextErrors.email = t('contact.form.emailInvalid');
    }
    if (!formData.service) nextErrors.service = t('contact.form.serviceRequired');
    if (!formData.message.trim()) nextErrors.message = t('contact.form.messageRequired');
    if (!formData.consent) nextErrors.consent = t('contact.form.consentRequired');

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      setSubmitMessage("");
      return;
    }

    setSubmitMessage(t('contact.form.successMessage'));
    setFormData({
      fullName: "",
      email: "",
      company: "",
      service: "",
      message: "",
      consent: false,
    });
  };

  return (
    <main>
      <section className="contact-page">
        <img className="contact-bg" src="/images/contact-waves-bg-lime-half.png" alt="" />

        <div className="contact-wrap">
          <div className="contact-center">
            <div className="contact-header reveal-up">
              <h1 className="contact-title">{t('contact.title')}</h1>
              <p className="contact-subtitle">{t('contact.subtitle')}</p>
            </div>

            <div className="contact-card reveal-up delay-1">
              <form onSubmit={handleSubmit} noValidate>
                <div className="contact-group">
                  <label className="contact-label" htmlFor="fullName">{t('contact.fullName')}</label>
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
                  <label className="contact-label" htmlFor="email">{t('contact.email')}</label>
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
                    <span>{t('contact.company')}</span> <span className="contact-label-muted">({t('contact.company_optional')})</span>
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
                  <label className="contact-label" htmlFor="service">{t('contact.service')}</label>
                  <select
                    className={`contact-select ${errors.service ? "error" : ""}`}
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange("service")}
                  >
                    <option value="">{t('contact.selectService')}</option>
                    <option value="assessment">{t('contact.assessment')}</option>
                    <option value="consulting">{t('contact.consulting')}</option>
                    <option value="itSupport">{t('contact.itSupport')}</option>
                    <option value="cloud">{t('contact.cloudServices')}</option>
                    <option value="other">{t('contact.other')}</option>
                  </select>
                  {errors.service ? <p className="contact-error">{errors.service}</p> : null}
                </div>

                <div className="contact-group">
                  <label className="contact-label" htmlFor="message">{t('contact.message')}</label>
                  <input
                    className={`contact-input ${errors.message ? "error" : ""}`}
                    type="text"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange("message")}
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
                      {t('contact.privacyConsent')}{' '}
                      <Link to="/privacy">{t('contact.privacyLink')}</Link>.
                    </span>
                  </label>
                  <p className="contact-consent-note">
                    {t('contact.privacyNote')}
                  </p>
                  {errors.consent ? <p className="contact-error">{errors.consent}</p> : null}
                </div>

                {submitMessage ? <div className="contact-success">{submitMessage}</div> : null}

                <button type="submit" className="contact-submit">
                  <span>{t('common.submit')}</span>
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
