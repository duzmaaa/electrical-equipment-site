import { Box, Typography, Button, Link } from "@mui/material";
import { KeyboardArrowUp, Home, Phone } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box sx={{ backgroundColor: "#1a1a1a", color: "#ffffff", mt: 0 }}>
      {/* Main footer content */}
      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 4, md: 6 },
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          {/* Company Info */}
          <Box sx={{ flex: "1 1", minWidth: { xs: "100%", sm: "250px" } }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 3,
                color: "#d4af37",
                fontSize: "1.2rem",
              }}
            >
              Tosanic Truck Electronic
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 3,
                color: "#cccccc",
                lineHeight: 1.6,
              }}
            >
              Kvalitetan servis elektronskih modula za teretna vozila i kamione.
              Profesionalni ECU tuning za optimalne performanse.
            </Typography>
          </Box>

          {/* Services */}
          <Box
            sx={{ flex: "1 1 200px", minWidth: { xs: "100%", sm: "200px" } }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                mb: 3,
                color: "#d4af37",
                fontSize: "1.1rem",
              }}
            >
              Naše Usluge
            </Typography>
            {[
              "Popravka elektronske opreme",
              "Proizvodnja elektronske opreme",
              "ECU tuning",
              "ECU modifikacije",
              "Isključivanje DPF",
            ].map((item) => (
              <Link
                key={item}
                underline="none"
                display="block"
                sx={{
                  mb: 1.5,
                  color: "#cccccc",
                  fontSize: "0.9rem",
                  // transition: "color 0.3s ease",
                  // "&:hover": {
                  //   color: "#d4af37",
                  //   textDecoration: "none",
                  // },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>

          {/* Quick Links */}
          <Box
            sx={{ flex: "1 1 200px", minWidth: { xs: "100%", sm: "200px" } }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                mb: 3,
                color: "#d4af37",
                fontSize: "1.1rem",
              }}
            >
              Brzi Linkovi
            </Typography>
            {[
              { label: "Početna", to: "/" },
              { label: "O Nama", to: "/onama" },
              { label: "Tuning", to: "/tuning" },
              { label: "ECU Modifikacije", to: "/modifikacije" },
              { label: "Kontakt", to: "/kontakt" },
            ].map((item) => (
              <Link
                key={item.label}
                component={RouterLink}
                to={item.to}
                underline="hover"
                display="block"
                sx={{
                  mb: 1.5,
                  color: "#cccccc",
                  fontSize: "0.9rem",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#d4af37",
                    textDecoration: "none",
                  },
                }}
              >
                {item.label}
              </Link>
            ))}
          </Box>

          {/* Contact Info */}
          <Box
            sx={{ flex: "1 1 250px", minWidth: { xs: "100%", sm: "250px" } }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                mb: 3,
                color: "#d4af37",
                fontSize: "1.1rem",
              }}
            >
              Kontakt Informacije
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1.5,
                  color: "#cccccc",
                  fontSize: "0.9rem",
                }}
              >
                <Home sx={{ mr: 1.5, fontSize: 18, color: "#d4af37" }} />
                Užice, Srbija
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1.5,
                  color: "#cccccc",
                  fontSize: "0.9rem",
                }}
              >
                <Phone sx={{ mr: 1.5, fontSize: 18, color: "#d4af37" }} />
                +381 65 825 2864
              </Typography>
            </Box>

            {/* Working Hours */}
            <Box sx={{ mt: 3 }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "bold",
                  color: "#d4af37",
                  mb: 1,
                  fontSize: "0.95rem",
                }}
              >
                Radno Vreme:
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#cccccc",
                  fontSize: "0.85rem",
                  lineHeight: 1.4,
                }}
              >
                Pon - Pet: 08:00 - 17:00
                <br />
                Subota: 08:00 – 15:00
                <br />
                Nedelja: Zatvoreno
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Bottom bar */}
      <Box
        sx={{
          py: 3,
          px: { xs: 2, sm: 4, md: 6 },
          backgroundColor: "#111111",
          borderTop: "1px solid #333333",
        }}
      >
        <Box
          sx={{
            maxWidth: "1200px",
            mx: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#999999",
              fontSize: "0.85rem",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            © {new Date().getFullYear()} TosanicElectronics. Sva prava zadržana
          </Typography>

          <Button
            variant="outlined"
            size="small"
            onClick={handleScrollTop}
            startIcon={<KeyboardArrowUp />}
            sx={{
              color: "#d4af37",
              borderColor: "#d4af37",
              fontSize: "0.8rem",
              px: 2,
              py: 0.5,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#d4af37",
                color: "#1a1a1a",
                borderColor: "#d4af37",
                transform: "translateY(-2px)",
              },
            }}
          >
            BACK TO TOP
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
