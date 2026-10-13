import type { ReactNode } from "react";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
import { Box, Typography } from "@mui/material";
import {
  AppBar,
  CheckForApplicationUpdate,
  Layout as RALayout,
  LoadingIndicator,
  TitlePortal,
  ToggleThemeButton,
  useTranslate,
} from "react-admin";
import { LanguageSwitcher } from "./LanguageSwitcher";

const appBarToolbar = (
  <>
    <LanguageSwitcher />
    <ToggleThemeButton />
    <LoadingIndicator />
  </>
);

const WorkboardAppBar = () => {
  const translate = useTranslate();

  return (
    <AppBar color="inherit" elevation={0} toolbar={appBarToolbar}>
      <Box
        sx={{
          width: 34,
          height: 34,
          ml: 0.5,
          mr: 1.25,
          display: "grid",
          placeItems: "center",
          flexShrink: 0,
          color: "primary.contrastText",
          bgcolor: "primary.main",
          borderRadius: "11px",
          boxShadow: "0 7px 16px rgba(15, 139, 126, 0.22)",
        }}
      >
        <LocalHospitalRoundedIcon sx={{ fontSize: 21 }} />
      </Box>
      <Box sx={{ minWidth: 156, lineHeight: 1, mr: { xs: 1, md: 2.5 } }}>
        <Typography
          component="div"
          sx={{ fontSize: 15, fontWeight: 800, letterSpacing: "-0.02em" }}
        >
          Doc&apos;s Workboard
        </Typography>
        <Typography
          component="div"
          color="text.secondary"
          sx={{ display: { xs: "none", sm: "block" }, mt: 0.2, fontSize: 10 }}
        >
          {translate("workboard.clinical_workspace")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: "1px",
          height: 24,
          mr: 2.5,
          bgcolor: "divider",
        }}
      />
      <TitlePortal
        sx={{
          flex: 1,
          color: "text.secondary",
          fontSize: 14,
          fontWeight: 650,
        }}
      />
    </AppBar>
  );
};

export const Layout = ({ children }: { children: ReactNode }) => (
  <RALayout appBar={WorkboardAppBar} appBarAlwaysOn>
    {children}
    <CheckForApplicationUpdate />
  </RALayout>
);
