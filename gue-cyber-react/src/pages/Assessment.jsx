import { Box, Button, Container, Typography, TextField } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Assessment() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // minimal validation
    if (!email.trim()) return;

    // store lead in localStorage
    try {
      const key = 'guecyber_leads';
      const existing = JSON.parse(localStorage.getItem(key) || '[]');
      existing.push({ email, message, createdAt: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(existing));
    } catch (err) {
      // ignore storage errors
    }

    // open user's mail client with prefilled message so the team receives the lead via email
    const subject = encodeURIComponent('GUE CYBER - Assessment Request');
    const body = encodeURIComponent(`Email: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`);
    window.location.href = `mailto:info@guecyber.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setEmail("");
    setMessage("");
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
              <TextField label={t('contact.fullName')} value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
              <TextField label={t('contact.email')} value={message} onChange={(e) => setMessage(e.target.value)} fullWidth />
              <Button type="submit" variant="contained" sx={{ bgcolor: '#a3e635' }}>{t('assessment.button')}</Button>
            </Box>
          ) : (
            <Typography sx={{ mt: 3 }}>{t('assessment.thanks')}</Typography>
          )}
        </Container>
      </Box>
    </main>
  );
}
