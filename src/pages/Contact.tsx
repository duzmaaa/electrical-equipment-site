import React, { useState } from "react";
import {
  Box,
  CircularProgress,
  Typography,
  Link,
  Stack,
  Container,
  Chip,
  Card,
  Divider,
} from "@mui/material";
import {
  LocationOn,
  AccessTime,
  Phone,
  MapOutlined,
} from "@mui/icons-material";

const phones = [
  { number: "+381 65 825 2864", name: "Aleksandar" },
  { number: "+381 52 846 626", name: "Dragiša" },
  { number: "+381 64 125 2864", name: "Željko" },
];

const Contact = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Box>
      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 280, md: 340 },
          width: "100%",
          background:
            "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 60%, #1a1a1a 100%)",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            opacity: 0.06,
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #f4e69a 1.5px, transparent 1.5px)",
            backgroundSize: "50px 50px",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: "-50%",
            right: "-15%",
            width: "55%",
            height: "200%",
            background:
              "radial-gradient(ellipse, rgba(244,230,154,0.12) 0%, transparent 60%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 2, textAlign: "left" }}
        >
          <Chip
            label="Kontakt"
            sx={{
              mb: 2,
              color: "#f4e69a",
              backgroundColor: "rgba(244, 230, 154, 0.08)",
              border: "1px solid rgba(244, 230, 154, 0.4)",
              fontWeight: 600,
              letterSpacing: "0.06em",
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" },
              fontWeight: 700,
              color: "#f4e69a",
              lineHeight: 1.15,
              mb: 2,
              textShadow: "0 4px 24px rgba(0,0,0,0.4)",
            }}
          >
            Kontaktirajte nas
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 640,
              color: "#e5e5e5",
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              lineHeight: 1.7,
            }}
          >
            Tu smo da odgovorimo na sva vaša pitanja i pomognemo u rešavanju
            problema. Slobodno nas pozovite ili posetite.
          </Typography>
        </Container>
      </Box>

      {/* Sadržaj */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.2fr" },
            gap: { xs: 4, md: 5 },
            textAlign: "left",
          }}
        >
          {/* Info kartica */}
          <Card
            sx={{
              p: { xs: 3, md: 4 },
              background:
                "linear-gradient(180deg, #232323 0%, #1c1c1c 100%)",
              border: "1px solid rgba(244, 230, 154, 0.2)",
              borderRadius: 4,
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "#d4af37",
                fontWeight: 700,
                letterSpacing: "0.18em",
                fontSize: "0.78rem",
              }}
            >
              Informacije
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#f4e69a",
                fontWeight: 700,
                mt: 1,
                mb: 3,
                fontSize: { xs: "1.4rem", md: "1.6rem" },
              }}
            >
              Kontakt informacije
            </Typography>

            {/* Radno vreme */}
            <Box
              sx={{
                p: 2.5,
                mb: 2.5,
                borderRadius: 3,
                border: "1px solid rgba(244, 230, 154, 0.18)",
                background: "rgba(244,230,154,0.04)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 1.5,
                  color: "#f4e69a",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  fontSize: "0.78rem",
                }}
              >
                <AccessTime sx={{ fontSize: 18 }} />
                Radno vreme
              </Box>
              <Stack spacing={0.6}>
                <Typography sx={{ color: "#dcdcdc", fontSize: "0.95rem" }}>
                  Pon – Pet: <strong>08:00 – 17:00</strong>
                </Typography>
                <Typography sx={{ color: "#dcdcdc", fontSize: "0.95rem" }}>
                  Subota: <strong>08:00 – 15:00</strong>
                </Typography>
                <Typography sx={{ color: "#999", fontSize: "0.9rem" }}>
                  Nedelja: zatvoreno
                </Typography>
              </Stack>
            </Box>

            {/* Telefoni */}
            <Box
              sx={{
                p: 2.5,
                mb: 2.5,
                borderRadius: 3,
                border: "1px solid rgba(244, 230, 154, 0.18)",
                background: "rgba(244,230,154,0.04)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 1.5,
                  color: "#f4e69a",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  fontSize: "0.78rem",
                }}
              >
                <Phone sx={{ fontSize: 18 }} />
                Telefoni
              </Box>
              <Stack divider={<Divider sx={{ borderColor: "rgba(244,230,154,0.08)" }} />}>
                {phones.map(({ number, name }) => (
                  <Box
                    key={number}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 2,
                      py: 1.2,
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          color: "#999",
                          fontSize: "0.78rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {name}
                      </Typography>
                      <Link
                        href={`tel:${number.replace(/\s/g, "")}`}
                        sx={{
                          color: "#f4e69a",
                          fontWeight: 600,
                          fontSize: "1rem",
                          textDecoration: "none",
                          "&:hover": { color: "#fff176" },
                        }}
                      >
                        {number}
                      </Link>
                    </Box>
                    <Phone sx={{ color: "#d4af37", fontSize: 20 }} />
                  </Box>
                ))}
              </Stack>
            </Box>

            {/* Adresa */}
            <Box
              sx={{
                p: 2.5,
                borderRadius: 3,
                border: "1px solid rgba(244, 230, 154, 0.18)",
                background: "rgba(244,230,154,0.04)",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <LocationOn sx={{ color: "#f4e69a", fontSize: 26 }} />
              <Box>
                <Typography
                  sx={{
                    color: "#999",
                    fontSize: "0.78rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Adresa
                </Typography>
                <Typography sx={{ color: "#f4e69a", fontWeight: 600 }}>
                  Pekarska bb, Užice 31000, Srbija
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="body2"
              sx={{ mt: 3, color: "#999", fontSize: "0.85rem", lineHeight: 1.6 }}
            >
              Za dodatne informacije ili hitne slučajeve, kontaktirajte nas
              putem telefona.
            </Typography>
          </Card>

          {/* Mapa */}
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 2,
                color: "#d4af37",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontSize: "0.78rem",
              }}
            >
              <MapOutlined sx={{ fontSize: 18 }} />
              Naša lokacija
            </Box>
            <Box
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                position: "relative",
                border: "1px solid rgba(244,230,154,0.2)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                minHeight: { xs: 360, md: 560 },
              }}
            >
              {loading && (
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0,0,0,0.55)",
                    zIndex: 10,
                  }}
                >
                  <CircularProgress sx={{ color: "#f4e69a" }} />
                </Box>
              )}

              <iframe
                title="Google mapa - Tosanic Truck Electronic"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.720059161862!2d19.856959077036374!3d43.84718307109692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759d557e7200189%3A0xe93b9d2f6d13958b!2sTosanic%20Truck%20Electronic!5e0!3m2!1ssr!2srs!4v1716404103917!5m2!1ssr!2srs"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  display: "block",
                  minHeight: "560px",
                  filter: "grayscale(0.2) contrast(1.05)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setLoading(false)}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
