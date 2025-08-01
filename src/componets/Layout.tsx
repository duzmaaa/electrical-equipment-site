import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  CssBaseline,
  ListItemButton,
} from "@mui/material";
import { Link as RouterLink, Outlet } from "react-router-dom";
import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <CssBaseline />

      {/* Top Contact Bar */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#1d1d1d",
          display: "flex",
          justifyContent: "center",
          zIndex: 1300,
          position: "fixed",
          top: 0,
          left: 0,
          height: 36,
        }}
      >
        <ListItemButton
          component="a"
          href="tel:+381666321"
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
            "&:hover": {
              backgroundColor: "#374151",
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
                sm: "0.8rem", // tablet
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
                xs: "0.7rem", // mobilni
              },
            }}
          >
            KONTAKT:
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            +381 64 125 2864
          </Typography>
        </ListItemButton>
      </Box>

      {/*<Box*/}
      {/*  sx={{*/}
      {/*    width: "100%",*/}
      {/*    height: "1px",*/}
      {/*    background: "linear-gradient(to right, #f4e69a, #d4c679)", // zlatna linija*/}
      {/*    zIndex: 9999,*/}
      {/*    position: "fixed", // obavezno da bi zIndex imao efekat*/}
      {/*  }}*/}
      {/*/>*/}
      {/* Header */}
      <AppBar
        position="fixed"
        style={{ background: "#1d1d1d", paddingTop: "0.4rem" }}
        elevation={1}
        sx={{ top: 36, zIndex: 1200 }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            maxWidth: 1200,
            width: "100%",
            mx: "auto",
          }}
        >
          {/* Logo ili naziv */}
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
          <Navigation></Navigation>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          backgroundColor: "#1d1d1d",
          display: "flex",
          justifyContent: "center", // horizontalno centriranje
          alignItems: "center", // vertikalno centriranje
          textAlign: "center",
        }}
      >
        {/* Main Content */}
        <Box
          sx={{
            width: "100%",
            position: "relative",
            maxWidth: 1200,
            px: 2, // padding left/right za mobilne
          }}
        >
          <Outlet />
        </Box>
      </Box>

      <Footer></Footer>
    </Box>
  );
};

export default Layout;
