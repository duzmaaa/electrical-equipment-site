import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  CssBaseline,
  Stack,
} from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link as RouterLink, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";

const TOP_BAR_HEIGHT = 36;
const HEADER_HEIGHT = 80;

const Layout = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", overflowX: "hidden", bgcolor: "#1d1d1d" }}>
      <CssBaseline />
      <ScrollToTop />

      {/* Top contact bar */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: TOP_BAR_HEIGHT,
          background:
            "linear-gradient(90deg, #141414 0%, #1d1d1d 50%, #141414 100%)",
          borderBottom: "1px solid rgba(244, 230, 154, 0.08)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1300,
          px: 2,
        }}
      >
        <Stack
          direction="row"
          spacing={{ xs: 2, sm: 4 }}
          alignItems="center"
          sx={{ color: "#cfcfcf", fontSize: "0.78rem" }}
        >
          <Box
            component="a"
            href="tel:+381658252864"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.8,
              color: "#f4e69a",
              textDecoration: "none",
              fontWeight: 600,
              transition: "color 0.2s ease",
              "&:hover": { color: "#fff176" },
            }}
          >
            <PhoneInTalkIcon sx={{ fontSize: 16 }} />
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                letterSpacing: "0.04em",
                fontSize: { xs: "0.72rem", sm: "0.78rem" },
              }}
            >
              +381 65 825 2864
            </Typography>
          </Box>

          <Box
            component="a"
            href="https://www.google.com/maps/search/?api=1&query=Pekarska+bb%2C+U%C5%BEice"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Otvori lokaciju u Google Maps"
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 0.8,
              opacity: 0.8,
              color: "#cfcfcf",
              textDecoration: "none",
              transition: "color 0.2s ease, opacity 0.2s ease",
              "&:hover": {
                color: "#f4e69a",
                opacity: 1,
              },
            }}
          >
            <LocationOnIcon sx={{ fontSize: 16, color: "#f4e69a" }} />
            <Typography variant="caption" sx={{ fontSize: "0.78rem" }}>
              Pekarska bb, Užice
            </Typography>
          </Box>

          <Typography
            variant="caption"
            sx={{
              display: { xs: "none", md: "block" },
              fontSize: "0.78rem",
              opacity: 0.8,
            }}
          >
            Pon–Pet 08–17 · Sub 08–15
          </Typography>
        </Stack>
      </Box>

      {/* Header / AppBar */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: TOP_BAR_HEIGHT,
          left: 0,
          right: 0,
          width: "100%",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          backgroundColor: scrolled
            ? "rgba(20, 20, 20, 0.85)"
            : "rgba(29, 29, 29, 1)",
          borderBottom: scrolled
            ? "1px solid rgba(244, 230, 154, 0.12)"
            : "1px solid transparent",
          transition:
            "background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
          zIndex: 1200,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            maxWidth: 1280,
            width: "100%",
            mx: "auto",
            minHeight: { xs: 64, md: HEADER_HEIGHT },
            px: { xs: 2, md: 3 },
          }}
        >
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              height: 56,
              textDecoration: "none",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src="/logo.png"
              alt="Tosanic Truck Electronic"
              sx={{
                height: { xs: 120, md: 140 },
                objectFit: "contain",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)" },
              }}
            />
          </Box>

          <Navigation />
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          pt: { xs: `${TOP_BAR_HEIGHT + 64}px`, md: `${TOP_BAR_HEIGHT + HEADER_HEIGHT}px` },
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          textAlign: "center",
          overflowX: "hidden",
          bgcolor: "#1d1d1d",
        }}
      >
        <Box
          sx={{
            maxWidth: 1280,
            width: "100%",
            position: "relative",
          }}
        >
          <Outlet />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;
