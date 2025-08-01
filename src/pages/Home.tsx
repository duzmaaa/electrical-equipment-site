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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Box>
      {/* HERO SECTION */}
      <Box
        sx={{
          backgroundImage: `url('/images/hero-section.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "500px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          color: "#f4e69a",
          textAlign: "left",
          pl: 5,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            fontWeight: "600",
          }}
          component="h1"
          gutterBottom
        >
          PROIZVODNJA I POPRAVKA
          <br />
          ELEKTRONSKE OPREME
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: { xs: 300, sm: 300, md: 500 },
            color: "white",
            mt: 4,
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
          }}
        >
          Specijalizovani za električne delove kamiona, autobusa i brodova. Naša
          firma pruža vrhunsku uslugu popravke i proizvodnje elektronske opreme,
          uz brz rok isporuke i garanciju kvaliteta.
        </Typography>
      </Box>

      {/* FILTER + NASLOV */}
      <Box sx={{ backgroundColor: "#1d1d1d", py: 4 }}>
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography
            variant="h4"
            sx={{
              color: "#f4e69a",
              fontWeight: "bold",
              mb: 1,
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            Delovi i moduli koje popravljamo
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#d6c972",
              maxWidth: 600,
              mx: "auto",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
            }}
          >
            Pregled dostupnih elektronskih komponenti za popravku — filtrirajte
            po proizvođaču ili nazivu dela kako biste brzo pronašli ono što vam
            treba.
          </Typography>
        </Box>

        {/* FILTERS */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            flexWrap: "wrap",
            alignItems: "center",
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
      </Box>

      {/* KARTICE */}
      <Box sx={{ width: "100%", py: 2, px: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
          }}
        >
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              onClick={() => handleOpenModal(item)}
              sx={{
                width: 280,
                height: 220,
                cursor: "pointer",
                background: "rgba(45, 45, 45, 0.8)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(244, 230, 154, 0.1)",
                borderRadius: 4,
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 16px 48px rgba(244, 230, 154, 0.15)",
                  border: "1px solid rgba(244, 230, 154, 0.3)",
                },
              }}
            >
              <CardContent sx={{ textAlign: "center", px: 4, py: 3 }}>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{
                    color: "#f4e69a",
                    fontSize: "1.1rem",
                    textTransform: "uppercase",
                    mb: 1.2,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "0.95rem",
                  }}
                >
                  {item.type?.[0]?.toUpperCase() + item.type?.slice(1)}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
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
            sx: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
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
              maxWidth: 500,
              bgcolor: "#1e1e1e",
              border: "1px solid rgba(244,230,154,0.2)",
              boxShadow: 24,
              borderRadius: 3,
              p: 4,
              color: "white",
              outline: "none",
              animation: "slideUp 0.4s ease-out",
              "@keyframes slideUp": {
                from: {
                  opacity: 0,
                  transform: "translate(-50%, 20%)",
                },
                to: {
                  opacity: 1,
                  transform: "translate(-50%, -50%)",
                },
              },
            }}
          >
            <IconButton
              onClick={handleCloseModal}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "#f4e69a",
              }}
            >
              <CloseIcon />
            </IconButton>

            {selectedItem && (
              <>
                <Typography
                  variant="h6"
                  sx={{ mb: 2, color: "#f4e69a", fontWeight: 600 }}
                >
                  {selectedItem.title}
                </Typography>

                <Typography variant="body2" sx={{ color: "#ccc", mb: 1 }}>
                  Tip: <strong>{selectedItem.type}</strong>
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ lineHeight: 1.6, color: "#aaa", mb: 2 }}
                >
                  {selectedItem.desc}
                </Typography>

                {selectedItem.child && selectedItem.child.length > 0 && (
                  <Box sx={{ mt: 2 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#f4e69a", mb: 1 }}
                    >
                      Uobičajeni problemi:
                    </Typography>
                    <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
                      {selectedItem.child.map((c, idx) => (
                        <li
                          key={idx}
                          style={{ color: "#ccc", marginBottom: 4 }}
                        >
                          <strong>{c.title}</strong> – {c.desc}
                        </li>
                      ))}
                    </ul>
                  </Box>
                )}

                <Box
                  sx={{
                    mt: 4,
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 2,
                    flexWrap: "wrap",
                  }}
                >
                  <Box
                    component="button"
                    onClick={handleCloseModal}
                    sx={{
                      backgroundColor: "transparent",
                      color: "#aaa",
                      border: "1px solid rgba(255,255,255,0.2)",
                      px: 3,
                      py: 1,
                      borderRadius: 2,
                      cursor: "pointer",
                      transition: "0.3s",
                      "&:hover": {
                        color: "#f4e69a",
                        borderColor: "#f4e69a",
                      },
                    }}
                  >
                    Zatvori
                  </Box>

                  <Box
                    component="a"
                    href="tel:+381666321"
                    onClick={handleCloseModal}
                    sx={{
                      backgroundColor: "#f4e69a",
                      color: "#000",
                      fontWeight: 600,
                      px: 3,
                      py: 1,
                      borderRadius: 2,
                      cursor: "pointer",
                      textDecoration: "none",
                      transition: "0.3s",
                      "&:hover": {
                        backgroundColor: "#ffe57f",
                      },
                    }}
                  >
                    Zatraži popravku
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Home;
