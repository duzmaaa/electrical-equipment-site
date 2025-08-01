import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
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
    desc: `DPF filter izaziva probleme sa začepljenjem i gubitkom snage. Uklanjanjem se poboljšava pouzdanost i smanjuje potrošnja.`,
  },
  {
    title: "Isključivanje EGR ventila",
    icon: <DeleteForever fontSize="large" sx={{ color: "#f4e69a" }} />,
    desc: `EGR uzrokuje naslage i kvarove. Softversko uklanjanje poboljšava rad motora i smanjuje emisije.`,
  },
  {
    title: "Isključivanje AdBlue / SCR sistema",
    icon: <HighlightOff fontSize="large" sx={{ color: "#f4e69a" }} />,
    desc: `AdBlue može uzrokovati česte greške. Uklanjanjem se sprečavaju problemi i dodatni troškovi.`,
  },
  {
    title: "Isključivanje Lambda sonde",
    icon: <GpsOff fontSize="large" sx={{ color: "#f4e69a" }} />,
    desc: `Lambda sonda često pravi pogrešne korekcije. Uklanjanje omogućava stabilniji rad motora.`,
  },
  {
    title: "Start-Stop sistem deaktivacija",
    icon: <PowerSettingsNew fontSize="large" sx={{ color: "#f4e69a" }} />,
    desc: `Sprečava nepotrebno gašenje motora i produžava vek akumulatora.`,
  },
  {
    title: "Uklanjanje limitatora brzine",
    icon: <Speed fontSize="large" sx={{ color: "#f4e69a" }} />,
    desc: `Omogućava punu brzinu bez fabričkog ograničenja.`,
  },
];

export default function EcuModifikacijePage() {
  return (
    <Box p={{ xs: 2, md: 4 }} sx={{ color: "#fff" }}>
      {/* Vehicle Types Section */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            mb: 2,
            color: "#f4e69a",
            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          ECU Modifikacije
        </Typography>
        <div
          style={{
            width: "100px",
            height: "3px",
            background: "linear-gradient(90deg, #f4e69a, #d4c679)",
            margin: "0 auto 24px auto",
          }}
        ></div>
        <Typography
          variant="h6"
          sx={{
            color: "rgba(255,255,255,0.9)",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.8,
          }}
        >
          Naše softverske modifikacije omogućavaju stabilniji rad vozila, manju
          potrošnju i eliminaciju čestih problema kao što su DPF, EGR, AdBlue i
          druga ograničenja.
        </Typography>
      </div>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 4,
        }}
      >
        {modItems.map((mod, index) => (
          <Card
            key={index}
            sx={{
              background: "rgba(40, 40, 40, 0.9)",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(244, 230, 154, 0.15)",
              borderRadius: 4,
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              transition: "all 0.4s ease",
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                transform: "translateY(-10px) scale(1.02)",
                boxShadow: "0 20px 60px rgba(244, 230, 154, 0.2)",
                borderColor: "rgba(244, 230, 154, 0.4)", // Samo boja, ne debljina
              },
              // "&::before": {
              //   content: '""',
              //   position: "absolute",
              //   top: 0,
              //   left: 0,
              //   right: 0,
              //   height: "3px",
              //   background: "linear-gradient(90deg, #f4e69a, #d4c679)",
              //   opacity: 0,
              //   transition: "opacity 0.3s ease",
              // },
              // "&:hover::before": {
              //   opacity: 1,
              // },
            }}
          >
            <CardContent sx={{ textAlign: "center", p: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: "#2a2a2a",
                  border: "2px solid rgba(244, 230, 154, 0.3)", // Border dodat ovde
                  mb: 3,
                  mx: "auto",
                }}
              >
                {mod.icon}
              </Box>
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{
                  color: "#f4e69a",
                  mb: 2,
                  textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                }}
              >
                {mod.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.7,
                  fontSize: "16px",
                }}
              >
                {mod.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
