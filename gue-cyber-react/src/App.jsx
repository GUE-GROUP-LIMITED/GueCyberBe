import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, CircularProgress } from '@mui/material';
import { Analytics } from '@vercel/analytics/react';

import './i18n';

import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import CookieConsentBanner from "./components/CookieConsentBanner";
import SeoManager from "./components/SeoManager";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Assessment from "./pages/Assessment";
import Blog from "./pages/Blog";
import About from "./pages/About";
const Careers = lazy(() => import('./pages/Careers'));
// Removed unused service page imports

import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import CookiePolicy from "./pages/CookiePolicy";

// Create a theme instance
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0f2747',
    },
    secondary: {
      main: '#22d3ee',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#0b1220',
      secondary: '#646a69',
    },
  },
  typography: {
    fontFamily: '"Figtree", "Inter", "Segoe UI", sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.03em' },
    h2: { fontWeight: 800, letterSpacing: '-0.02em' },
    h3: { fontWeight: 750, letterSpacing: '-0.01em' },
    h4: { fontWeight: 750, letterSpacing: '-0.01em', lineHeight: 1.25 },
    h5: { fontWeight: 700, lineHeight: 1.28 },
    h6: { fontWeight: 700, lineHeight: 1.32 },
    body1: { lineHeight: 1.65, fontSize: '1rem' },
    body2: { lineHeight: 1.6, fontSize: '0.93rem' },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 22,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'radial-gradient(900px 420px at 0% -5%, rgba(34,211,238,0.08), transparent 52%), radial-gradient(900px 380px at 100% 0%, rgba(15,39,71,0.06), transparent 60%), #f8fafc',
        },
      },
    },
  },
});

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <SeoManager />
      {/* Skip link: visible on keyboard focus to jump to main content */}
      <a href="#main" className="skip-link">Skip to main content</a>
      <SiteHeader />
      <Suspense fallback={<Box role="status" aria-live="polite" sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}><CircularProgress aria-label="Loading page content" /></Box>}>
        <main id="main" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<About />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/cybersecurity-services" element={<Navigate to="/services" replace />} />
            <Route path="/blog" element={<Blog />} />
            {/* Only main services remain. Removed unused service detail routes. */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </main>
      </Suspense>
      <SiteFooter />
      <CookieConsentBanner />
      <Analytics />
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ width: '100%', overflowX: 'hidden' }}>
        <Router>
          <AppLayout />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
