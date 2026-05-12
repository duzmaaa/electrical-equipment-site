import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Link as RouterLink, useLocation } from "react-router-dom";
import React, { useState } from "react";

const navItems = [
  { label: "Početna", to: "/" },
  { label: "Tuning", to: "/tuning" },
  { label: "ECU modifikacije", to: "/modifikacije" },
  { label: "O nama", to: "/onama" },
  { label: "Kontakt", to: "/kontakt" },
];

const Navigation = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen((prev) => !prev);

  return (
    <>
      {/* Desktop nav */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          gap: { md: 3, lg: 4 },
          alignItems: "center",
        }}
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Box
              key={item.to}
              component={RouterLink}
              to={item.to}
              sx={{
                position: "relative",
                fontFamily: "inherit",
                color: isActive ? "#f4e69a" : "#e5e5e5",
                fontSize: { md: "0.85rem", lg: "0.95rem" },
                fontWeight: isActive ? 600 : 500,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                textDecoration: "none",
                py: 1,
                transition: "color 0.25s ease",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: 2,
                  background:
                    "linear-gradient(90deg, #f4e69a 0%, #d4af37 100%)",
                  borderRadius: 2,
                  transform: isActive ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.3s ease",
                },
                "&:hover": {
                  color: "#f4e69a",
                  "&::after": {
                    transform: "scaleX(1)",
                  },
                },
              }}
            >
              {item.label}
            </Box>
          );
        })}
      </Box>

      {/* Mobile burger */}
      <IconButton
        aria-label="Otvori meni"
        sx={{
          display: { xs: "flex", md: "none" },
          color: "#f4e69a",
          border: "1px solid rgba(244, 230, 154, 0.2)",
          borderRadius: 2,
        }}
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: "#161616",
            color: "#fff",
            borderLeft: "1px solid rgba(244, 230, 154, 0.1)",
          },
        }}
      >
        <Box
          sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          role="presentation"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2.5,
              py: 2,
              borderBottom: "1px solid rgba(244, 230, 154, 0.1)",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: "#f4e69a", fontWeight: 700, letterSpacing: "0.04em" }}
            >
              MENI
            </Typography>
            <IconButton onClick={toggleDrawer} aria-label="Zatvori meni">
              <CloseIcon sx={{ color: "#f4e69a" }} />
            </IconButton>
          </Box>

          <List sx={{ flex: 1, py: 1 }} onClick={toggleDrawer}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <ListItem key={item.to} disablePadding>
                  <ListItemButton
                    component={RouterLink}
                    to={item.to}
                    sx={{
                      py: 1.5,
                      px: 2.5,
                      borderLeft: isActive
                        ? "3px solid #f4e69a"
                        : "3px solid transparent",
                      backgroundColor: isActive
                        ? "rgba(244, 230, 154, 0.08)"
                        : "transparent",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        backgroundColor: "rgba(244, 230, 154, 0.06)",
                        borderLeftColor: "#f4e69a",
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        sx: {
                          color: isActive ? "#f4e69a" : "#e5e5e5",
                          fontWeight: isActive ? 600 : 500,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          fontSize: "0.9rem",
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          <Divider sx={{ borderColor: "rgba(244, 230, 154, 0.1)" }} />

          <Box sx={{ p: 2.5 }}>
            <Button
              component="a"
              href="tel:+381658252864"
              fullWidth
              variant="contained"
              color="primary"
              startIcon={<PhoneInTalkIcon />}
              sx={{ py: 1.2 }}
            >
              Pozovi nas
            </Button>
            <Typography
              variant="caption"
              sx={{
                display: "block",
                mt: 1.5,
                textAlign: "center",
                color: "#aaa",
              }}
            >
              +381 65 825 2864
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navigation;
