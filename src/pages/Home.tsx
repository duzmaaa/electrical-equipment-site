import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Modal,
  Fade,
  Backdrop,
  IconButton,
  Button,
  Stack,
  Chip,
  Container,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import VerifiedIcon from "@mui/icons-material/Verified";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import SearchAutocomplete from "../componets/product/Autocomplate";
import SingleSelect from "../componets/product/SingleSelect";
import porductItems from "../data/data.json";

interface ChildItem {
  title: string;
  desc: string;
}

interface ProductItem {
  id: number;
  title: string;
  type: string;
  desc: string;
  child?: ChildItem[];
}

const stats = [
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 32, color: "#f4e69a" }} />,
    value: "15+",
    label: "Godina iskustva",
  },
  {
    icon: <BuildCircleIcon sx={{ fontSize: 32, color: "#f4e69a" }} />,
    value: "5000+",
    label: "Popravljenih modula",
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 32, color: "#f4e69a" }} />,
    value: "300+",
    label: "Zadovoljnih klijenata",
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 32, color: "#f4e69a" }} />,
    value: "100%",
    label: "Garancija kvaliteta",
  },
];

const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState<ProductItem | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [selectedItem, setSelectedItem] = useState<ProductItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string>("");

  const filteredItems = porductItems.filter((item: ProductItem) => {
    const matchesType = !selectedType || item.type === selectedType;
    const matchesSearch =
      inputValue.trim() === "" ||
      item.title.toLowerCase().includes(inputValue.toLowerCase());
    return matchesType && matchesSearch;
  });

  const handleOpenModal = (item: ProductItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => setModalOpen(false);

  return (
    <Box>
      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 480, md: 580 },
          width: "100%",
          backgroundImage: `url('/images/hero-section.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          textAlign: "left",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.2) 100%)",
            zIndex: 1,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 2, px: { xs: 3, md: 5 } }}
        >
          <Chip
            label="Tosanic Truck Electronic"
            sx={{
              mb: 3,
              color: "#f4e69a",
              borderColor: "rgba(244, 230, 154, 0.4)",
              backgroundColor: "rgba(244, 230, 154, 0.08)",
              fontWeight: 600,
              letterSpacing: "0.06em",
              border: "1px solid rgba(244, 230, 154, 0.4)",
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
              textShadow: "0 4px 24px rgba(0,0,0,0.4)",
            }}
          >
            Proizvodnja i popravka
            <br />
            elektronske opreme
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
            Specijalizovani za električne delove kamiona, autobusa i brodova.
            Vrhunska usluga popravke i proizvodnje elektronske opreme — brz rok
            isporuke i garancija kvaliteta.
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
              Pozovi odmah
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() =>
                document
                  .getElementById("delovi")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              Pregledaj delove
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* STATS STRIP */}
      <Box
        sx={{
          background: "linear-gradient(180deg, #1d1d1d 0%, #181818 100%)",
          borderTop: "1px solid rgba(244, 230, 154, 0.08)",
          borderBottom: "1px solid rgba(244, 230, 154, 0.08)",
          py: { xs: 4, md: 5 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: { xs: 3, md: 4 },
            }}
          >
            {stats.map((stat) => (
              <Box
                key={stat.label}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 1,
                }}
              >
                {stat.icon}
                <Typography
                  variant="h4"
                  sx={{
                    color: "#f4e69a",
                    fontWeight: 700,
                    fontSize: { xs: "1.6rem", md: "2rem" },
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#aaa", fontSize: { xs: "0.8rem", md: "0.9rem" } }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* FILTER + NASLOV */}
      <Box id="delovi" sx={{ backgroundColor: "#1d1d1d", py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: { xs: 3, md: 5 } }}>
            <Typography
              variant="overline"
              sx={{
                color: "#d4af37",
                fontWeight: 700,
                letterSpacing: "0.18em",
                fontSize: "0.8rem",
              }}
            >
              Naša ponuda
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "#f4e69a",
                fontWeight: 700,
                mt: 1,
                mb: 2,
                fontSize: { xs: "1.6rem", sm: "2rem", md: "2.5rem" },
              }}
            >
              Delovi i moduli koje popravljamo
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
                maxWidth: 640,
                mx: "auto",
                fontSize: { xs: "0.92rem", md: "1.05rem" },
                lineHeight: 1.7,
              }}
            >
              Pregled dostupnih elektronskih komponenti za popravku — filtrirajte
              po proizvođaču ili nazivu dela kako biste brzo pronašli ono što
              vam treba.
            </Typography>
          </Box>

          {/* FILTERS */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: 2, md: 3 },
              flexWrap: "wrap",
              alignItems: "center",
              mb: { xs: 4, md: 6 },
            }}
          >
            <SingleSelect
              selectedType={selectedType}
              setSelectedType={setSelectedType}
            />
            <SearchAutocomplete
              productItems={porductItems}
              searchValue={searchValue}
              handleSearchChange={(e, newValue) => setSearchValue(newValue)}
              inputValue={inputValue}
              handleInputChange={(e, newInput) => setInputValue(newInput)}
            />
          </Box>

          {/* KARTICE */}
          {filteredItems.length === 0 ? (
            <Box
              sx={{
                textAlign: "center",
                color: "#aaa",
                py: 6,
                border: "1px dashed rgba(244, 230, 154, 0.2)",
                borderRadius: 3,
              }}
            >
              <Typography sx={{ fontSize: "1.05rem" }}>
                Nema rezultata za zadati filter.
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                  lg: "repeat(4, 1fr)",
                },
                gap: 3,
              }}
            >
              {filteredItems.map((item, index) => (
                <Card
                  key={index}
                  onClick={() => handleOpenModal(item)}
                  sx={{
                    cursor: "pointer",
                    background:
                      "linear-gradient(180deg, rgba(45,45,45,0.9) 0%, rgba(35,35,35,0.9) 100%)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(244, 230, 154, 0.1)",
                    borderRadius: 3,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: 220,
                    position: "relative",
                    overflow: "hidden",
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
                      transition: "transform 0.3s ease",
                    },
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 18px 40px rgba(244, 230, 154, 0.12)",
                      border: "1px solid rgba(244, 230, 154, 0.35)",
                      "&::before": { transform: "scaleX(1)" },
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: "center", px: 3, py: 3 }}>
                    <Chip
                      label={
                        item.type?.[0]?.toUpperCase() + item.type?.slice(1)
                      }
                      size="small"
                      sx={{
                        mb: 2,
                        color: "#f4e69a",
                        backgroundColor: "rgba(244,230,154,0.08)",
                        border: "1px solid rgba(244,230,154,0.25)",
                        fontWeight: 600,
                        fontSize: "0.72rem",
                        letterSpacing: "0.04em",
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#f4e69a",
                        fontSize: "1rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                        mb: 1.2,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      borderTop: "1px solid rgba(244,230,154,0.08)",
                      px: 3,
                      py: 1.5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#d4af37",
                      fontWeight: 600,
                      fontSize: "0.82rem",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      gap: 0.5,
                    }}
                  >
                    Detaljnije
                    <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
                  </Box>
                </Card>
              ))}
            </Box>
          )}
        </Container>
      </Box>

      {/* MODAL */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            sx: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
          },
        }}
      >
        <Fade in={modalOpen}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              maxWidth: 540,
              maxHeight: "85vh",
              overflowY: "auto",
              bgcolor: "#1e1e1e",
              border: "1px solid rgba(244,230,154,0.25)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
              borderRadius: 3,
              p: { xs: 3, md: 4 },
              color: "white",
              outline: "none",
            }}
          >
            <IconButton
              onClick={handleCloseModal}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                color: "#f4e69a",
                "&:hover": { backgroundColor: "rgba(244,230,154,0.08)" },
              }}
            >
              <CloseIcon />
            </IconButton>

            {selectedItem && (
              <>
                <Chip
                  label={selectedItem.type}
                  size="small"
                  sx={{
                    mb: 2,
                    textTransform: "capitalize",
                    color: "#f4e69a",
                    backgroundColor: "rgba(244,230,154,0.1)",
                    border: "1px solid rgba(244,230,154,0.25)",
                    fontWeight: 600,
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    color: "#f4e69a",
                    fontWeight: 700,
                    pr: 4,
                  }}
                >
                  {selectedItem.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ lineHeight: 1.7, color: "#cfcfcf", mb: 2 }}
                >
                  {selectedItem.desc}
                </Typography>

                {selectedItem.child && selectedItem.child.length > 0 && (
                  <Box sx={{ mt: 3 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "#f4e69a",
                        mb: 1.5,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        fontSize: "0.78rem",
                      }}
                    >
                      Uobičajeni problemi
                    </Typography>
                    <Stack spacing={1.2}>
                      {selectedItem.child.map((c, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            p: 1.5,
                            borderRadius: 2,
                            backgroundColor: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(244,230,154,0.08)",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#f4e69a",
                              fontWeight: 600,
                              fontSize: "0.9rem",
                              mb: 0.4,
                            }}
                          >
                            {c.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "#bbb", fontSize: "0.85rem" }}
                          >
                            {c.desc}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                )}

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  sx={{ mt: 4, justifyContent: "flex-end" }}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleCloseModal}
                  >
                    Zatvori
                  </Button>
                  <Button
                    component="a"
                    href="tel:+381658252864"
                    variant="contained"
                    color="primary"
                    startIcon={<PhoneInTalkIcon />}
                    onClick={handleCloseModal}
                  >
                    Zatraži popravku
                  </Button>
                </Stack>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Home;
