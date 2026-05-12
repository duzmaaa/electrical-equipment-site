import React from "react";
import {
  Box,
  Typography,
  Button,
  Link,
  Container,
  IconButton,
  Stack,
  Divider,
} from "@mui/material";
import {
  KeyboardArrowUp,
  Phone,
  Facebook,
  Instagram,
  AccessTime,
  LocationOn,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const services = [
  { label: "Popravka elektronske opreme", to: "/" },
  { label: "Proizvodnja elektronske opreme", to: "/" },
  { label: "ECU tuning", to: "/tuning" },
  { label: "ECU modifikacije", to: "/modifikacije" },
  { label: "Isključivanje DPF", to: "/modifikacije" },
];

const quickLinks = [
  { label: "Početna", to: "/" },
  { label: "O nama", to: "/onama" },
  { label: "Tuning", to: "/tuning" },
  { label: "ECU modifikacije", to: "/modifikacije" },
  { label: "Kontakt", to: "/kontakt" },
];

// const socials = [
//   { icon: <Facebook />, label: "Facebook", href: "#" },
//   { icon: <Instagram />, label: "Instagram", href: "#" },
// ];

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        background:
          "linear-gradient(180deg, #1a1a1a 0%, #141414 100%)",
        color: "#ffffff",
        mt: 0,
        borderTop: "1px solid rgba(244, 230, 154, 0.1)",
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "1.4fr 1fr 1fr 1.2fr",
            },
            gap: { xs: 4, md: 5 },
            textAlign: "left",
          }}
        >
          {/* Company */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: "#f4e69a",
                fontSize: "1.15rem",
                letterSpacing: "0.02em",
              }}
            >
              Tosanic Truck Electronic
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 3,
                color: "#bcbcbc",
                lineHeight: 1.7,
                fontSize: "0.92rem",
              }}
            >
              Kvalitetan servis elektronskih modula za teretna vozila i kamione.
              Profesionalni ECU tuning za optimalne performanse.
            </Typography>

            {/* <Stack direction="row" spacing={1}>
              {socials.map((s) => (
                <IconButton
                  key={s.label}
                  component="a"
                  href={s.href}
                  aria-label={s.label}
                  sx={{
                    color: "#f4e69a",
                    border: "1px solid rgba(244, 230, 154, 0.25)",
                    borderRadius: 2,
                    width: 38,
                    height: 38,
                    transition: "all 0.25s ease",
                    "&:hover": {
                      backgroundColor: "rgba(244, 230, 154, 0.1)",
                      borderColor: "#f4e69a",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Stack> */}
          </Box>

          {/* Services */}
          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                mb: 2.5,
                color: "#f4e69a",
                fontSize: "0.95rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Naše usluge
            </Typography>
            <Stack spacing={1.2}>
              {services.map((item) => (
                <Link
                  key={item.label}
                  component={RouterLink}
                  to={item.to}
                  underline="none"
                  sx={{
                    color: "#bcbcbc",
                    fontSize: "0.88rem",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      color: "#f4e69a",
                      pl: 0.5,
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Quick links */}
          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                mb: 2.5,
                color: "#f4e69a",
                fontSize: "0.95rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Brzi linkovi
            </Typography>
            <Stack spacing={1.2}>
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  component={RouterLink}
                  to={item.to}
                  underline="none"
                  sx={{
                    color: "#bcbcbc",
                    fontSize: "0.88rem",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      color: "#f4e69a",
                      pl: 0.5,
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Contact */}
          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                mb: 2.5,
                color: "#f4e69a",
                fontSize: "0.95rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Kontakt
            </Typography>

            <Stack spacing={1.5}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                <LocationOn
                  sx={{ color: "#f4e69a", fontSize: 18, mt: 0.2 }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: "#bcbcbc", fontSize: "0.88rem" }}
                >
                  Pekarska bb, Užice 31000
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                <Phone sx={{ color: "#f4e69a", fontSize: 18 }} />
                <Link
                  href="tel:+381658252864"
                  underline="hover"
                  sx={{
                    color: "#bcbcbc",
                    fontSize: "0.88rem",
                    "&:hover": { color: "#f4e69a" },
                  }}
                >
                  +381 65 825 2864
                </Link>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                <AccessTime
                  sx={{ color: "#f4e69a", fontSize: 18, mt: 0.2 }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: "#bcbcbc", fontSize: "0.88rem", lineHeight: 1.6 }}
                >
                  Pon – Pet: 08:00 – 17:00
                  <br />
                  Subota: 08:00 – 15:00
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>

      <Divider sx={{ borderColor: "rgba(244, 230, 154, 0.08)" }} />

      {/* Bottom bar */}
      <Container maxWidth="lg" sx={{ py: 2.5 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#888",
              fontSize: "0.82rem",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            © {new Date().getFullYear()} Tosanic Truck Electronic. Sva prava
            zadržana.
          </Typography>

          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={handleScrollTop}
            startIcon={<KeyboardArrowUp />}
            sx={{
              fontSize: "0.78rem",
              py: 0.4,
              px: 1.5,
            }}
          >
            Vrh strane
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
