import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Button,
  Stack,
  Chip,
} from "@mui/material";
import {
  DeleteForever,
  Opacity,
  Speed,
  HighlightOff,
  PowerSettingsNew,
  GpsOff,
} from "@mui/icons-material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

const modItems = [
  {
    title: "Isključivanje DPF (filtera čestica)",
    icon: <Opacity sx={{ fontSize: 44 }} />,
    desc: "DPF filter izaziva probleme sa začepljenjem i gubitkom snage. Uklanjanjem se poboljšava pouzdanost i smanjuje potrošnja.",
  },
  {
    title: "Isključivanje EGR ventila",
    icon: <DeleteForever sx={{ fontSize: 44 }} />,
    desc: "EGR uzrokuje naslage i kvarove. Softversko uklanjanje poboljšava rad motora i smanjuje emisije.",
  },
  {
    title: "Isključivanje AdBlue / SCR",
    icon: <HighlightOff sx={{ fontSize: 44 }} />,
    desc: "AdBlue može uzrokovati česte greške. Uklanjanjem se sprečavaju problemi i dodatni troškovi.",
  },
  {
    title: "Isključivanje Lambda sonde",
    icon: <GpsOff sx={{ fontSize: 44 }} />,
    desc: "Lambda sonda često pravi pogrešne korekcije. Uklanjanje omogućava stabilniji rad motora.",
  },
  {
    title: "Start-Stop deaktivacija",
    icon: <PowerSettingsNew sx={{ fontSize: 44 }} />,
    desc: "Sprečava nepotrebno gašenje motora i produžava vek akumulatora.",
  },
  {
    title: "Uklanjanje limitatora brzine",
    icon: <Speed sx={{ fontSize: 44 }} />,
    desc: "Omogućava punu brzinu bez fabričkog ograničenja.",
  },
];

export default function EcuModifikacijePage() {
  return (
    <Box>
      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 360, md: 440 },
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
            opacity: 0.07,
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #f4e69a 2px, transparent 2px)",
            backgroundSize: "60px 60px",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: "-40%",
            right: "-10%",
            width: "60%",
            height: "180%",
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
            icon={<SettingsSuggestIcon sx={{ color: "#f4e69a !important" }} />}
            label="Softverske modifikacije"
            sx={{
              mb: 3,
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
            ECU modifikacije
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 640,
              color: "#e5e5e5",
              fontSize: { xs: "0.95rem", md: "1.15rem" },
              lineHeight: 1.7,
            }}
          >
            Naše softverske modifikacije omogućavaju stabilniji rad vozila,
            manju potrošnju i eliminaciju čestih problema kao što su DPF, EGR,
            AdBlue i druga ograničenja.
          </Typography>
        </Container>
      </Box>

      {/* Sadržaj */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 4,
            mb: { xs: 6, md: 10 },
          }}
        >
          {modItems.map((mod, index) => (
            <Card
              key={index}
              sx={{
                background:
                  "linear-gradient(180deg, rgba(45,45,45,0.9) 0%, rgba(30,30,30,0.9) 100%)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(244, 230, 154, 0.12)",
                borderRadius: 4,
                boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
                transition: "all 0.35s ease",
                position: "relative",
                overflow: "hidden",
                height: "100%",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background:
                    "linear-gradient(90deg, #f4e69a, #d4af37)",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.4s ease",
                },
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 18px 48px rgba(244, 230, 154, 0.15)",
                  borderColor: "rgba(244, 230, 154, 0.4)",
                  "&::before": { transform: "scaleX(1)" },
                },
              }}
            >
              <CardContent sx={{ textAlign: "center", p: { xs: 3, md: 4 } }}>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 76,
                    height: 76,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, rgba(244,230,154,0.18) 0%, rgba(244,230,154,0.04) 100%)",
                    border: "2px solid rgba(244, 230, 154, 0.25)",
                    color: "#f4e69a",
                    mb: 3,
                    mx: "auto",
                  }}
                >
                  {mod.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#f4e69a",
                    fontWeight: 700,
                    mb: 1.5,
                    fontSize: { xs: "1.05rem", md: "1.15rem" },
                  }}
                >
                  {mod.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#cfcfcf",
                    lineHeight: 1.7,
                    fontSize: "0.95rem",
                  }}
                >
                  {mod.desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* CTA */}
        <Box
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            textAlign: "center",
            background:
              "linear-gradient(135deg, rgba(244,230,154,0.12) 0%, rgba(212,175,55,0.05) 100%)",
            border: "1px solid rgba(244,230,154,0.25)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#f4e69a",
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            Potrebna vam je ECU modifikacija?
          </Typography>
          <Typography
            sx={{
              color: "#d6d6d6",
              mb: 4,
              maxWidth: 580,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Pozovite nas i dogovorite stručno softversko podešavanje vašeg
            vozila — bez DPF, EGR i AdBlue problema.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              component="a"
              href="tel:+381658252864"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<PhoneInTalkIcon />}
            >
              Pozovi nas
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
