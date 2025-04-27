import React from "react";
import { Box, Typography, IconButton, Divider } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";

const Contact = () => (
  <Box sx={{ padding: 4 }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Kontakt
    </Typography>

    <Typography variant="h6" gutterBottom>
      Za sve informacije i porudžbine pozovite:
    </Typography>
    <Box
      sx={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 3 }}
    >
      <IconButton color="primary">
        <Phone />
      </IconButton>
      <Typography variant="body1">+381 6X XXX XXXX</Typography>
    </Box>

    <Box
      sx={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 3 }}
    >
      <IconButton color="primary">
        <Email />
      </IconButton>
      <Typography variant="body1">kontakt@trucks.com</Typography>
    </Box>

    <Box
      sx={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 3 }}
    >
      <IconButton color="primary">
        <LocationOn />
      </IconButton>
      <Typography variant="body1">Uzice, Srbija, Trg Slobode 123</Typography>
    </Box>

    <Divider sx={{ marginY: 4 }} />

    {/* Google Maps */}
    <Typography variant="h6" gutterBottom>
      Lokacija:
    </Typography>
    <Box
      sx={{
        width: "100%",
        height: "400px",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Uzice,Srbija"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
      />
    </Box>
  </Box>
);

export default Contact;
