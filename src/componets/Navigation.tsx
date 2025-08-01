import {
  Box,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link as RouterLink, useLocation } from "react-router-dom";
import React, { useState } from "react";

const navItems = [
  { label: "POČETNA", to: "/" },
  // { label: "PROIZVODI", to: "/proizvod" },
  { label: "TUNING", to: "/tuning" },
  { label: "ECU MODIFIKACIJE", to: "/modifikacije" },
  { label: "O NAMA", to: "/onama" },
  { label: "KONTAKT", to: "/kontakt" },
];

const Navigation = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <>
      {/* Desktop Nav */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          gap: 4,
          alignItems: "center",
        }}
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;

          return (
            <Link
              key={item.to}
              component={RouterLink}
              to={item.to}
              color={isActive ? "#3B82F6" : "inherit"}
              sx={{
                fontSize: {
                  sm: "0.7rem",
                  md: "0.8rem",
                  lg: "0.9rem",
                  xl: "1rem",
                },
                textDecorationColor: "transparent",
                "&:hover": { color: "#3B82F6" },
                transition: "all 0.3s ease-in",
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </Box>

      {/* Mobile Burger Icon */}
      <IconButton
        sx={{ display: { xs: "flex", sm: "none" }, color: "white" }}
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer */}

      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 250,
            height: "100%", // puni celu visinu
            backgroundColor: "#1d1d1d",
            color: "white",
          }}
          role="presentation"
          onClick={toggleDrawer}
        >
          <Box sx={{ mt: 3, p: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
              <IconButton>
                <CloseIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
            <List>
              {navItems.map((item) => (
                <ListItem key={item.to} disablePadding>
                  <ListItemButton
                    component={RouterLink}
                    to={item.to}
                    selected={location.pathname === item.to}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navigation;
