import type { ThemeOptions } from "@mui/material/styles";

const fontFamily = [
  "Inter",
  "Segoe UI",
  "Roboto",
  "Helvetica Neue",
  "Arial",
  "sans-serif",
].join(",");

const createWorkboardTheme = (mode: "light" | "dark"): ThemeOptions => {
  const isDark = mode === "dark";
  const colors = {
    background: isDark ? "#091820" : "#F3F7F8",
    paper: isDark ? "#10252F" : "#FFFFFF",
    border: isDark ? "rgba(148, 210, 199, 0.16)" : "#DCE8E8",
    sidebar: isDark ? "#07151C" : "#0B2632",
    sidebarMuted: "#9CB7BE",
    text: isDark ? "#ECF7F5" : "#17343D",
    textMuted: isDark ? "#A4BCC2" : "#627C83",
  };

  return {
    palette: {
      mode,
      primary: {
        main: isDark ? "#50D5C4" : "#0F8B7E",
        light: "#78E1D3",
        dark: "#08675E",
        contrastText: isDark ? "#06201D" : "#FFFFFF",
      },
      secondary: {
        main: isDark ? "#84AFFF" : "#3B6FD8",
        light: "#A9C5FF",
        dark: "#2855AD",
        contrastText: "#FFFFFF",
      },
      background: {
        default: colors.background,
        paper: colors.paper,
      },
      text: {
        primary: colors.text,
        secondary: colors.textMuted,
      },
      divider: colors.border,
      success: { main: "#2E9E6F" },
      warning: { main: "#E3A124" },
      error: { main: "#D94F5C" },
    },
    shape: {
      borderRadius: 14,
    },
    sidebar: {
      width: 264,
      closedWidth: 64,
    },
    typography: {
      fontFamily,
      h1: { fontWeight: 750, letterSpacing: "-0.03em" },
      h2: { fontWeight: 750, letterSpacing: "-0.025em" },
      h3: { fontWeight: 720, letterSpacing: "-0.02em" },
      h4: { fontWeight: 720, letterSpacing: "-0.02em" },
      h5: { fontWeight: 700, letterSpacing: "-0.015em" },
      h6: { fontWeight: 700, letterSpacing: "-0.01em" },
      button: { fontWeight: 700, letterSpacing: "0.01em" },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: colors.background,
          },
          "*::selection": {
            backgroundColor: isDark ? "#1D7169" : "#BDE8E2",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            color: colors.text,
            backgroundColor: isDark
              ? "rgba(16, 37, 47, 0.94)"
              : "rgba(255, 255, 255, 0.94)",
            backgroundImage: "none",
            borderBottom: `1px solid ${colors.border}`,
            boxShadow: "0 6px 24px rgba(16, 52, 62, 0.06)",
            backdropFilter: "blur(14px)",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
          elevation1: {
            border: `1px solid ${colors.border}`,
            boxShadow: isDark
              ? "0 16px 36px rgba(0, 0, 0, 0.22)"
              : "0 16px 40px rgba(21, 75, 83, 0.08)",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            border: `1px solid ${colors.border}`,
            borderRadius: 18,
            boxShadow: isDark
              ? "0 18px 42px rgba(0, 0, 0, 0.22)"
              : "0 18px 44px rgba(26, 72, 79, 0.08)",
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            minHeight: 38,
            borderRadius: 10,
            paddingInline: 16,
            textTransform: "none",
          },
          containedPrimary: {
            boxShadow: "0 7px 18px rgba(15, 139, 126, 0.22)",
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: "outlined",
          margin: "dense",
          size: "small",
          fullWidth: true,
        },
      },
      MuiFormControl: {
        defaultProps: {
          variant: "outlined",
          margin: "dense",
          size: "small",
          fullWidth: true,
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? "rgba(255, 255, 255, 0.035)" : "#FBFDFD",
            borderRadius: 11,
            transition: "box-shadow 160ms ease, background-color 160ms ease",
            "&:hover": {
              backgroundColor: isDark
                ? "rgba(255, 255, 255, 0.055)"
                : "#FFFFFF",
            },
            "&.Mui-focused": {
              backgroundColor: colors.paper,
              boxShadow: isDark
                ? "0 0 0 3px rgba(80, 213, 196, 0.12)"
                : "0 0 0 3px rgba(15, 139, 126, 0.1)",
            },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: `1px solid ${colors.border}`,
            paddingBlock: 13,
          },
          head: {
            color: colors.textMuted,
            backgroundColor: isDark ? "#132C36" : "#F7FAFA",
            fontSize: "0.72rem",
            fontWeight: 800,
            letterSpacing: "0.055em",
            textTransform: "uppercase",
          },
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            transition: "background-color 140ms ease",
            "&:hover": {
              backgroundColor: isDark
                ? "rgba(80, 213, 196, 0.055) !important"
                : "rgba(15, 139, 126, 0.045) !important",
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 9,
            fontWeight: 650,
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            borderRadius: 8,
            fontSize: "0.76rem",
          },
        },
      },
      RaLayout: {
        styleOverrides: {
          content: {
            padding: "22px 26px 30px",
          },
        },
      },
      RaSidebar: {
        styleOverrides: {
          root: {
            "& .MuiPaper-root": {
              color: "#E8F2F3",
              backgroundColor: colors.sidebar,
              borderRight: "none",
              boxShadow: "10px 0 32px rgba(4, 26, 34, 0.1)",
            },
          },
        },
      },
      RaMenu: {
        styleOverrides: {
          root: {
            gap: 5,
            padding: "16px 10px",
          },
        },
      },
      RaMenuItemLink: {
        styleOverrides: {
          root: {
            minHeight: 46,
            margin: "0 2px",
            color: colors.sidebarMuted,
            borderRadius: 11,
            fontWeight: 650,
            "& .RaMenuItemLink-icon": {
              color: colors.sidebarMuted,
            },
            "&:hover": {
              color: "#FFFFFF",
              backgroundColor: "rgba(255, 255, 255, 0.07)",
              "& .RaMenuItemLink-icon": {
                color: "#FFFFFF",
              },
            },
            "&.RaMenuItemLink-active": {
              color: "#FFFFFF",
              backgroundColor: "rgba(80, 213, 196, 0.16)",
              boxShadow: "inset 3px 0 0 #50D5C4",
              "& .RaMenuItemLink-icon": {
                color: "#50D5C4",
              },
            },
          },
        },
      },
      RaList: {
        styleOverrides: {
          content: {
            overflow: "hidden",
            border: `1px solid ${colors.border}`,
            borderRadius: 18,
            boxShadow: isDark
              ? "0 18px 42px rgba(0, 0, 0, 0.2)"
              : "0 18px 44px rgba(26, 72, 79, 0.07)",
          },
        },
      },
      RaFilterForm: {
        styleOverrides: {
          root: {
            gap: 8,
            paddingBlock: 8,
          },
        },
      },
      RaToolbar: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? "#132C36" : "#F5F9F9",
            borderTop: `1px solid ${colors.border}`,
          },
        },
      },
      RaLogin: {
        styleOverrides: {
          root: {
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#071E28",
            backgroundImage:
              "radial-gradient(circle at 18% 18%, rgba(80, 213, 196, 0.24), transparent 30%), radial-gradient(circle at 82% 72%, rgba(59, 111, 216, 0.2), transparent 34%), linear-gradient(145deg, #0B3039 0%, #071E28 46%, #0B1730 100%)",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              opacity: 0.22,
              pointerEvents: "none",
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.75), transparent 82%)",
            },
            "& .RaLogin-card": {
              position: "relative",
              width: "min(390px, calc(100vw - 32px))",
              padding: "28px 26px 18px",
              marginTop: "clamp(48px, 10vh, 110px)",
              border: "1px solid rgba(255, 255, 255, 0.72)",
              borderRadius: 22,
              boxShadow: "0 28px 70px rgba(0, 13, 20, 0.34)",
              backdropFilter: "blur(18px)",
            },
            "& .RaLogin-card::before": {
              content: '"DOC’S WORKBOARD"',
              display: "block",
              color: colors.text,
              fontSize: "0.86rem",
              fontWeight: 850,
              letterSpacing: "0.09em",
              textAlign: "center",
            },
            "& .RaLogin-card::after": {
              content: '"Clinical workspace"',
              display: "block",
              position: "absolute",
              top: 50,
              right: 0,
              left: 0,
              color: colors.textMuted,
              fontSize: "0.72rem",
              textAlign: "center",
            },
            "& .RaLogin-avatar": {
              margin: "38px 0 18px",
            },
            "& .RaLogin-icon": {
              width: 48,
              height: 48,
              color: "#FFFFFF",
              backgroundColor: "#0F8B7E",
              boxShadow: "0 10px 24px rgba(15, 139, 126, 0.28)",
            },
          },
        },
      },
    },
  };
};

export const lightTheme = createWorkboardTheme("light");
export const darkTheme = createWorkboardTheme("dark");
