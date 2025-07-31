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
    icon: <Opacity fontSize="large" sx={{ color: "#f4e69a" }} />,
    text: `DPF filter izaziva probleme sa začepljenjem i gubitkom snage. Uklanjanjem se poboljšava pouzdanost i smanjuje potrošnja.`,
  },
  {
    title: "Isključivanje EGR ventila",
    icon: <DeleteForever fontSize="large" sx={{ color: "#f4e69a" }} />,
    text: `EGR uzrokuje naslage i kvarove. Softversko uklanjanje poboljšava rad motora i smanjuje emisije.`,
  },
  {
    title: "Isključivanje AdBlue / SCR sistema",
    icon: <HighlightOff fontSize="large" sx={{ color: "#f4e69a" }} />,
    text: `AdBlue može uzrokovati česte greške. Uklanjanjem se sprečavaju problemi i dodatni troškovi.`,
  },
  {
    title: "Isključivanje Lambda sonde",
    icon: <GpsOff fontSize="large" sx={{ color: "#f4e69a" }} />,
    text: `Lambda sonda često pravi pogrešne korekcije. Uklanjanje omogućava stabilniji rad motora.`,
  },
  {
    title: "Start-Stop sistem deaktivacija",
    icon: <PowerSettingsNew fontSize="large" sx={{ color: "#f4e69a" }} />,
    text: `Sprečava nepotrebno gašenje motora i produžava vek akumulatora.`,
  },
  {
    title: "Uklanjanje limitatora brzine",
    icon: <Speed fontSize="large" sx={{ color: "#f4e69a" }} />,
    text: `Omogućava punu brzinu bez fabričkog ograničenja.`,
  },
];

export default function EcuModifikacijePage() {
  return (
    <Box
      p={{ xs: 2, md: 4 }}
      sx={{ backgroundColor: "#111827", color: "#fff" }}
    >
      <Typography
        variant="h1"
        textAlign="center"
        fontWeight={500}
        sx={{
          fontSize: {
            xs: "1.5rem",
            sm: "2rem",
            md: "2.5rem",
          },
          mb: 2,
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
        sx={{ color: "#cfcfcf" }}
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
              backgroundColor: "#1f2937",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "default",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: 4,
              },
            }}
            aria-label={mod.title}
          >
            {mod.icon}
            <Typography
              variant="h6"
              mt={3}
              mb={2}
              fontWeight={600}
              sx={{ color: "#f4e69a" }}
            >
              {mod.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "#cfcfcf" }}>
              {mod.text}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Dugme za kontakt */}
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Box
          component="a"
          href="tel:+381666321"
          sx={{
            backgroundColor: "#f4e69a",
            color: "#000",
            fontWeight: 600,
            px: 4,
            py: 1.5,
            borderRadius: 2,
            cursor: "pointer",
            textDecoration: "none",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "#ffe57f",
            },
          }}
        >
          Zatraži poziv
        </Box>
      </Box>
    </Box>
  );
}
