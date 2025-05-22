import React from "react";
import { Box, Typography, Link, Stack, Paper } from "@mui/material";
import { LocationOn, AccessTime, Phone } from "@mui/icons-material";

const Contact = () => {
  return (
    <Box px={{ xs: 2, md: 8 }} py={6} bgcolor="#F3F4F6">
      {/* Naslov stranice */}
      <Typography
        variant="h3"
        component="h1"
        sx={{
          color: "#111827",
          mb: 2,
          textAlign: "center",
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
              backgroundColor: "#fff",
            }}
          >
            <Stack spacing={3}>
              <Typography
                variant="h5"
                component="h2"
                color="#374151"
                fontWeight="medium"
              >
                Kontakt informacije
              </Typography>

              <Box display="flex" alignItems="center" gap={2}>
                <AccessTime color="primary" />
                <Typography color="#4B5563">
                  Radno vreme:
                  <br />
                  Pon - Pet: 08:00 – 17:00
                  <br />
                  Subota: 08:00 – 15:00
                </Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={2}>
                <Phone color="primary" />
                <Link
                  href="tel:+381641252864"
                  underline="hover"
                  color="#4B5563"
                >
                  +381 64 125 2864
                </Link>
              </Box>

              <Box display="flex" alignItems="center" gap={2}>
                <LocationOn color="primary" />
                <Typography color="#4B5563">
                  Pekarska bb, Užice 31000, Srbija
                </Typography>
              </Box>

              <Typography variant="body2" color="text.secondary">
                Za dodatne informacije ili hitne slučajeve, možete nas
                kontaktirati putem telefona.
              </Typography>
            </Stack>
          </Box>
        </Box>

        {/* Desna strana - Mapa */}
        <Box flex={1}>
          <Box
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              minHeight: "400px",
            }}
          >
            <iframe
              title="Google mapa - Tosanic Truck Electronic"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.720059161862!2d19.856959077036374!3d43.84718307109692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759d557e7200189%3A0xe93b9d2f6d13958b!2sTosanic%20Truck%20Electronic!5e0!3m2!1ssr!2srs!4v1716404103917!5m2!1ssr!2srs"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
