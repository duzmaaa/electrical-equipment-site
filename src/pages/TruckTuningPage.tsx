import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";

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
    icon: <LocalShippingIcon sx={{ color: "#111827", fontSize: 64, mb: 2 }} />,
  },
  {
    title: "Autobusi",
    description: "Tuning gradskih i turističkih autobusa za bolje performanse.",
    icon: <DirectionsBusIcon sx={{ color: "#111827", fontSize: 64, mb: 2 }} />,
  },
  {
    title: "Radne mašine",
    description: "Čipovanje bagera, utovarivača, valjaka i druge opreme.",
    icon: <ConstructionIcon sx={{ color: "#111827", fontSize: 64, mb: 2 }} />,
  },
];

export default function TruckTuningPage() {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero sekcija */}
      <Box
        sx={{
          backgroundImage: `url('/tuning.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          px: 2,
        }}
      ></Box>

      {/* Opis */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Profesionalna optimizacija ECU jedinica
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Naš tuning usmeren je na povećanje performansi i smanjenje potrošnje
          goriva. ECU tuning je precizan proces koji uključuje modifikaciju
          softvera radi postizanja boljih rezultata rada motora, poboljšanja
          odziva na gas i ukupne efikasnosti vozila.
        </Typography>
      </Container>

      {/* Benefiti i vrste vozila - dva Box dela u Containeru */}
      <Container sx={{ py: 4 }}>
        {/* Benefiti */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
            mb: 6,
          }}
        >
          {benefits.map((item, index) => (
            <Card
              key={index}
              sx={{ width: 300, minHeight: 200, borderRadius: 3, boxShadow: 4 }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                {item.icon}
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
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
          sx={{ mb: 4 }}
        >
          Čipovanje za različite vrste vozila
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          sx={{ mb: 4 }}
        >
          Nudimo profesionalni ECU tuning za kamione, autobuse i teške radne
          mašine.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {vehicleTypes.map((vehicle, index) => (
            <Card
              key={index}
              sx={{ width: 280, borderRadius: 3, boxShadow: 3 }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                {vehicle.icon}
                <Typography variant="h6" fontWeight="bold">
                  {vehicle.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {vehicle.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
