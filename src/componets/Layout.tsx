import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  CssBaseline,
  ListItemButton,
} from "@mui/material";
import { Link as RouterLink, Outlet } from "react-router-dom";
import React from "react";
import Navigation from "./Navigation";
import ScrollToTop from "./ScrollToTop";

import Footer from "./Footer";

const Layout = () => {
  return (
    <Box sx={{ minHeight: "100vh", overflowX: "hidden", bgcolor: "#1d1d1d" }}>
      <CssBaseline />
      <ScrollToTop />

      {/* Top Contact Bar */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 36,
          bgcolor: "#1d1d1d",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1300,
        }}
      >
        <ListItemButton
          component="a"
          href="tel:+381658252864 "
          sx={{
            color: "#F9FAFB",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "450px",
            gap: 1,
            px: 2,
            py: 0.5,
            fontSize: "0.875rem",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#3a3a3a",
            },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              display: {
                xs: "none",
                sm: "flex",
              },
              fontSize: {
                sm: "0.8rem",
                md: "0.9rem",
              },
            }}
          >
            ZA INFORMACIJE POZVATI:
            <br />
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              display: {
                xs: "flex",
                sm: "none",
              },
              fontSize: {
                xs: "0.7rem",
              },
            }}
          >
            KONTAKT:
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            +381658252864
          </Typography>
        </ListItemButton>
      </Box>

      {/* Header / AppBar */}
      <AppBar
        position="fixed"
        sx={{
          top: 36, // odmah ispod Top Contact Bar
          left: 0,
          right: 0,
          width: "100%",
          bgcolor: "#1d1d1d",
          paddingTop: "0.4rem",
          zIndex: 1200,
        }}
        elevation={1}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            maxWidth: 1200,
            width: "100%",
            mx: "auto",
          }}
        >
          {/* Logo */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "inline-block",
              height: 40,
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src="/logo.png"
              alt="Logo"
              sx={{
                height: 140,
                mt: "-50px",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Navigacija */}
          <Navigation />
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        sx={{
          pt: "110px", // dovoljno prostora da ne bude ispod fiksnog headera
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          textAlign: "center",
          overflowX: "hidden", // sprečava horizontalni scroll unutar glavnog dela
          bgcolor: "#1d1d1d",
          // minHeight: "calc(100vh - 110px - 60px)", // visina bez headera i footera (pretpostavka da je footer ~60px)
        }}
      >
        <Box
          sx={{
            maxWidth: 1200,
            width: "100%",
            px: 2,
            position: "relative",
          }}
        >
          <Outlet />
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Layout;
