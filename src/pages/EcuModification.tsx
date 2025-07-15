import React from "react";
import { Box, Typography } from "@mui/material";
import {
  DeleteForever,
  Opacity,
  Speed,
  HighlightOff,
  PowerSettingsNew,
  GpsOff,
} from "@mui/icons-material";

const modItems = [
  {
    title: "Isključivanje DPF (Filtera čestica)",
    icon: <Opacity fontSize="large" sx={{ color: "#1976d2" }} />, // plava
    text: `DPF filter izaziva probleme sa začepljenjem i gubitkom snage. Uklanjanjem se poboljšava pouzdanost i smanjuje potrošnja.`,
  },
  {
    title: "Isključivanje EGR ventila",
    icon: <DeleteForever fontSize="large" sx={{ color: "#d32f2f" }} />, // crvena
    text: `EGR uzrokuje naslage i kvarove. Softversko uklanjanje poboljšava rad motora i smanjuje emisije.`,
  },
  {
    title: "Isključivanje AdBlue / SCR sistema",
    icon: <HighlightOff fontSize="large" sx={{ color: "#fbc02d" }} />, // žuta
    text: `AdBlue može uzrokovati česte greške. Uklanjanjem se sprečavaju problemi i dodatni troškovi.`,
  },
  {
    title: "Isključivanje Lambda sonde",
    icon: <GpsOff fontSize="large" sx={{ color: "#388e3c" }} />, // zelena
    text: `Lambda sonda često pravi pogrešne korekcije. Uklanjanje omogućava stabilniji rad motora.`,
  },
  {
    title: "Start-Stop sistem deaktivacija",
    icon: <PowerSettingsNew fontSize="large" sx={{ color: "#f57c00" }} />, // narandžasta
    text: `Sprečava nepotrebno gašenje motora i produžava vek akumulatora.`,
  },
  {
    title: "Uklanjanje limitatora brzine",
    icon: <Speed fontSize="large" sx={{ color: "#512da8" }} />, // ljubičasta
    text: `Omogućava punu brzinu bez fabričkog ograničenja.`,
  },
];

export default function EcuModifikacijePage() {
  return (
    <Box p={{ xs: 2, md: 4 }}>
      <Typography
        variant="h1"
        textAlign="center"
        fontWeight={500}
        sx={{
          color: "#111827",
          fontSize: {
            xs: "1.5rem",
            sm: "2rem",
            md: "2.5rem",
          },
        }}
        gutterBottom
      >
        ECU Modifikacije
      </Typography>

      <Typography
        variant="body1"
        textAlign="center"
        maxWidth="700px"
        mx="auto"
        mb={6}
      >
        Naše softverske modifikacije omogućavaju stabilniji rad vozila, manju
        potrošnju i eliminaciju čestih problema kao što su DPF, EGR, AdBlue i
        druga ograničenja.
      </Typography>

      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
        {modItems.map((mod, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 1 280px",
              maxWidth: 320,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              p: 3,
              borderRadius: 3,
              boxShadow: 2,
              backgroundColor: "background.paper",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "default",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: 6,
              },
            }}
            aria-label={mod.title}
          >
            {mod.icon}
            <Typography variant="h6" mt={3} mb={2} fontWeight={600}>
              {mod.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {mod.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
