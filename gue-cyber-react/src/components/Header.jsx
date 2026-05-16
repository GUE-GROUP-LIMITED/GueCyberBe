import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { IconButton, Drawer, List, ListItemButton, ListItemText, Box, Button, Stack } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from 'react-i18next';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t } = useTranslation();
    const faunaHeroMode = !scrolled;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { to: "/", label: t('common.home') },
        { to: "/about", label: t('common.about') },
        { to: "/services", label: t('common.services') },
        { href: "https://insights.guecyber.com/", label: t('common.insights'), external: true },
        { to: "/contact", label: t('common.contact') },
    ];

    const navLinkStyle = ({ isActive }) => ({
        color: isActive ? (faunaHeroMode ? '#f8fafc' : 'var(--primary)') : (faunaHeroMode ? 'rgba(226,232,240,0.9)' : '#475569'),
        fontWeight: isActive ? 700 : 600,
        fontSize: '0.9rem',
        padding: '10px 4px',
        borderBottom: `2px solid ${isActive ? (faunaHeroMode ? '#a3e635' : 'var(--accent)') : 'transparent'}`,
        textDecoration: 'none',
        transition: 'all 0.25s ease',
        background: 'transparent',
        boxShadow: 'none',
    });

    const externalNavLinkStyle = {
        color: faunaHeroMode ? 'rgba(226,232,240,0.9)' : '#475569',
        fontWeight: 600,
        fontSize: '0.9rem',
        padding: '10px 4px',
        borderBottom: '2px solid transparent',
        textDecoration: 'none',
        transition: 'all 0.25s ease',
        background: 'transparent',
        boxShadow: 'none',
    };

    return (
        <header>
            <Box component="nav" sx={{
                background: faunaHeroMode ? '#022c22' : '#ffffff',
                backdropFilter: faunaHeroMode ? 'blur(16px)' : 'none',
                WebkitBackdropFilter: faunaHeroMode ? 'blur(16px)' : 'none',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                minHeight: { xs: 70, md: 82, lg: 88 },
                display: 'flex',
                alignItems: 'center',
                transition: 'all 0.4s ease',
                borderBottom: faunaHeroMode ? '1px solid transparent' : '1px solid var(--border)',
                boxShadow: faunaHeroMode ? 'none' : 'none',
            }}>
                <Box
                    component="img"
                    src="/images/header-bg-waves.png"
                    alt=""
                    aria-hidden="true"
                    loading="eager"
                    decoding="async"
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        opacity: faunaHeroMode ? 0.5 : 0.42,
                        pointerEvents: 'none',
                        zIndex: 0,
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        background: faunaHeroMode
                            ? 'linear-gradient(180deg, rgba(2,44,34,0.46) 0%, rgba(2,44,34,0.68) 100%)'
                            : 'linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.48) 100%)',
                        zIndex: 0,
                    }}
                />
                <Box sx={{ width: '100%', maxWidth: 1240, mx: 'auto', px: { xs: 3, md: 5, lg: 6 }, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>

                    {/* Brand */}
                    <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.2, md: 2 }, textDecoration: 'none' }}>
                        <Box
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '12px',
                                px: { xs: 0.7, md: 0.9 },
                                py: { xs: 0.35, md: 0.45 },
                                background: '#a3e635',
                                boxShadow: faunaHeroMode ? 'none' : '0 8px 16px rgba(2,44,34,0.18)',
                                transition: 'all 0.25s ease',
                            }}
                        >
                            <Box component="img" src={logo} alt="Gue Cyber" loading="eager" decoding="async" fetchPriority="high" sx={{ height: { xs: 36, md: 46, lg: 50 }, width: 'auto', display: 'block' }} />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
                            <Box component="span" sx={{ color: faunaHeroMode ? '#f8fafc' : 'var(--primary)', fontWeight: 800, fontSize: { xs: '0.78rem', md: '0.95rem' }, letterSpacing: '0.04em' }}>
                                {t('header.brand')}
                            </Box>
                        </Box>
                    </Box>

                    {/* Desktop Navigation */}
                    <Stack direction="row" spacing={3} sx={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center',
                        p: 0,
                        borderRadius: '999px',
                        background: 'transparent',
                        border: 'none',
                    }}>
                        {navLinks.map(link => (
                            link.external ? (
                                <Box
                                    key={link.href}
                                    component="a"
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    sx={externalNavLinkStyle}
                                >
                                    {link.label}
                                </Box>
                            ) : (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    style={navLinkStyle}
                                >
                                    {link.label}
                                </NavLink>
                            )
                        ))}
                    </Stack>

                    {/* Desktop CTA & Language Switcher */}
                    <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                        <LanguageSwitcher scrolled={scrolled} faunaHeroMode={faunaHeroMode} />
                        <Button
                            component={Link} to="/contact"
                            variant="contained"
                            sx={{
                                textTransform: 'none',
                                px: { md: 3.4, lg: 4 }, py: { md: 1.25, lg: 1.5 },
                                background: faunaHeroMode ? 'transparent' : 'var(--primary)',
                                color: faunaHeroMode ? '#f8fafc' : '#fff',
                                border: faunaHeroMode ? '1px solid rgba(248,250,252,0.5)' : '1px solid transparent',
                                borderRadius: '100px',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                boxShadow: 'var(--shadow-sm)',
                                '&:hover': { background: 'var(--accent)', boxShadow: 'var(--shadow-md)' }
                            }}
                        >
                               {t('common.contactUs')}
                        </Button>
                    </Stack>

                    {/* Mobile Menu Button */}
                    <IconButton
                        aria-label="Open navigation menu"
                        onClick={() => setMobileOpen(true)}
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            color: faunaHeroMode ? '#f8fafc' : 'var(--primary)',
                            background: faunaHeroMode ? 'rgba(248,250,252,0.16)' : 'rgba(15,23,42,0.06)',
                            '&:hover': { background: faunaHeroMode ? 'rgba(248,250,252,0.24)' : 'rgba(15,23,42,0.12)' }
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>

                {/* Mobile Menu */}
                <Drawer
                    anchor="right"
                    open={mobileOpen}
                    onClose={() => setMobileOpen(false)}
                    PaperProps={{ sx: { width: '85%', maxWidth: 360, p: 4, background: '#fff', borderLeft: '1px solid var(--border)' } }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Box
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '10px',
                                    px: 0.65,
                                    py: 0.35,
                                    background: '#022c22',
                                    boxShadow: '0 8px 16px rgba(2,44,34,0.16)',
                                }}
                            >
                                <Box component="img" src={logo} alt="Gue Cyber logo" loading="lazy" decoding="async" sx={{ height: 40, display: 'block' }} />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
                                <Box component="span" sx={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.88rem', letterSpacing: '0.04em' }}>
                                    GUE CYBER
                                </Box>
                            </Box>
                        </Box>
                        <IconButton aria-label="Close navigation menu" onClick={() => setMobileOpen(false)} sx={{ color: 'var(--primary)' }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                        <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 3 }}>
                            <LanguageSwitcher scrolled={scrolled} faunaHeroMode={false} compact />
                        </Box>
                    <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {navLinks.map((link) => (
                            link.external ? (
                                <ListItemButton
                                    key={link.href}
                                    component="a"
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={() => setMobileOpen(false)}
                                    sx={{
                                        py: 2.5, borderRadius: '16px',
                                        '&.active': { background: 'var(--accent-soft)', color: 'var(--accent)' }
                                    }}
                                >
                                    <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 700, fontSize: '1.2rem' }} />
                                </ListItemButton>
                            ) : (
                                <ListItemButton
                                    key={link.to}
                                    component={NavLink} to={link.to}
                                    onClick={() => setMobileOpen(false)}
                                    sx={{
                                        py: 2.5, borderRadius: '16px',
                                        '&.active': { background: 'var(--accent-soft)', color: 'var(--accent)' }
                                    }}
                                >
                                    <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 700, fontSize: '1.2rem' }} />
                                </ListItemButton>
                            )
                        ))}
                    </List>
                    <Button
                        component={Link} to="/contact"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 4, py: 2, borderRadius: '16px', background: 'var(--primary)', fontWeight: 700, '&:hover': { background: 'var(--accent)' } }}
                    >
                        Get Started
                    </Button>
                </Drawer>
            </Box>
        </header>
    );
}