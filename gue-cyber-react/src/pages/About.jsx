import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function About() {
  const { t } = useTranslation();
  const sectionY = { xs: 9, md: 13 };
  const limePanelRadius = { xs: 4, md: 5 };
  const limePanelPadding = { xs: 2.5, md: 6 };

  const values = [
    { index: 0, titleKey: "value1.title", textKey: "value1.text" },
    { index: 1, titleKey: "value2.title", textKey: "value2.text" },
    { index: 2, titleKey: "value3.title", textKey: "value3.text" },
  ];

  const stats = [
    { valueKey: "stat1", labelKey: "stat1Label" },
    { valueKey: "stat2", labelKey: "stat2Label" },
    { valueKey: "stat3", labelKey: "stat3Label" },
  ];

  return (
    <main>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: "#042f2e",
          pt: { xs: 16, md: 19 },
          pb: { xs: 13, md: 16 },
        }}
      >
        <Box
          component="img"
          src="/images/header-bg-waves.png"
          alt=""
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.45,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(40% 60% at 12% 35%, rgba(134,239,172,0.28) 0%, rgba(134,239,172,0) 75%), radial-gradient(40% 60% at 92% 78%, rgba(134,239,172,0.25) 0%, rgba(134,239,172,0) 72%), linear-gradient(180deg, #042f2e 0%, #022c22 100%)",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            opacity: 0.3,
            backgroundImage:
              "repeating-linear-gradient(126deg, transparent 0, transparent 14px, rgba(163,230,53,0.65) 15px, transparent 17px)",
            backgroundSize: "180% 180%",
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box className="reveal-up" sx={{ maxWidth: 940, mx: "auto", textAlign: "center" }}>
            <Typography sx={{ color: "#d9f99d", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.78rem", mb: 2 }}>
              {t('common.about')}
            </Typography>
            <Typography variant="h1" sx={{ color: "#f8fafc", fontSize: { xs: "2.6rem", sm: "3.9rem", md: "4.9rem" }, lineHeight: 1.02, mb: 3 }}>
              {t('about.hero.title')}
            </Typography>
            <Typography sx={{ maxWidth: 760, mx: "auto", fontSize: { xs: "1rem", md: "1.12rem" }, lineHeight: 1.62, color: "rgba(226,232,240,0.9)", mb: 5 }}>
              {t('about.description')}
            </Typography>
            <Button
              component={Link}
              to="/services"
              variant="contained"
              sx={{
                bgcolor: "#a3e635",
                color: "#052e2b",
                borderRadius: 999,
                px: 3.8,
                py: 1.2,
                fontWeight: 800,
                textTransform: "none",
                "&:hover": { bgcolor: "#bef264" },
              }}
            >
              {t('common.readMore')}
            </Button>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: sectionY, background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Grid className="reveal-up delay-1" container spacing={{ xs: 4, md: 6 }} alignItems="start" sx={{ mb: { xs: 8, md: 11 } }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ fontSize: { xs: "2.25rem", md: "3.8rem" }, lineHeight: 1.05 }}>
                {t('about.aboutTitle')}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={{ fontSize: { xs: "1.1rem", md: "1.32rem" }, fontWeight: 500, lineHeight: 1.62, mb: 4 }}>
                {t('about.aboutText')}
              </Typography>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                sx={{
                  bgcolor: "#a3e635",
                  color: "#052e2b",
                  borderRadius: 999,
                  px: 3.8,
                  py: 1.2,
                  fontWeight: 800,
                  textTransform: "none",
                  "&:hover": { bgcolor: "#84cc16" },
                }}
              >
                {t('common.contactTeam')}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: sectionY, borderY: "1px solid var(--border)", background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {stats.map((item) => (
              <Grid item xs={12} md={4} key={item.labelKey} className="reveal-up">
                <Box sx={{ textAlign: "center", py: 1.2 }}>
                  <Typography sx={{ fontWeight: 800, fontSize: { xs: "2.1rem", md: "2.8rem" }, mb: 0.8, color: "#022c22" }}>
                    {t(`about.${item.valueKey}`)}
                  </Typography>
                  <Typography sx={{ color: "#4b5563", fontWeight: 500 }}>{t(`about.${item.labelKey}`)}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ px: { xs: 2, md: 3 }, py: { xs: 3, md: 5 }, background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Box sx={{ bgcolor: "#a3e635", borderRadius: limePanelRadius, px: limePanelPadding, pt: { xs: 5, md: 7 }, pb: { xs: 6, md: 8 } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#022c22" }} />
              <Typography sx={{ fontSize: "0.9rem", fontWeight: 700, color: "#052e2b" }}>{t('about.values')}</Typography>
            </Box>
            <Box sx={{ borderTop: "1px solid rgba(4,47,46,0.32)", pt: { xs: 4, md: 6 } }}>
              <Grid container spacing={{ xs: 4, md: 6 }}>
                {values.map((item) => (
                  <Grid item xs={12} md={4} key={item.titleKey}>
                    <Typography variant="h5" sx={{ mb: 1.2, fontWeight: 800, color: "#052e2b", fontSize: "1.25rem" }}>
                      {t(`about.${item.titleKey}`)}
                    </Typography>
                    <Typography sx={{ color: "#10403d", lineHeight: 1.6 }}>{t(`about.${item.textKey}`)}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>

    </main>
  );
}
