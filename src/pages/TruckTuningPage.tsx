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
          padding: "80px 0",
          background: "linear-gradient(135deg, #1d1d1d 0%, #2a2a2a 100%)",
          color: "#f4e69a",
          position: "relative",
        }}
      >
        {/* Background pattern overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.05,
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #f4e69a 2px, transparent 2px)",
            backgroundSize: "60px 60px",
          }}
        ></div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
          }}
        >
          {/* Benefits Section with improved styling */}
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
              Benefiti
            </Typography>
            <div
              style={{
                width: "80px",
                height: "3px",
                background: "linear-gradient(90deg, #f4e69a, #d4c679)",
                margin: "0 auto",
                marginBottom: "20px",
              }}
            ></div>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.8)",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              Zašto je ECU tuning pravi izbor za vaše vozilo
            </Typography>
          </div>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 4,
              mb: 8,
            }}
          >
            {benefits.map((item, index) => (
              <Card
                key={index}
                sx={{
                  background: "rgba(45, 45, 45, 0.8)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(244, 230, 154, 0.1)",
                  borderRadius: 4,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 16px 48px rgba(244, 230, 154, 0.15)",
                    border: "1px solid rgba(244, 230, 154, 0.3)",
                  },
                }}
              >
                <CardContent sx={{ textAlign: "center", p: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100px",
                      height: "100px",
                      paddingTop: "16px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, rgba(244, 230, 154, 0.2), rgba(244, 230, 154, 0.05))",
                      margin: "0 auto 24px auto",
                      fontSize: "48px",
                      color: "#f4e69a",
                      border: "2px solid rgba(244, 230, 154, 0.2)",
                      transition: "all 0.3s ease",
                      "& svg": {
                        width: "48px",
                        height: "48px",
                        display: "block",
                      },
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, rgba(244, 230, 154, 0.25), rgba(244, 230, 154, 0.1))",
                        border: "2px solid rgba(244, 230, 154, 0.4)",
                      },
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ color: "#f4e69a", mb: 2 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

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
              Čipovanje za različite vrste vozila
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
              Nudimo profesionalni ECU tuning za kamione, autobuse i teške radne
              mašine.
            </Typography>
          </div>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 4,
            }}
          >
            {vehicleTypes.map((vehicle, index) => (
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
                    border: "1px solid rgba(244, 230, 154, 0.4)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "linear-gradient(90deg, #f4e69a, #d4c679)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  },
                  "&:hover::before": {
                    opacity: 1,
                  },
                }}
              >
                <CardContent sx={{ textAlign: "center", p: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100px",
                      height: "100px",
                      paddingTop: "18px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, rgba(244, 230, 154, 0.15), rgba(244, 230, 154, 0.05))",
                      margin: "0 auto 24px auto",
                      fontSize: "48px",
                      color: "#f4e69a",
                      border: "2px solid rgba(244, 230, 154, 0.2)",
                      transition: "all 0.3s ease",
                      "& svg": {
                        width: "48px",
                        height: "48px",
                        display: "block",
                      },
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, rgba(244, 230, 154, 0.25), rgba(244, 230, 154, 0.1))",
                        border: "2px solid rgba(244, 230, 154, 0.4)",
                      },
                    }}
                  >
                    {vehicle.icon}
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
                    {vehicle.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255,255,255,0.85)",
                      lineHeight: 1.7,
                      fontSize: "16px",
                    }}
                  >
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
