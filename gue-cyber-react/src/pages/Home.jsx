import { useTranslation } from "react-i18next";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";

function SolutionIcon({ type }) {
  const common = { width: 48, height: 48, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" };

  if (type === "programming") {
    return (
      <svg {...common}>
        <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white" />
        <path d="M16 18L12 24L16 30" stroke="#022C22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 18L36 24L32 30" stroke="#022C22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 34L26 14" stroke="#022C22" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "consultancy") {
    return (
      <svg {...common}>
        <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white" />
        <path d="M14 16H34" stroke="#022C22" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M14 24H30" stroke="#022C22" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M14 32H26" stroke="#022C22" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M34 30C36.2091 30 38 28.2091 38 26C38 23.7909 36.2091 22 34 22C31.7909 22 30 23.7909 30 26C30 28.2091 31.7909 30 34 30Z" fill="#022C22" />
      </svg>
    );
  }

  if (type === "support") {
    return (
      <svg {...common}>
        <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white" />
        <circle cx="18" cy="18" r="3" fill="#022C22" />
        <circle cx="30" cy="18" r="3" fill="#022C22" />
        <path d="M18 21V32" stroke="#022C22" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M30 21V32" stroke="#022C22" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M18 32H30" stroke="#022C22" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white" />
      <path d="M23.8425 12.3779C23.9008 12.238 24.0992 12.238 24.1575 12.3779L30.1538 26.7692C31.9835 31.1605 28.7572 36 24 36C19.2428 36 16.0165 31.1605 17.8462 26.7692L23.8425 12.3779Z" fill="#022C22" />
    </svg>
  );
}

export default function Home() {
  const { t } = useTranslation();
  const sectionY = { xs: 9, md: 13 };
  const limePanelRadius = { xs: 4, md: 5 };
  const limePanelPadding = { xs: 2.5, md: 6 };

  const capabilityCards = [
    { icon: "programming", titleKey: "capability1.title", textKey: "capability1.text" },
    { icon: "consultancy", titleKey: "capability2.title", textKey: "capability2.text" },
    { icon: "support", titleKey: "capability3.title", textKey: "capability3.text" },
  ];

  const trustTiles = [
    { titleKey: 'home.tiles.tile1.title', textKey: 'home.tiles.tile1.text' },
    { titleKey: 'home.tiles.tile2.title', textKey: 'home.tiles.tile2.text' },
    { titleKey: 'home.tiles.tile3.title', textKey: 'home.tiles.tile3.text' },
    { titleKey: 'home.tiles.tile4.title', textKey: 'home.tiles.tile4.text' },
  ];

  const processSteps = [
    { numberKey: "step1", titleKey: "step1Title", textKey: "step1Text" },
    { numberKey: "step2", titleKey: "step2Title", textKey: "step2Text" },
    { numberKey: "step3", titleKey: "step3Title", textKey: "step3Text" },
    { numberKey: "step4", titleKey: "step4Title", textKey: "step4Text" },
  ];

  return (
    <main>
      <Box
        sx={{
          background: "#042f2e",
          position: "relative",
          overflow: "hidden",
          pt: { xs: 16, md: 19 },
          pb: { xs: 13, md: 18 },
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

        <Container maxWidth="md" sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <Typography
            variant="h1"
            sx={{
              color: "#f8fafc",
              fontSize: { xs: "2.8rem", sm: "4.2rem", md: "6.1rem" },
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
              mb: 3,
            }}
          >
            {t('home.hero.title')}
          </Typography>
          <Typography
            sx={{
              color: "rgba(226,232,240,0.9)",
              fontSize: { xs: "1rem", md: "1.12rem" },
              maxWidth: 760,
              mx: "auto",
              mb: 4.8,
            }}
          >
            {t('home.heroDescription')}
          </Typography>
          <Typography sx={{ color: '#d9f99d', fontWeight: 700, mb: 4 }}>
            {t('home.tagline')}
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" }, justifyContent: "center" }}>
            <Button
              component={Link}
              to="/assessment"
              variant="contained"
              sx={{
                bgcolor: "#a3e635",
                color: "#0f172a",
                fontWeight: 800,
                px: 4,
                py: 1.45,
                borderRadius: 999,
                textTransform: "none",
                "&:hover": { bgcolor: "#bef264" },
              }}
            >
              {t('home.cta.button1')}
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="outlined"
              sx={{
                borderColor: "#a3e635",
                color: "#a3e635",
                fontWeight: 800,
                px: 4,
                py: 1.45,
                borderRadius: 999,
                textTransform: "none",
                "&:hover": { borderColor: "#bef264", color: "#bef264", background: "transparent" },
              }}
            >
              {t('home.cta.button2')}
            </Button>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: sectionY, borderBottom: "1px solid var(--border)", background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {trustTiles.map((tile, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Box sx={{ textAlign: "center", py: 2, px: 1 }}>
                  <Box sx={{ bgcolor: '#f8fafc', borderRadius: 2, p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid #e6eef0' }}>
                    <Typography sx={{ fontWeight: 800, color: '#052e2b', mb: 1 }}>{t(tile.titleKey)}</Typography>
                    <Typography sx={{ color: '#4b5563', fontSize: '0.95rem', textAlign: 'center' }}>{t(tile.textKey)}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: sectionY, background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 920, mx: "auto", textAlign: "center", mb: { xs: 6, md: 9 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: "2.25rem", md: "3.2rem" }, mb: 2.2, lineHeight: 1.06 }}>
              {t('home.whyChooseUs.title')}
            </Typography>
          </Box>
          <Grid container spacing={{ xs: 3, md: 5 }}>
            {[
              { titleKey: 'home.whyChooseUs.reason1.title', textKey: 'home.whyChooseUs.reason1.text' },
              { titleKey: 'home.whyChooseUs.reason2.title', textKey: 'home.whyChooseUs.reason2.text' },
              { titleKey: 'home.whyChooseUs.reason3.title', textKey: 'home.whyChooseUs.reason3.text' },
              { titleKey: 'home.whyChooseUs.reason4.title', textKey: 'home.whyChooseUs.reason4.text' },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
                <Box sx={{ p: 2.5, textAlign: "center" }}>
                  <Box sx={{ width: 60, height: 60, borderRadius: "50%", bgcolor: "#a3e635", mx: "auto", mb: 2.5, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Typography sx={{ fontSize: "1.8rem", fontWeight: 800, color: "#022c22" }}>{index + 1}</Typography>
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "#052e2b", mb: 1.5, fontSize: { xs: "1.15rem", md: "1.3rem" } }}>
                    {t(item.titleKey)}
                  </Typography>
                  <Typography sx={{ color: "#4b5563", lineHeight: 1.6 }}>{t(item.textKey)}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: sectionY, background: "#f8fafc" }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 920, mx: "auto", textAlign: "center", mb: { xs: 6, md: 9 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: "2.25rem", md: "3.2rem" }, mb: 2.2, lineHeight: 1.06 }}>
              {t('home.industries.title')}
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {t('home.industries.list', { returnObjects: true }).map((industry, index) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                <Box sx={{ p: 2.5, textAlign: "center", border: "1px solid #e2e8f0", borderRadius: 3, background: "#ffffff", transition: "all 0.3s ease", "&:hover": { borderColor: "#a3e635", boxShadow: "0 4px 12px rgba(163, 230, 53, 0.1)" } }}>
                  <Typography sx={{ fontWeight: 700, color: "#022c22", fontSize: "0.95rem" }}>{industry}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: sectionY, background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 920, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: "2.25rem", md: "3.2rem" }, mb: 2, lineHeight: 1.06 }}>
              {t('home.deliverTitle')}
            </Typography>
            <Typography sx={{ color: "var(--text-muted)", maxWidth: 760, mx: "auto" }}>
              {t('home.deliverSubtitle')}
            </Typography>
          </Box>
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {capabilityCards.map((item) => (
              <Grid item xs={12} sm={6} md={6} lg={3} key={item.titleKey}>
                <Box sx={{ p: 3.5, border: "1px solid #e2e8f0", borderRadius: 3, background: "#fafbfc", transition: "all 0.3s ease", "&:hover": { borderColor: "#a3e635", boxShadow: "0 8px 24px rgba(163, 230, 53, 0.15)", transform: "translateY(-4px)" } }}>
                  <SolutionIcon type={item.icon} />
                  <Typography variant="h5" sx={{ mt: 2.5, mb: 1.5, fontWeight: 800, color: "#052e2b", fontSize: "1.15rem" }}>
                    {t(`home.${item.titleKey}`)}
                  </Typography>
                  <Typography sx={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.6, mb: 2.5 }}>{t(`home.${item.textKey}`)}</Typography>
                  <Button
                    component={Link}
                    to="/services"
                    variant="text"
                    sx={{
                      p: 0,
                      minWidth: 0,
                      color: "#022c22",
                      fontWeight: 700,
                      textTransform: "none",
                      fontSize: "0.9rem",
                      "&:hover": { background: "transparent", color: "#a3e635" },
                    }}
                  >
                    {t('common.readMore')} →
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: "center", mt: { xs: 6, md: 8 } }}>
            <Button
              component={Link}
              to="/services"
              variant="contained"
              sx={{
                bgcolor: "#022c22",
                color: "#fff",
                borderRadius: 999,
                px: 4,
                py: 1.3,
                fontWeight: 700,
                textTransform: "none",
                fontSize: "0.95rem",
                "&:hover": { bgcolor: "#064e3b" },
              }}
            >
              {t('home.exploreAllServices')}
            </Button>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: sectionY, background: "#ffffff", overflow: "hidden" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3.2rem" }, mb: 1.5 }}>
              {t('home.faqTitle')}
            </Typography>
            <Typography sx={{ color: "var(--text-muted)", maxWidth: 700, mx: "auto" }}>
              {t('home.faqDescription')}
            </Typography>
          </Box>
          <FAQ />
        </Container>
      </Box>

      <Box sx={{ py: sectionY, background: "#f8fafc", overflow: "hidden" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3.2rem" }, mb: 1.5 }}>
              {t('services.processTitle')}
            </Typography>
            <Typography sx={{ color: "var(--text-muted)", maxWidth: 760, mx: "auto" }}>
              {t('services.processDescription')}
            </Typography>
          </Box>
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {processSteps.map((step) => (
              <Grid item xs={12} sm={6} md={3} key={step.titleKey}>
                <Box sx={{ height: '100%', p: 3, borderRadius: 3, background: '#ffffff', border: '1px solid #e2e8f0' }}>
                  <Typography sx={{ color: '#a3e635', fontWeight: 800, mb: 1 }}>{t(`services.${step.numberKey}`)}</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#052e2b', mb: 1.2, fontSize: '1.15rem' }}>
                    {t(`services.${step.titleKey}`)}
                  </Typography>
                  <Typography sx={{ color: '#4b5563', lineHeight: 1.6 }}>{t(`services.${step.textKey}`)}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ px: { xs: 2, md: 3 }, py: { xs: 3, md: 4 }, background: "#ffffff" }}>
        <Container maxWidth="xl">
          <Box
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
                  {t('home.cta.title')}
                </Typography>
                <Typography sx={{ color: "rgba(226,232,240,0.84)", maxWidth: 760 }}>
                  {t('home.cta.description')}
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
                  Start consultation
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </main>
  );
}
