import { useState, type MouseEvent } from "react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import { useLocaleState } from "react-admin";
import { supportedLocales } from "./i18n";

const LanguageFlag = ({ locale }: { locale: string }) => {
  const flagStyle = {
    width: 26,
    height: 17,
    borderRadius: 3,
    boxShadow: "0 0 0 1px rgba(15, 23, 42, 0.16)",
    flexShrink: 0,
  } as const;

  if (locale === "ru") {
    return (
      <svg viewBox="0 0 60 36" style={flagStyle} aria-hidden="true">
        <rect width="60" height="12" fill="#FFFFFF" />
        <rect y="12" width="60" height="12" fill="#0039A6" />
        <rect y="24" width="60" height="12" fill="#D52B1E" />
      </svg>
    );
  }

  if (locale === "uz") {
    return (
      <svg viewBox="0 0 60 36" style={flagStyle} aria-hidden="true">
        <rect width="60" height="11" fill="#1EB5E9" />
        <rect y="11" width="60" height="2" fill="#CE1126" />
        <rect y="13" width="60" height="10" fill="#FFFFFF" />
        <rect y="23" width="60" height="2" fill="#CE1126" />
        <rect y="25" width="60" height="11" fill="#1EB53A" />
        <circle cx="9" cy="5.7" r="4.1" fill="#FFFFFF" />
        <circle cx="10.8" cy="4.9" r="4.1" fill="#1EB5E9" />
        <circle cx="17" cy="3.7" r="0.85" fill="#FFFFFF" />
        <circle cx="21" cy="3.7" r="0.85" fill="#FFFFFF" />
        <circle cx="15" cy="7" r="0.85" fill="#FFFFFF" />
        <circle cx="19" cy="7" r="0.85" fill="#FFFFFF" />
        <circle cx="23" cy="7" r="0.85" fill="#FFFFFF" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 60 36" style={flagStyle} aria-hidden="true">
      <rect width="60" height="36" fill="#012169" />
      <path d="M0 0 60 36M60 0 0 36" stroke="#FFFFFF" strokeWidth="8" />
      <path d="M0 0 60 36M60 0 0 36" stroke="#C8102E" strokeWidth="4" />
      <path d="M30 0V36M0 18H60" stroke="#FFFFFF" strokeWidth="12" />
      <path d="M30 0V36M0 18H60" stroke="#C8102E" strokeWidth="7" />
    </svg>
  );
};

export const LanguageSwitcher = () => {
  const [locale, setLocale] = useLocaleState();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const currentLocale =
    supportedLocales.find((language) => language.locale === locale) ??
    supportedLocales[0];

  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const selectLocale = (nextLocale: string) => {
    setLocale(nextLocale);
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        color="inherit"
        onClick={openMenu}
        startIcon={<LanguageFlag locale={currentLocale.locale} />}
        endIcon={<ExpandMoreRoundedIcon fontSize="small" />}
        aria-label={`Language: ${currentLocale.name}`}
        aria-controls={anchorEl ? "language-menu" : undefined}
        aria-expanded={anchorEl ? "true" : undefined}
        aria-haspopup="menu"
        sx={{ minWidth: 138, textTransform: "none", fontWeight: 700 }}
      >
        {currentLocale.name}
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {supportedLocales.map((language) => (
          <MenuItem
            key={language.locale}
            selected={language.locale === currentLocale.locale}
            onClick={() => selectLocale(language.locale)}
          >
            <Box sx={{ mr: 1.25, display: "flex" }}>
              <LanguageFlag locale={language.locale} />
            </Box>
            {language.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
