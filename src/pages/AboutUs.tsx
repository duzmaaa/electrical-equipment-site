import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Chip,
  Button,
  Stack,
} from "@mui/material";
import {
  Engineering,
  Speed,
  VerifiedUser,
  DirectionsBoat,
  LocalShipping,
  DirectionsBus,
  CenterFocusStrong,
} from "@mui/icons-material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Link as RouterLink } from "react-router-dom";

const images = [
  { src: "/popravka1.jpg", caption: "Dijagnostika modula" },
  { src: "/popravka2.jpg", caption: "Lemljenje preciznih komponenti" },
  { src: "/popravka3.jpg", caption: "Programiranje ECU jedinica" },
];

const features = [
  {
    icon: <CenterFocusStrong sx={{ fontSize: 36 }} />,
    title: "Preciznost",
    description: "Dijagnostika i popravka sa maksimalnom preciznošću.",
  },
  {
    icon: <Engineering sx={{ fontSize: 36 }} />,
    title: "Stručnost",
    description: "Tim iskusnih tehničara sa dugogodišnjim iskustvom.",
  },
  {
    icon: <Speed sx={{ fontSize: 36 }} />,
    title: "Brzina",
    description: "Brza dijagnostika i efikasno rešavanje problema.",
  },
  {
    icon: <VerifiedUser sx={{ fontSize: 36 }} />,
    title: "Pouzdanost",
    description: "Garantovano kvalitetno rešenje za vaše vozilo.",
  },
];

const vehicles = [
  {
    icon: <LocalShipping sx={{ fontSize: 42 }} />,
    title: "Kamioni",
    description: "Specijalizovani za sve tipove teretnih vozila.",
  },
  {
    icon: <DirectionsBus sx={{ fontSize: 42 }} />,
    title: "Autobusi",
    description: "Elektronska oprema za gradski i međugradski prevoz.",
  },
  {
    icon: <DirectionsBoat sx={{ fontSize: 42 }} />,
    title: "Brodovi",
    description: "Nautička elektronska oprema i sistemi.",
  },
];

export default function AboutUs() {
  return (
    <Box>
      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 480, md: 560 },
          width: "100%",
          backgroundImage: `url('/images/about-us.jpg')`,
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
              "linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.2) 100%)",
            zIndex: 1,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 2, textAlign: "left" }}
        >
          <Chip
            label="O nama"
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
              maxWidth: 780,
              textShadow: "0 4px 24px rgba(0,0,0,0.4)",
            }}
          >
            Ko smo mi i zašto
            <br />
            nam se može verovati?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 600,
              color: "#e5e5e5",
              fontSize: { xs: "0.95rem", md: "1.15rem" },
              lineHeight: 1.7,
            }}
          >
            Specijalisti za elektronsku opremu kamiona, autobusa i brodova.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        {/* About + Specialization */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
            gap: { xs: 4, md: 6 },
            mb: { xs: 8, md: 12 },
            textAlign: "left",
          }}
        >
          <Card
            sx={{
              p: { xs: 3, md: 4 },
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(244, 230, 154, 0.18)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              borderRadius: 4,
            }}
          >
            <CardContent sx={{ p: 0 }}>
              <Typography
                variant="overline"
                sx={{
                  color: "#d4af37",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  fontSize: "0.78rem",
                }}
              >
                Naša priča
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "#f4e69a",
                  fontWeight: 700,
                  mt: 1,
                  mb: 3,
                  fontSize: { xs: "1.4rem", md: "1.9rem" },
                }}
              >
                Iskustvo, pouzdanost, posvećenost
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#e5e5e5",
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                <Box
                  component="span"
                  sx={{ color: "#f4e69a", fontWeight: 700 }}
                >
                  Tosanic Truck Electronic
                </Box>{" "}
                je firma sa dugogodišnjom tradicijom u proizvodnji i popravci
                elektronskih delova za teška vozila i plovila. Naša misija je da
                pružimo pouzdana i inovativna rešenja za sve vaše potrebe u
                oblasti elektronskih sistema na kamionima, autobusima i
                brodovima.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#e5e5e5",
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Naš tim stručnjaka koristi najnoviju tehnologiju i alate kako bi
                dijagnostikovao i rešio svaki problem brzo i efikasno. Ponosni
                smo što smo pouzdan partner mnogim kompanijama širom Srbije i
                regiona.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#e5e5e5",
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                  lineHeight: 1.8,
                }}
              >
                Posetite nas ili nas kontaktirajte da saznate više o našim
                proizvodima i uslugama. Sa{" "}
                <Box
                  component="span"
                  sx={{ color: "#f4e69a", fontWeight: 700 }}
                >
                  Tosanic Truck Electronic
                </Box>
                , vaše vozilo je u sigurnim rukama.
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              p: { xs: 3, md: 3.5 },
              background:
                "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
              border: "1px solid rgba(244, 230, 154, 0.18)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
              borderRadius: 4,
              height: "fit-content",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                color: "#f4e69a",
                fontWeight: 700,
                textAlign: "center",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                fontSize: "1rem",
              }}
            >
              Naša specijalizacija
            </Typography>

            <Stack spacing={2}>
              {vehicles.map((vehicle) => (
                <Box
                  key={vehicle.title}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    borderRadius: 2,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(244,230,154,0.08)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "rgba(244,230,154,0.08)",
                      borderColor: "rgba(244,230,154,0.3)",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  <Box sx={{ mr: 2, color: "#f4e69a", display: "flex" }}>
                    {vehicle.icon}
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "#f4e69a",
                        fontWeight: 600,
                        fontSize: "1rem",
                        mb: 0.3,
                      }}
                    >
                      {vehicle.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#cfcfcf", fontSize: "0.85rem" }}
                    >
                      {vehicle.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Card>
        </Box>

        {/* Features */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
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
              Prednosti
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mt: 1,
                mb: 2,
                color: "#f4e69a",
                fontWeight: 700,
                fontSize: { xs: "1.8rem", md: "2.4rem" },
              }}
            >
              Zašto baš mi?
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 3,
                background: "linear-gradient(90deg, #f4e69a, #d4af37)",
                mx: "auto",
                borderRadius: 2,
              }}
            />
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 3,
            }}
          >
            {features.map((feature) => (
              <Card
                key={feature.title}
                sx={{
                  p: 3,
                  textAlign: "center",
                  height: "100%",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(244, 230, 154, 0.15)",
                  borderRadius: 3,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "rgba(244,230,154,0.4)",
                    boxShadow: "0 14px 32px rgba(244,230,154,0.12)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, rgba(244,230,154,0.18) 0%, rgba(244,230,154,0.04) 100%)",
                    border: "1px solid rgba(244,230,154,0.25)",
                    color: "#f4e69a",
                    mb: 2,
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#f4e69a",
                    fontWeight: 700,
                    mb: 1.2,
                    fontSize: "1.05rem",
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#cfcfcf", lineHeight: 1.6 }}
                >
                  {feature.description}
                </Typography>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Gallery */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
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
              Galerija
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mt: 1,
                mb: 2,
                color: "#f4e69a",
                fontWeight: 700,
                fontSize: { xs: "1.8rem", md: "2.4rem" },
              }}
            >
              Naš rad u akciji
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 3,
                background: "linear-gradient(90deg, #f4e69a, #d4af37)",
                mx: "auto",
                borderRadius: 2,
              }}
            />
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 3,
            }}
          >
            {images.map((img, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
                  transition: "all 0.35s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 18px 40px rgba(244,230,154,0.15)",
                  },
                  "&:hover img": {
                    transform: "scale(1.06)",
                  },
                  "&:hover .caption": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={img.src}
                  alt={img.caption}
                  sx={{
                    width: "100%",
                    height: 260,
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                />
                <Box
                  className="caption"
                  sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    p: 2,
                    background:
                      "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 70%, transparent 100%)",
                    color: "#f4e69a",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    opacity: 0.85,
                    transform: "translateY(6px)",
                    transition: "all 0.3s ease",
                    textAlign: "left",
                  }}
                >
                  {img.caption}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* CTA */}
        <Box
          sx={{
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
            Imate pitanje ili problem?
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
            Pozovite nas ili posetite kontakt stranicu — tu smo da pomognemo.
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
            <Button
              component={RouterLink}
              to="/kontakt"
              variant="outlined"
              color="primary"
              size="large"
            >
              Kontakt
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
