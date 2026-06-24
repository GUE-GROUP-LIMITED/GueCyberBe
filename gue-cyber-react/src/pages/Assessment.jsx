import { Box, Button, Container, Typography, TextField } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { config } from "../lib/config";
import { supabase } from "../lib/supabase";

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
    <main>
      <Box sx={{ py: 12, background: '#f8fafc' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, mb: 2 }}>
            {t('assessment.title')}
          </Typography>
          <Typography sx={{ color: 'var(--text-muted)', mb: 4 }}>{t('assessment.subtitle')}</Typography>

          {!submitted ? (
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 2 }}>
              <TextField label={t('contact.fullName')} value={fullName} onChange={(e) => setFullName(e.target.value)} fullWidth required />
              <TextField label={t('contact.email')} type="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth required />
              <TextField
                label="Preferred Date & Time"
                type="datetime-local"
                value={preferredDateTime}
                onChange={(e) => setPreferredDateTime(e.target.value)}
                InputLabelProps={{ shrink: true }}
                fullWidth
                required
              />
              <TextField label={t('contact.message')} value={message} onChange={(e) => setMessage(e.target.value)} fullWidth multiline minRows={4} />
              {submitError ? <Typography sx={{ color: '#b91c1c', textAlign: 'left' }}>{submitError}</Typography> : null}
              <Button type="submit" variant="contained" sx={{ bgcolor: '#a3e635' }} disabled={submitting}>
                {submitting ? "Submitting..." : t('assessment.button')}
              </Button>
            </Box>
          ) : (
            <Typography sx={{ mt: 3 }}>{t('assessment.thanks')}</Typography>
          )}
        </Container>
      </Box>
    </main>
  );
}
