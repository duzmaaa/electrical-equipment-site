import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  Chip,
  CardMedia,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import productsData from "../data/productItems.json";

const ProductDetail = () => {
  const [selectedProduct, setSelectedProduct] = useState(productsData[0]);
  const [tabIndex, setTabIndex] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const productList = (
    <Box
      sx={{
        width: 250,
        bgcolor: "#111827", // Tamna siva pozadina
        maxHeight: "80vh",
        overflowY: "auto",
        p: 2,
      }}
    >
      {productsData.map((product) => (
        <Card
          key={product.id}
          sx={{
            backgroundColor:
              selectedProduct.id === product.id ? "#1f2937" : "#111827", // Akcent siva
            color: "#FFFFFF",
            cursor: "pointer",
            transition: "0.3s",
            mb: 1,
            "&:hover": { backgroundColor: "#374151" },
            borderRadius: 2,
          }}
          onClick={() => {
            setSelectedProduct(product);
            setTabIndex(0);
            setDrawerOpen(false);
          }}
        >
          <CardContent sx={{ textAlign: "center", p: 1 }}>
            <Typography fontWeight="bold" fontSize={14}>
              {product.title}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  return (
    <Box sx={{ display: "flex", height: "80vh", bgcolor: "#F3F4F6" }}>
      {/* Burger meni dugme */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          position: "fixed",
          top: 10,
          left: 10,
          zIndex: 1300,
        }}
      >
        <IconButton onClick={toggleDrawer(true)} size="large">
          <MenuIcon sx={{ color: "#111827" }} />
        </IconButton>
      </Box>

      {/* Sidebar za desktop */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          width: 250,
          bgcolor: "#111827",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          maxHeight: "100vh",
          overflowY: "auto",
        }}
      >
        {productList}
      </Box>

      {/* Drawer za mobilne */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {productList}
      </Drawer>

      {/* Glavni sadržaj */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          padding: 4,
          backgroundColor: "#F3F4F6",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {selectedProduct && (
          <Card sx={{ width: "100%", maxWidth: 900, padding: 3 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
              }}
            >
              {/* Tekstualni deo */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    color: "#111827",
                  }}
                >
                  {selectedProduct.title}
                </Typography>

                <Tabs
                  value={tabIndex}
                  onChange={(e, newValue) => setTabIndex(newValue)}
                  textColor="primary"
                  indicatorColor="primary"
                  sx={{ mb: 2 }}
                >
                  <Tab label="Opis" />
                  <Tab label="Servisi" />
                  <Tab label="Greške" />
                </Tabs>

                {tabIndex === 0 && (
                  <>
                    <Typography
                      variant="body1"
                      sx={{ mb: 2, color: "#4B5563" }}
                    >
                      {selectedProduct.systemDescription || "Nema opisa."}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: "bold", mb: 1, color: "#374151" }}
                    >
                      Tipovi uređaja:
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                    >
                      {selectedProduct.deviceTypes?.map((type, idx) => (
                        <Chip
                          key={idx}
                          label={type}
                          sx={{
                            bgcolor: "#3B82F6",
                            color: "#FFFFFF",
                            "&:hover": { bgcolor: "#2563EB" },
                          }}
                        />
                      ))}
                    </Box>
                  </>
                )}

                {tabIndex === 1 && (
                  <>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: "bold", mb: 1, color: "#374151" }}
                    >
                      Dostupne usluge:
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        mb: 2,
                      }}
                    >
                      {selectedProduct.services?.map((service, idx) => (
                        <Chip
                          key={idx}
                          label={service}
                          sx={{
                            bgcolor: "#3B82F6",
                            color: "#FFFFFF",
                            "&:hover": { bgcolor: "#2563EB" },
                          }}
                        />
                      ))}
                    </Box>
                  </>
                )}

                {tabIndex === 2 && (
                  <>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: "bold", mb: 1, color: "#374151" }}
                    >
                      Kodovi grešaka:
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                    >
                      {selectedProduct.errorCodes &&
                      selectedProduct.errorCodes.length > 0 ? (
                        selectedProduct.errorCodes.map((error, idx) => (
                          <Chip
                            key={idx}
                            label={error}
                            color="error"
                            variant="outlined"
                          />
                        ))
                      ) : (
                        <Typography sx={{ color: "#4B5563" }}>
                          Nema kodova grešaka.
                        </Typography>
                      )}
                    </Box>
                  </>
                )}
              </Box>

              {/* Slika proizvoda */}
              {selectedProduct.image && (
                <CardMedia
                  component="img"
                  image={selectedProduct.image}
                  alt={selectedProduct.title}
                  sx={{
                    width: { xs: "100%", md: 300 },
                    height: { xs: 200, md: 300 },
                    borderRadius: 3,
                    objectFit: "cover",
                  }}
                />
              )}
            </Box>
          </Card>
        )}
      </Box>
    </Box>
  );
};

export default ProductDetail;
