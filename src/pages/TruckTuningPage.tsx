import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Typography, Card, CardContent } from "@mui/material";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import ConstructionIcon from "@mui/icons-material/Construction";
import BoltIcon from "@mui/icons-material/Bolt";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SpeedIcon from "@mui/icons-material/Speed";

const benefits = [
  {
    title: "Povećanje snage",
    description:
      "Optimizacijom ECU jedinice povećava se snaga i obrtni moment vozila.",
    icon: <BoltIcon sx={{ fontSize: 64, color: "#ff6f00", mb: 2 }} />,
  },
  {
    title: "Ušteda goriva",
    description:
      "Tuning omogućava efikasniji rad motora i manju potrošnju goriva.",
    icon: (
      <LocalGasStationIcon sx={{ fontSize: 64, color: "#388e3c", mb: 2 }} />
    ),
  },
  {
    title: "Bolji odziv gasa",
    description: "Preciznije mapiranje dovodi do bržeg i boljeg odziva na gas.",
    icon: <SpeedIcon sx={{ fontSize: 64, color: "#1976d2", mb: 2 }} />,
  },
];

const vehicleTypes = [
  {
    title: "Kamioni",
    description: "Čipovanje za Mercedes, MAN, Volvo, Scania i druge modele.",
    icon: <LocalShippingIcon sx={{ color: "#8cb6bf", fontSize: 64, mb: 2 }} />,
  },
  {
    title: "Autobusi",
    description: "Tuning gradskih i turističkih autobusa za bolje performanse.",
    icon: <DirectionsBusIcon sx={{ color: "#8cb6bf", fontSize: 64, mb: 2 }} />,
  },
  {
    title: "Radne mašine",
    description: "Čipovanje bagera, utovarivača, valjaka i druge opreme.",
    icon: <ConstructionIcon sx={{ color: "#8cb6bf", fontSize: 64, mb: 2 }} />,
  },
];

export default function TruckTuningPage() {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero sekcija */}
      <Box
        sx={{
          backgroundImage: `url('/images/tuning-hero-section.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          marginTop: "-20px",
          display: "flex",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "left",
          color: "#fff",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
              md: "2.5rem",
            },
            textAlign: "left",
            color: "#f4e69a",
            width: "50%",
            marginTop: "8rem",
            marginLeft: "10rem",
            paddingLeft: "2rem",
            fontWeight: "600",
          }}
          component="h1"
          gutterBottom
        >
          PROFESIONALNA OPTIMIZACIJA
          <br />
          ECU JEDINICA
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: 700,
            color: "white",
            mt: 5,
            marginLeft: "12rem",
            textAlign: "left",
            fontSize: "1.2rem",
          }}
        >
          Naš tuning usmeren je na povećanje performansi i smanjenje potrošnje
          goriva. ECU tuning je precizan proces koji uključuje modifikaciju
          softvera radi postizanja boljih rezultata rada motora, poboljšanja
          odziva na gas i ukupne efikasnosti vozila.
        </Typography>
      </Box>
      {/* Benefiti i vrste vozila - dva Box dela u Containeru */}
      <div
        style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
          padding: "48px 0",
          background: "#1d1d1d",
          color: "#f4e69a",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            textAlign="center"
            sx={{ mb: 4, color: "#f4e69a" }}
          >
            Benefiti
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              gap: 3,
              justifyContent: "center",
              mb: 6,
            }}
          >
            {benefits.map((item, index) => (
              <Card
                style={{ background: "transparent" }}
                key={index}
                sx={{
                  width: 300,
                  minHeight: 200,
                  borderRadius: 3,
                  boxShadow: 4,
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  {item.icon}
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ color: "#f4e69a" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Vozila */}
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            textAlign="center"
            sx={{ mb: 2, color: "#f4e69a" }}
          >
            Čipovanje za različite vrste vozila
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{ mb: 4, color: "white" }}
          >
            Nudimo profesionalni ECU tuning za kamione, autobuse i teške radne
            mašine.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "100%",
              gap: 4,
            }}
          >
            {vehicleTypes.map((vehicle, index) => (
              <Card
                key={index}
                style={{ background: "transparent" }}
                sx={{ width: 300, borderRadius: 3, boxShadow: 3 }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography>{vehicle.icon}</Typography>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    style={{ color: "#f4e69a" }}
                  >
                    {vehicle.title}
                  </Typography>
                  <Typography variant="body2" color="white">
                    {vehicle.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </div>
      </div>
    </Box>
  );
}
