import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Link,
  CssBaseline,
} from "@mui/material";
import { Link as RouterLink, Outlet } from "react-router-dom";
import React from "react";

const Layout = () => (
  <Box sx={{ minHeight: "100vh", bgcolor: "white" }}>
    <CssBaseline />

    {/* Top Contact Bar */}
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        textAlign: "center",
        py: 1,
        fontSize: "0.875rem",
      }}
    >
      ZA INFORMACIJE I PORUDŽBINE POZVATI: +381 6X XXX XXXX
    </Box>

    {/* Header */}
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          Zeljko tosanic
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Link component={RouterLink} to="/" color="inherit" underline="none">
            POČETNA
          </Link>
          <Link
            component={RouterLink}
            to="/kontakt"
            color="inherit"
            underline="none"
          >
            KONTAKT
          </Link>
        </Box>
      </Toolbar>
    </AppBar>

    {/* Main Content */}
    <Container sx={{ py: 4 }}>
      <Outlet />
    </Container>
  </Box>
);

export default Layout;
