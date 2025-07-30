import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  CssBaseline,
  ListItemButton,
  Autocomplete,
  TextField,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link as RouterLink, Outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Navigation from "./Navigation";
import productItems from "../data/new_product.json";
import Footer from "./Footer";

interface Product {
  id: number;
  type: string;
  module: string;
  description: string;
  common_repairs: string[];
  image?: string;
}

const Layout = () => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState<Product | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSearchChange = (
    event: React.SyntheticEvent,
    newValue: Product | null,
  ) => {
    if (newValue) {
      navigate(`/proizvod?type=${newValue.type}&id=${newValue.id}`);
      setSearchValue(null);
      setInputValue("");
    }
  };

  const handleInputChange = (
    event: React.SyntheticEvent,
    newInputValue: string,
  ) => {
    setInputValue(newInputValue);
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "" }}>
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

      {/* Main Content */}
      <Container
        sx={{
          pt: "110px",
          pb: 6,
          textAlign: "center",
          // maxWidth: 1200,
        }}
      >
        <Outlet />
      </Container>

      <Footer></Footer>
    </Box>
  );
};

export default Layout;
