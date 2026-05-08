import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Link } from "react-router-dom";

export default function Services() {
  const { t } = useTranslation();
  const sectionY = { xs: 9, md: 13 };
  const limePanelRadius = { xs: 4, md: 5 };
  const limePanelPadding = { xs: 2.5, md: 6 };

  const serviceCategories = [
    {
      code: "62.100",
      titleKey: "service1.title",
      itemsKey: "service1.items",
      index: 0,
    },
    {
      code: "62.200",
      titleKey: "service2.title",
      itemsKey: "service2.items",
      index: 1,
    },
    {
      code: "62.900",
      titleKey: "service3.title",
      itemsKey: "service3.items",
      index: 2,
    },
  ];

  const process = [
    { index: 0, stepKey: "step1", titleKey: "step1Title", textKey: "step1Text" },
    { index: 1, stepKey: "step2", titleKey: "step2Title", textKey: "step2Text" },
    { index: 2, stepKey: "step3", titleKey: "step3Title", textKey: "step3Text" },
    { index: 3, stepKey: "step4", titleKey: "step4Title", textKey: "step4Text" },
  ];

  return (
    <main>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: "#0f2747",
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
            opacity: 0.42,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(40% 60% at 12% 35%, rgba(34,211,238,0.22) 0%, rgba(34,211,238,0) 75%), radial-gradient(40% 60% at 92% 78%, rgba(34,211,238,0.18) 0%, rgba(34,211,238,0) 72%), linear-gradient(180deg, #0f2747 0%, #071629 100%)",
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
              "repeating-linear-gradient(126deg, transparent 0, transparent 14px, rgba(34,211,238,0.45) 15px, transparent 17px)",
            backgroundSize: "180% 180%",
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box className="reveal-up" sx={{ maxWidth: 920, mx: "auto", textAlign: "center" }}>
            <Typography sx={{ color: "#d9f99d", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.78rem", mb: 2 }}>
              {t('common.services')}
            </Typography>
            <Typography variant="h1" sx={{ color: "#f8fafc", fontSize: { xs: "2.6rem", sm: "3.9rem", md: "4.9rem" }, lineHeight: 1.03, mb: 2.2 }}>
              {t('services.hero.title')}
            </Typography>
            <Typography sx={{ color: "rgba(226,232,240,0.9)", fontSize: { xs: "1rem", md: "1.12rem" }, maxWidth: 760, mx: "auto" }}>
              {t('services.description')}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Cybersecurity capabilities panel */}
      <Box sx={{ py: { xs: 6, md: 8 }, background: '#ffffff' }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 920, mx: 'auto', textAlign: 'center', mb: { xs: 3, md: 5 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, mb: 1.5 }}>{t('services.cyberTitle')}</Typography>
            <Typography sx={{ color: 'var(--text-muted)', maxWidth: 760, mx: 'auto' }}>{t('services.cyberline')}</Typography>
          </Box>

          <Grid container spacing={3} sx={{ maxWidth: 920, mx: 'auto' }}>
            {t('services.cyberItems', { returnObjects: true }).map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item}>
                <Box sx={{ display: 'flex', gap: 1.2, alignItems: 'flex-start' }}>
                  <CheckCircleOutlineIcon sx={{ color: '#0284c7', mt: 0.4 }} />
                  <Typography sx={{ color: '#374151' }}>{item}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ background: '#f8fafc', borderBottom: '1px solid #dbe4ef' }}>
        <Container maxWidth="lg">
          <Box sx={{ py: 2.5, display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' } }}>
            {serviceCategories.map((item) => (
              <Box key={item.code} sx={{ textAlign: 'center', py: 1.3, px: 1.5, borderRadius: 999, background: '#ffffff', border: '1px solid #dbe4ef', color: '#0f2747', fontWeight: 700, boxShadow: '0 6px 18px rgba(15,39,71,0.04)' }}>
                {t(`services.${item.titleKey}`)}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: sectionY, background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {serviceCategories.map((item) => (
              <Grid item xs={12} md={6} key={item.index}>
                <Box
                  className="hover-lift"
                  sx={{
                    position: "relative",
                    pt: 5.5,
                    pb: 4,
                    px: 3.2,
                    borderRadius: 4,
                    overflow: "hidden",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "#22d3ee",
                      boxShadow: "0 8px 24px rgba(34, 211, 238, 0.16)",
                    },
                  }}
                >
                  <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, bgcolor: "#22d3ee" }} />

                  <Box sx={{ width: 50, height: 50, borderRadius: 2.5, bgcolor: "#0f2747", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", mb: 2.5, fontSize: "1.8rem" }}>
                    <Typography sx={{ fontSize: "1.2rem", fontWeight: 800 }}>●</Typography>
                  </Box>

                  <Typography sx={{ fontSize: "1.5rem", fontWeight: 800, mb: 2.2, color: "#0f2747" }}>
                    {item.titleKey ? t(`services.${item.titleKey}`) : item.title}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    {item.itemsKey ? (
                      t(`services.${item.itemsKey}`, { returnObjects: true }).map((entry) => (
                        <Box key={entry} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 1.2 }}>
                          <CheckCircleOutlineIcon sx={{ fontSize: 18, mt: 0.2, color: "#0284c7", flexShrink: 0 }} />
                          <Typography sx={{ color: "#374151", fontSize: "0.95rem", lineHeight: 1.5 }}>{entry}</Typography>
                        </Box>
                      ))
                    ) : (
                      item.deliverables.map((entry) => (
                        <Box key={entry} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 1.2 }}>
                          <CheckCircleOutlineIcon sx={{ fontSize: 18, mt: 0.2, color: "#0284c7", flexShrink: 0 }} />
                          <Typography sx={{ color: "#374151", fontSize: "0.95rem", lineHeight: 1.5 }}>{entry}</Typography>
                        </Box>
                      ))
                    )}
                  </Box>

                  <Button
                    component={Link}
                    to="/contact"
                    variant="contained"
                    sx={{
                      bgcolor: "#0f2747",
                      color: "#fff",
                      borderRadius: 999,
                      px: 3,
                      py: 0.85,
                      textTransform: "none",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      "&:hover": { bgcolor: "#14335d" },
                    }}
                  >
                    {t('common.contactUs')}
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ px: { xs: 2, md: 3 }, py: { xs: 3, md: 5 }, background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Box className="reveal-up" sx={{ bgcolor: "#a3e635", borderRadius: limePanelRadius, px: limePanelPadding, pt: { xs: 5, md: 7 }, pb: { xs: 6, md: 8 } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#022c22" }} />
              <Typography sx={{ fontSize: "0.9rem", fontWeight: 700, color: "#0f2747" }}>{t('services.processTitle')}</Typography>
            </Box>
            <Box sx={{ borderTop: "1px solid rgba(15,39,71,0.2)", pt: { xs: 4, md: 6 } }}>
              <Grid container spacing={{ xs: 3.5, md: 5 }}>
                {process.map((item) => (
                  <Grid item xs={12} sm={6} key={item.index}>
                    <Typography sx={{ color: "#0284c7", fontWeight: 800, mb: 0.55 }}>{t(`services.${item.stepKey}`)}</Typography>
                    <Typography sx={{ fontWeight: 800, mb: 0.6, color: "#0f2747", fontSize: "1.26rem" }}>{t(`services.${item.titleKey}`)}</Typography>
                    <Typography sx={{ color: "#334155" }}>{t(`services.${item.textKey}`)}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ px: { xs: 2, md: 3 }, py: { xs: 3, md: 4 }, background: "#ffffff" }}>
        <Container maxWidth="xl">
          <Box
            className="reveal-up delay-1"
            sx={{
              position: "relative",
              overflow: "hidden",
              maxWidth: { xs: "100%", lg: 1200 },
              mx: "auto",
              borderRadius: { xs: 4, md: 5 },
              bgcolor: "#022c22",
              px: { xs: 3, md: 10 },
              py: { xs: 5.5, md: 8.5 },
            }}
          >
            <Box
              component="img"
              src="/images/footer-waves-left-bottom.png"
              alt=""
              sx={{
                position: "absolute",
                left: 0,
                bottom: 0,
                width: { xs: 220, md: 340 },
                opacity: 0.35,
                pointerEvents: "none",
              }}
            />
            <Grid container spacing={3} alignItems="center" sx={{ position: "relative", zIndex: 1 }}>
              <Grid item xs={12} md={8}>
                <Typography variant="h2" sx={{ color: "#fff", fontSize: { xs: "2rem", md: "2.9rem" }, mb: 1.5, lineHeight: 1.08 }}>
                  {t('services.cta.title')}
                </Typography>
                <Typography sx={{ color: "rgba(226,232,240,0.84)", maxWidth: 760 }}>
                  {t('services.cta.description')}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sx={{ textAlign: { xs: "left", md: "right" } }}>
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
                    "&:hover": { bgcolor: "#bef264" },
                  }}
                >
                  {t('common.contactUs')}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </main>
  );
}
