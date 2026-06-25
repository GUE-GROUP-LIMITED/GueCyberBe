import { useTranslation } from 'react-i18next';
import { Box, Menu, MenuItem, Button } from '@mui/material';
import { useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';

export default function LanguageSwitcher({ faunaHeroMode, compact = false, buttonSx = {} }) {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'nl', label: 'Nederlands' },
    { code: 'fr', label: 'Français' },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    handleClose();
  };

  const currentLanguage = languages.find((lang) => lang.code === i18n.language);

  return (
    <Box>
      <Button
        aria-label="Change language"
        startIcon={<LanguageIcon sx={{ fontSize: compact ? 16 : 18 }} />}
        onClick={handleClick}
        sx={{
          color: faunaHeroMode ? '#f8fafc' : 'var(--primary)',
          fontWeight: 600,
          fontSize: compact ? '0.82rem' : '0.85rem',
          textTransform: 'uppercase',
          padding: compact ? '10px 14px' : '8px 12px',
          minWidth: compact ? 112 : 'auto',
          justifyContent: 'space-between',
          gap: compact ? 0.5 : 0.75,
          borderRadius: compact ? '14px' : '10px',
          border: compact ? '1px solid var(--border)' : 'none',
          backgroundColor: faunaHeroMode ? 'transparent' : 'transparent',
          '&:hover': {
            backgroundColor: faunaHeroMode ? 'rgba(255,255,255,0.1)' : 'rgba(2,44,34,0.08)',
          },
          ...buttonSx,
        }}
      >
        {currentLanguage?.label || 'Language'}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            selected={lang.code === i18n.language}
            sx={{ fontSize: '0.9rem' }}
          >
            {lang.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
