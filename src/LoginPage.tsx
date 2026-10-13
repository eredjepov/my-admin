import type { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { Login, useTranslate } from "react-admin";
import { LoginForm } from "ra-supabase";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const AuthLanguageSwitcher = ({ children }: { children: ReactNode }) => (
  <>
    <Box
      sx={{
        position: "fixed",
        zIndex: 2,
        top: { xs: 12, sm: 20 },
        right: { xs: 12, sm: 20 },
        color: "#FFFFFF",
        "& .MuiButton-root": {
          minWidth: 150,
          bgcolor: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          backdropFilter: "blur(12px)",
          "&:hover": {
            bgcolor: "rgba(255, 255, 255, 0.16)",
          },
        },
      }}
    >
      <LanguageSwitcher />
    </Box>
    {children}
  </>
);

export const LocalizedLoginPage = () => {
  const translate = useTranslate();

  return (
    <AuthLanguageSwitcher>
      <Login>
        <Box sx={{ mb: 2.25, textAlign: "center" }}>
          <Typography
            sx={{
              color: "text.primary",
              fontSize: "0.86rem",
              fontWeight: 850,
              letterSpacing: "0.09em",
            }}
          >
            DOC’S WORKBOARD
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 0.4, fontSize: 12 }}>
            {translate("workboard.clinical_workspace")}
          </Typography>
        </Box>
        <LoginForm />
      </Login>
    </AuthLanguageSwitcher>
  );
};
