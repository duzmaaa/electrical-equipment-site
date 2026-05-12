import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
  Button,
  Stack,
  Chip,
} from "@mui/material";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import ConstructionIcon from "@mui/icons-material/Construction";
import BoltIcon from "@mui/icons-material/Bolt";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SpeedIcon from "@mui/icons-material/Speed";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const benefits = [
  {
    title: "Povećanje snage",
    description:
      "Optimizacijom ECU jedinice povećava se snaga i obrtni moment vozila.",
    icon: <BoltIcon sx={{ fontSize: 44 }} />,
  },
  {
    title: "Ušteda goriva",
    description:
      "Tuning omogućava efikasniji rad motora i manju potrošnju goriva.",
    icon: <LocalGasStationIcon sx={{ fontSize: 44 }} />,
  },
  {
    title: "Bolji odziv gasa",
    description: "Preciznije mapiranje dovodi do bržeg i boljeg odziva na gas.",
    icon: <SpeedIcon sx={{ fontSize: 44 }} />,
  },
];

const vehicleTypes = [
  {
    title: "Kamioni",
    description: "Čipovanje za Mercedes, MAN, Volvo, Scania i druge modele.",
    icon: <LocalShippingIcon sx={{ fontSize: 44 }} />,
  },
  {
    title: "Autobusi",
    description: "Tuning gradskih i turističkih autobusa za bolje performanse.",
    icon: <DirectionsBusIcon sx={{ fontSize: 44 }} />,
  },
  {
    title: "Radne mašine",
    description: "Čipovanje bagera, utovarivača, valjaka i druge opreme.",
    icon: <ConstructionIcon sx={{ fontSize: 44 }} />,
  },
];

const cardSx = {
  background:
    "linear-gradient(180deg, rgba(45,45,45,0.9) 0%, rgba(30,30,30,0.9) 100%)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(244, 230, 154, 0.12)",
  borderRadius: 4,
  boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
  transition: "all 0.35s ease",
  height: "100%",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 18px 48px rgba(244, 230, 154, 0.15)",
    borderColor: "rgba(244, 230, 154, 0.35)",
  },
};

const iconWrapperSx = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 84,
  height: 84,
  borderRadius: "50%",
  background:
    "linear-gradient(135deg, rgba(244,230,154,0.2) 0%, rgba(244,230,154,0.04) 100%)",
  border: "2px solid rgba(244,230,154,0.25)",
  color: "#f4e69a",
  mb: 3,
  mx: "auto",
  transition: "all 0.3s ease",
};

const SectionHeader = ({
  overline,
  title,
  subtitle,
}: {
  overline: string;
  title: string;
  subtitle: string;
}) => (
  <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
    <Typography
      variant="overline"
      sx={{
        color: "#d4af37",
        fontWeight: 700,
        letterSpacing: "0.18em",
        fontSize: "0.78rem",
      }}
    >
      {overline}
    </Typography>
    <Typography
      variant="h3"
      sx={{
        mt: 1,
        mb: 2,
        color: "#f4e69a",
        fontWeight: 700,
        fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.6rem" },
        textShadow: "0 2px 8px rgba(0,0,0,0.3)",
      }}
    >
      {title}
    </Typography>
    <Box
      sx={{
        width: 80,
        height: 3,
        background: "linear-gradient(90deg, #f4e69a, #d4af37)",
        mx: "auto",
        mb: 3,
        borderRadius: 2,
      }}
    />
    <Typography
      variant="body1"
      sx={{
        color: "#bcbcbc",
        maxWidth: 680,
        mx: "auto",
        lineHeight: 1.75,
        fontSize: { xs: "0.95rem", md: "1.1rem" },
      }}
    >
      {subtitle}
    </Typography>
  </Box>
);

export default function TruckTuningPage() {
  return (
    <Box>
      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 480, md: 580 },
          width: "100%",
          backgroundImage: `url('/images/tuning-hero-section.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.15) 100%)",
            zIndex: 1,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 2, textAlign: "left" }}
        >
          <Chip
            label="ECU Tuning"
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
              fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3.2rem" },
              fontWeight: 700,
              color: "#f4e69a",
              lineHeight: 1.15,
              mb: 2,
              maxWidth: 760,
              textShadow: "0 4px 24px rgba(0,0,0,0.4)",
            }}
          >
            Profesionalna optimizacija
            <br />
            ECU jedinica
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 560,
              color: "#e5e5e5",
              fontSize: { xs: "0.95rem", md: "1.15rem" },
              lineHeight: 1.7,
              mb: 4,
            }}
          >
            Naš tuning usmeren je na povećanje performansi i smanjenje potrošnje
            goriva. ECU tuning je precizan proces modifikacije softvera radi
            boljeg rada motora, odziva na gas i ukupne efikasnosti vozila.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              component="a"
              href="tel:+381658252864"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<PhoneInTalkIcon />}
            >
              Zakaži tuning
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() =>
                document
                  .getElementById("benefiti")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              Saznaj više
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Sadržaj */}
      <Box
        sx={{
          background:
            "linear-gradient(180deg, #1d1d1d 0%, #1a1a1a 50%, #1d1d1d 100%)",
          py: { xs: 6, md: 10 },
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #f4e69a 1.5px, transparent 1.5px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1 }}
          id="benefiti"
        >
          <SectionHeader
            overline="Benefiti"
            title="Zašto je ECU tuning pravi izbor"
            subtitle="Pravilno izvedena ECU optimizacija donosi merljive rezultate — više snage, manje potrošnje, bolja vozna iskustva."
          />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 4,
              mb: { xs: 8, md: 12 },
            }}
          >
            {benefits.map((item, index) => (
              <Card key={index} sx={cardSx}>
                <CardContent sx={{ textAlign: "center", p: { xs: 3, md: 4 } }}>
                  <Box sx={iconWrapperSx}>{item.icon}</Box>
                  <Typography
                    variant="h5"
                    sx={{ color: "#f4e69a", fontWeight: 700, mb: 1.5 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#cfcfcf",
                      lineHeight: 1.7,
                      fontSize: "0.98rem",
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          <SectionHeader
            overline="Vrste vozila"
            title="Čipovanje za različita vozila"
            subtitle="Nudimo profesionalni ECU tuning za kamione, autobuse i teške radne mašine, prilagođen svakom proizvođaču."
          />

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
            {vehicleTypes.map((vehicle, index) => (
              <Card key={index} sx={cardSx}>
                <CardContent sx={{ textAlign: "center", p: { xs: 3, md: 4 } }}>
                  <Box sx={iconWrapperSx}>{vehicle.icon}</Box>
                  <Typography
                    variant="h5"
                    sx={{ color: "#f4e69a", fontWeight: 700, mb: 1.5 }}
                  >
                    {vehicle.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#cfcfcf",
                      lineHeight: 1.7,
                      fontSize: "0.98rem",
                    }}
                  >
                    {vehicle.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* CTA */}
          <Box
            sx={{
              mt: { xs: 6, md: 10 },
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              textAlign: "center",
              background:
                "linear-gradient(135deg, rgba(244,230,154,0.12) 0%, rgba(212,175,55,0.06) 100%)",
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
              Spremni za bolje performanse?
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
              Pozovite nas i dogovorite termin za stručni ECU tuning vašeg
              vozila — uz garanciju kvaliteta.
            </Typography>
            <Button
              component="a"
              href="tel:+381658252864"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<PhoneInTalkIcon />}
            >
              +381 65 825 2864
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
