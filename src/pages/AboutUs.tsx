import React from "react";
import { Box, Typography, Container, Card, CardContent } from "@mui/material";
import {
  Engineering,
  Speed,
  VerifiedUser,
  DirectionsBoat,
  LocalShipping,
  DirectionsBus,
  CenterFocusStrong,
} from "@mui/icons-material";

const images = ["/popravka1.jpg", "/popravka2.jpg", "/popravka3.jpg"];

const features = [
  {
    icon: <CenterFocusStrong sx={{ fontSize: 40, color: "#d4af37" }} />,
    title: "Preciznost",
    description: "Dijagnostika i popravka sa maksimalnom preciznošću",
  },
  {
    icon: <Engineering sx={{ fontSize: 40, color: "#d4af37" }} />,
    title: "Stručnost",
    description: "Tim iskusnih tehničara sa dugogodišnjim iskustvom",
  },
  {
    icon: <Speed sx={{ fontSize: 40, color: "#d4af37" }} />,
    title: "Brzina",
    description: "Brza dijagnostika i efikasno rešavanje problema",
  },
  {
    icon: <VerifiedUser sx={{ fontSize: 40, color: "#d4af37" }} />,
    title: "Pouzdanost",
    description: "Garantovano kvalitetno rešenje za vaše vozilo",
  },
];

const vehicles = [
  {
    icon: <LocalShipping sx={{ fontSize: 50, color: "#d4af37" }} />,
    title: "Kamioni",
    description: "Specijalizovani za sve tipove teretnih vozila",
  },
  {
    icon: <DirectionsBus sx={{ fontSize: 50, color: "#d4af37" }} />,
    title: "Autobusi",
    description: "Elektronska oprema za gradski i međugradski prevoz",
  },
  {
    icon: <DirectionsBoat sx={{ fontSize: 50, color: "#d4af37" }} />,
    title: "Brodovi",
    description: "Nautička elektronska oprema i sistemi",
  },
];

export default function AboutUs() {
  return (
    <Box sx={{ backgroundColor: "#1a1a1a", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box sx={{ backgroundColor: "#1a1a1a", minHeight: "30rem" }}>
        {/* Hero Section */}
        <Box
          sx={{
            backgroundImage: `url('/images/about-us.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: "white",
            py: { xs: 6, md: 10 },
            position: "relative",
            overflow: "hidden",
            width: "100%",
            minHeight: "30rem",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.4)", // Dark overlay to make text readable
              zIndex: 1,
            },
          }}
        >
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography
                variant="h3"
                sx={{
                  marginTop: "7rem",
                  width: "50%",
                  fontSize: { xs: "0.8rem", sm: "2rem", md: "2.5rem" },
                  fontWeight: "600",
                  color: "#f4e69a",
                  textAlign: "left",
                }}
                component="h3"
                gutterBottom
              >
                KO SMO MI I ZAŠTO
                <br />
                NAM SE MOŽE VEROVATI?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  maxWidth: { xs: 300, sm: 300, md: 500 },
                  color: "white",
                  mt: 4,
                  textAlign: "left",
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
                }}
              >
                Specijalisti za elektronsku opremu kamiona, autobusa i brodova
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        {/* Main Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
            mb: 8,
          }}
        >
          <Box sx={{ flex: "2", minWidth: 0 }}>
            <Card
              sx={{
                p: 4,
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(212,175,55,0.2)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                borderRadius: 3,
                color: "#e5e7eb",
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#f3f4f6",
                    fontSize: { xs: "1.1rem", sm: "1.2rem" },
                    lineHeight: 1.8,
                    mb: 4,
                    textAlign: "justify",
                  }}
                >
                  <strong style={{ color: "#d4af37" }}>
                    Tosanić Truck Electronic
                  </strong>{" "}
                  je firma sa dugogodišnjom tradicijom u proizvodnji i popravci
                  elektronskih delova za teška vozila i plovila. Naša misija je
                  da pružimo pouzdana i inovativna rešenja za sve vaše potrebe u
                  oblasti elektronskih sistema na kamionima, autobusima i
                  brodovima. Kvalitet, stručnost i posvećenost su temelj našeg
                  rada.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#f3f4f6",
                    fontSize: { xs: "1.1rem", sm: "1.2rem" },
                    lineHeight: 1.8,
                    mb: 4,
                    textAlign: "justify",
                  }}
                >
                  Naš tim stručnjaka koristi najnoviju tehnologiju i alate kako
                  bi dijagnostikovao i rešio svaki problem brzo i efikasno.
                  Ponosni smo što smo pouzdan partner mnogim kompanijama širom
                  Srbije i regiona, koji prepoznaju kvalitet i profesionalizam
                  naših usluga.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#f3f4f6",
                    fontSize: { xs: "1.1rem", sm: "1.2rem" },
                    lineHeight: 1.8,
                    textAlign: "justify",
                  }}
                >
                  Posetite nas ili nas kontaktirajte da saznate više o našim
                  proizvodima i uslugama. Sa{" "}
                  <strong style={{ color: "#d4af37" }}>
                    Tosanić Truck Electronic
                  </strong>
                  , vaše vozilo je u sigurnim rukama.
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: "1", minWidth: 0 }}>
            <Card
              sx={{
                p: 3,
                background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
                color: "white",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                borderRadius: 3,
                height: "fit-content",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  color: "#d4af37",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Naša Specijalizacija
              </Typography>

              {vehicles.map((vehicle, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 3,
                    p: 2,
                    borderRadius: 2,
                    background: "rgba(255,255,255,0.05)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "rgba(212,175,55,0.1)",
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  <Box sx={{ mr: 2 }}>{vehicle.icon}</Box>
                  <Box>
                    <Typography variant="h6" sx={{ color: "#d4af37", mb: 0.5 }}>
                      {vehicle.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#e5e7eb" }}>
                      {vehicle.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Card>
          </Box>
        </Box>

        {/* Features Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              textAlign: "center",
              mb: 6,
              color: "#d4af37",
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Zašto baš mi?
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              flexWrap: "wrap",
              gap: 4,
              justifyContent: "center",
            }}
          >
            {features.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 22%" },
                  minWidth: 250,
                }}
              >
                <Card
                  sx={{
                    p: 3,
                    textAlign: "center",
                    height: "100%",
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(212,175,55,0.2)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    color: "#e5e7eb",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
                      borderColor: "#d4af37",
                      background: "rgba(212,175,55,0.1)",
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      color: "#d4af37",
                      fontWeight: "bold",
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#d1d5db",
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Image Gallery */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              textAlign: "center",
              mb: 6,
              color: "#d4af37",
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Naš rad u akciji
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
            }}
          >
            {images.map((src, index) => (
              <Box
                key={index}
                sx={{
                  flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 30%" },
                  minWidth: 280,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.02)",
                      boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={src}
                    alt={`Radnici na popravci ${index + 1}`}
                    sx={{
                      width: "100%",
                      height: 250,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxHeight: "40rem",
            px: 2,
          }}
        >
          <Card
            sx={{
              background: "linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)",
              color: "white",
              p: 6,
              width: "75%",
              maxWidth: "800px", // add max width for better control
              textAlign: "center",
              borderRadius: 3,
              boxShadow: "0 15px 35px rgba(212,175,55,0.3)",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 2,
                fontWeight: "bold",
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              Spremni smo za vaš sledeći projekat!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.1rem", md: "1.2rem" },
                opacity: 0.95,
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Kontaktirajte nas danas i saznajte kako možemo pomoći vašem vozilu
              da radi bolje nego ikad.
            </Typography>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
