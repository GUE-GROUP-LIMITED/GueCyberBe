import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";
import { Box, Container, Grid, Typography, Stack, IconButton, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PublicIcon from '@mui/icons-material/Public';
import { config } from "../lib/config";
import { supabase } from "../lib/supabase";

export default function Footer() {
    const { t } = useTranslation();
    const year = new Date().getFullYear();
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [newsletterConsent, setNewsletterConsent] = useState(false);
    const [newsletterError, setNewsletterError] = useState("");
    const [newsletterSuccess, setNewsletterSuccess] = useState("");
    const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);

    const contactLinks = [
        { label: "Doorniksesteenweg 3B bus 101, 8580 Avelgem", href: "https://www.google.com/maps/search/Doorniksesteenweg+3B+bus+101+8580+Avelgem" },
    ];

    const legalLinks = [
        { label: t('common.privacy'), to: "/privacy" },
        { label: t('common.terms'), to: "/terms" },
        { label: t('common.cookiePolicy'), to: "/cookie-policy" },
    ];

    const socialLinks = [
        { label: "LinkedIn", href: "https://www.linkedin.com", icon: <LinkedInIcon /> },
        { label: "Website", href: "/", icon: <PublicIcon /> },
        { label: "Email", href: "mailto:info@guecyber.com", icon: <EmailOutlinedIcon /> },
    ];

    const handleNewsletterSubmit = async (event) => {
        event.preventDefault();

        const emailValue = newsletterEmail.trim();
        if (!emailValue) {
            setNewsletterError(t('footer.form.emailRequired'));
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
            setNewsletterError(t('footer.form.emailInvalid'));
            return;
        }

        if (!newsletterConsent) {
            setNewsletterError(t('footer.form.consentRequired'));
            return;
        }

        setNewsletterSubmitting(true);
        setNewsletterError("");

        try {
            const storageKey = 'guecyber_newsletter_subscribers';
            const storedSubscribers = JSON.parse(localStorage.getItem(storageKey) || '[]');
            if (storedSubscribers.some((subscriber) => subscriber.email?.toLowerCase() === emailValue.toLowerCase())) {
                setNewsletterError(t('footer.form.alreadySubscribed'));
                return;
            }

            const subscriberRecord = { email: emailValue, subscribedAt: new Date().toISOString() };
            storedSubscribers.push(subscriberRecord);
            localStorage.setItem(storageKey, JSON.stringify(storedSubscribers));

            if (supabase && config.supabase.newsletterAckFunctionName) {
                const functionUrl = `${config.supabase.url}/functions/v1/${config.supabase.newsletterAckFunctionName}`;
                const response = await fetch(functionUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        ...(config.supabase.publishableKey ? { Authorization: `Bearer ${config.supabase.publishableKey}`, apikey: config.supabase.publishableKey } : {}),
                    },
                    body: JSON.stringify(subscriberRecord),
                });

                if (!response.ok) {
                    throw new Error(await response.text());
                }
            }

            setNewsletterSuccess(t('footer.form.successMessage'));
            setNewsletterEmail("");
            setNewsletterConsent(false);
        } catch (error) {
            setNewsletterError(t('footer.form.submitFailed'));
        } finally {
            setNewsletterSubmitting(false);
        }
    };

    return (
        <Box
            component="footer"
            sx={{
                position: 'relative',
                overflow: 'hidden',
                background: '#022c22',
                color: '#e2e8f0',
                pt: { xs: 6, md: 8 },
                pb: 4,
                borderTop: '1px solid rgba(148,163,184,0.18)'
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Box component={Link} to="/" sx={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
                            <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', px: 0.9, py: 0.45, background: '#a3e635' }}>
                                <Box component="img" src={logo} alt="Gue Cyber" loading="lazy" decoding="async" sx={{ height: { xs: 38, md: 48 }, width: 'auto', display: 'block' }} />
                            </Box>
                        </Box>
                        <Typography sx={{ maxWidth: 760, color: 'rgba(226,232,240,0.84)', fontSize: { xs: '0.96rem', md: '1rem' }, lineHeight: 1.7 }}>
                            {t('footer.description')}
                        </Typography>
                        <Box
                            component="a"
                            href="https://insights.guecyber.com/"
                            target="_blank"
                            rel="noreferrer"
                            sx={{
                                alignSelf: 'flex-start',
                                display: 'inline-flex',
                                alignItems: 'center',
                                px: 2,
                                py: 1,
                                borderRadius: '999px',
                                border: '1px solid rgba(217,249,157,0.28)',
                                color: '#d9f99d',
                                textDecoration: 'none',
                                fontWeight: 700,
                                fontSize: '0.92rem',
                                background: 'rgba(255,255,255,0.03)',
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                    background: 'rgba(163,230,53,0.12)',
                                    borderColor: 'rgba(217,249,157,0.5)',
                                },
                            }}
                        >
                            {t('common.insights')}
                        </Box>
                    </Box>

                    <Grid container spacing={{ xs: 4, md: 6 }}>
                        <Grid item xs={12} md={4}>
                            <Typography sx={{ fontWeight: 800, mb: 2, letterSpacing: '0.12em', fontSize: '0.74rem', textTransform: 'uppercase', color: '#d9f99d' }}>
                                Contact
                            </Typography>
                            <Stack spacing={1.2}>
                                {contactLinks.map((item) => (
                                    <Box
                                        key={item.label}
                                        component="a"
                                        href={item.href}
                                        sx={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '0.94rem', fontWeight: 600, '&:hover': { color: '#a3e635' } }}
                                    >
                                        {item.label}
                                    </Box>
                                ))}
                                <Typography sx={{ color: 'rgba(226,232,240,0.72)', fontSize: '0.9rem', pt: 0.8 }}>
                                    {t('footer.registrationUnit')}
                                </Typography>
                                <Typography sx={{ color: 'rgba(226,232,240,0.72)', fontSize: '0.9rem' }}>
                                    {t('footer.registrationNumber')}
                                </Typography>
                                <Typography sx={{ color: 'rgba(226,232,240,0.72)', fontSize: '0.9rem' }}>
                                    {t('footer.businessNumber')}
                                </Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Typography sx={{ fontWeight: 800, mb: 2, letterSpacing: '0.12em', fontSize: '0.74rem', textTransform: 'uppercase', color: '#d9f99d' }}>
                                Legal
                            </Typography>
                            <Stack spacing={1.2}>
                                {legalLinks.map((item) => (
                                    <Typography
                                        key={item.label}
                                        component={Link}
                                        to={item.to}
                                        sx={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '0.94rem', fontWeight: 600, '&:hover': { color: '#a3e635' } }}
                                    >
                                        {item.label}
                                    </Typography>
                                ))}
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                            <Box sx={{ width: '100%', maxWidth: 390, textAlign: { xs: 'left', md: 'right' } }}>
                            <Typography sx={{ fontWeight: 800, mb: 2, letterSpacing: '0.12em', fontSize: '0.74rem', textTransform: 'uppercase', color: '#d9f99d' }}>
                                {t('footer.newsletter')}
                            </Typography>
                            <Typography sx={{ color: 'rgba(226,232,240,0.72)', fontSize: '0.9rem', lineHeight: 1.6, mb: 2 }}>
                                {t('footer.newsletterDesc')}
                            </Typography>
                            <Box component="form" onSubmit={handleNewsletterSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 1.2, alignItems: { xs: 'stretch', md: 'flex-end' } }}>
                                <input
                                    type="email"
                                    value={newsletterEmail}
                                    onChange={(event) => {
                                        setNewsletterEmail(event.target.value);
                                        setNewsletterError("");
                                        setNewsletterSuccess("");
                                    }}
                                    placeholder={t('footer.email')}
                                    aria-label={t('footer.email')}
                                    className="newsletter-input"
                                    style={{ maxWidth: '100%' }}
                                />
                                <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', color: 'rgba(226,232,240,0.84)', fontSize: '0.88rem', lineHeight: 1.5, justifyContent: 'flex-end', textAlign: 'left', maxWidth: '100%' }}>
                                    <input
                                        type="checkbox"
                                        checked={newsletterConsent}
                                        onChange={(event) => {
                                            setNewsletterConsent(event.target.checked);
                                            setNewsletterError("");
                                            setNewsletterSuccess("");
                                        }}
                                        style={{ marginTop: 4, accentColor: '#a3e635' }}
                                    />
                                    <span>
                                        {t('footer.form.consent')}{' '}
                                        <Link to="/privacy" style={{ color: '#d9f99d', fontWeight: 700, textDecoration: 'none' }}>
                                            {t('common.privacy')}
                                        </Link>
                                        .
                                    </span>
                                </label>
                                {newsletterError ? (
                                    <Typography sx={{ color: '#fca5a5', fontSize: '0.85rem', textAlign: { xs: 'left', md: 'right' }, width: '100%' }}>{newsletterError}</Typography>
                                ) : null}
                                {newsletterSuccess ? (
                                    <Typography sx={{ color: '#bbf7d0', fontSize: '0.85rem', textAlign: { xs: 'left', md: 'right' }, width: '100%' }}>{newsletterSuccess}</Typography>
                                ) : null}
                                <button type="submit" className="newsletter-submit" disabled={newsletterSubmitting} style={{ width: '100%', maxWidth: 320 }}>
                                    {newsletterSubmitting ? t('footer.form.submitting') : t('common.subscribe')}
                                </button>
                            </Box>
                            <Typography sx={{ fontWeight: 800, mb: 1.5, mt: 3, letterSpacing: '0.12em', fontSize: '0.74rem', textTransform: 'uppercase', color: '#d9f99d', textAlign: { xs: 'left', md: 'right' } }}>
                                Socials
                            </Typography>
                            <Stack direction="row" spacing={1.2} sx={{ mb: 2, justifyContent: { xs: 'flex-start', md: 'flex-end' }, width: '100%' }}>
                                {socialLinks.map((item) => (
                                    <IconButton
                                        key={item.label}
                                        component="a"
                                        href={item.href}
                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                                        aria-label={item.label}
                                        sx={{
                                            color: '#022c22',
                                            background: '#a3e635',
                                            p: 1.2,
                                            '&:hover': { background: '#bef264' },
                                        }}
                                    >
                                        {item.icon}
                                    </IconButton>
                                ))}
                            </Stack>
                            <Typography sx={{ color: 'rgba(226,232,240,0.72)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                                Secure. Reliable. Intelligent.
                            </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Divider sx={{ borderColor: 'rgba(148,163,184,0.18)' }} />

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 2, alignItems: 'center' }}>
                        <Typography sx={{ color: 'rgba(226,232,240,0.72)', fontSize: '0.85rem' }}>
                            {t('footer.copyright', { year })}
                        </Typography>
                        <Typography sx={{ color: 'rgba(226,232,240,0.72)', fontSize: '0.85rem' }}>
                            A trusted cybersecurity & business technology partner.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}