import React, { useState } from "react";
import { Box, CircularProgress, Typography, Link, Stack } from "@mui/material";
import { LocationOn, AccessTime, Phone } from "@mui/icons-material";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Box px={{ xs: 2, md: 8 }} py={6} bgcolor="#1d1d1d">
      {/* Naslov stranice */}
      <Typography
        variant="h3"
        component="h1"
        sx={{
          mb: 2,
          textAlign: "center",
          color: "#f4e69a",
          fontSize: {
            xs: "1.8rem",
            sm: "2.4rem",
            md: "3rem",
          },
        }}
      >
        Kontaktirajte nas
      </Typography>

      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={4}
        mt={4}
      >
        {/* Leva strana - Informacije */}
        <Box flex={1}>
          <Box
            sx={{
              p: 4,
              borderRadius: 4,
              backgroundColor: "#2a2a2a",
              color: "#e5e7eb",
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              color="#f4e69a"
              sx={{ fontSize: { xs: "1.25rem", sm: "1.75rem" } }}
              fontWeight="medium"
            >
              Kontakt informacije
            </Typography>

            {/* Radno vreme u box-u */}
            <Box
              display="flex"
              flexDirection="column"
              alignItems="start"
              gap={2}
              sx={{
                border: "1px solid #f4e69a",
                borderRadius: 2,
                p: 2,
                width: "100%",
              }}
            >
              <Box
                display="flex"
                gap="8px"
                alignItems="center"
                sx={{ lineHeight: 1.4, color: "#ccc" }}
              >
                <AccessTime sx={{ color: "#f4e69a", minWidth: 30 }} />
                <Typography>Pon - Pet: 08:00 – 17:00</Typography>
              </Box>
              <Box
                display="flex"
                gap="8px"
                alignItems="center"
                sx={{ lineHeight: 1.4, color: "#ccc" }}
              >
                <AccessTime sx={{ color: "#f4e69a", minWidth: 30 }} />
                <Typography textAlign="left" sx={{ mt: 0.5 }}>
                  Subota: 08:00 – 15:00
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                border: "1px solid #f4e69a",
                borderRadius: 2,
                p: 2,
                width: "100%",
                backgroundColor: "#2a2a2a",
              }}
            >
              <Stack spacing={2}>
                {[
                  { number: "+381658252864", name: "Aleksandar" },
                  { number: "+38152846626", name: "Dragiša" },
                  { number: "+381641252864", name: "Željko" },
                ].map(({ number, name }) => (
                  <Box key={number} display="flex" alignItems="center" gap={1}>
                    <Phone sx={{ color: "#f4e69a" }} />
                    <Link
                      href={`tel:${number.replace(/\s+/g, "")}`}
                      underline="hover"
                      sx={{ color: "#ccc", fontWeight: 500 }}
                    >
                      {number} – {name}
                    </Link>
                  </Box>
                ))}
              </Stack>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap="10px"
              sx={{
                border: "1px solid #f4e69a",
                borderRadius: 2,
                p: 2,
                width: "100%",
              }}
            >
              <LocationOn sx={{ color: "#f4e69a", minWidth: 30 }} />
              <Typography color="#ccc">
                Pekarska bb, Užice 31000, Srbija
              </Typography>
            </Box>

            <Typography variant="body2" color="#aaa" sx={{ mt: 2 }}>
              Za dodatne informacije ili hitne slučajeve, možete nas
              kontaktirati putem telefona.
            </Typography>
          </Box>
        </Box>

        {/* Desna strana - Mapa */}
        <Box flex={1}>
          <Box
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              minHeight: "400px",
              position: "relative",
              boxShadow: 3,
            }}
          >
            {loading && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0,0,0,0.4)",
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
              style={{ border: 0, minHeight: "540px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setLoading(false)}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
