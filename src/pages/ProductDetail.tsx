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
} from "@mui/material";
import productsData from "../data/productItems.json";

const ProductDetail = () => {
  const [selectedProduct, setSelectedProduct] = useState(productsData[0]);
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#f4f6f8" }}>
      {/* Left Panel */}
      <Box
        sx={{
          width: { xs: "100%", md: "30%" },
          backgroundColor: "#212121",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
          position: "relative",
        }}
      >
        {/* Huge background title */}
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            fontWeight: "bold",
            color: "rgba(255, 255, 255, 0.04)",
            fontSize: "8rem",
            zIndex: 1,
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          MERCEDES
        </Typography>

        {/* Actual content */}
        <Box sx={{ position: "relative", zIndex: 2, width: "100%" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}
          >
            Sistemi
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {productsData.map((product) => (
              <Card
                key={product.id}
                sx={{
                  backgroundColor:
                    selectedProduct.id === product.id ? "#424242" : "#333",
                  color: "white",
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": { backgroundColor: "#555" },
                  borderRadius: 2,
                  boxShadow: selectedProduct.id === product.id ? 5 : 1,
                }}
                onClick={() => {
                  setSelectedProduct(product);
                  setTabIndex(0);
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography fontWeight="bold">{product.title}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Right Panel */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          padding: 4,
          backgroundColor: "#fafafa",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {selectedProduct && (
          <Card
            sx={{
              width: "100%",
              maxWidth: "1100px",
              padding: 3,
              borderRadius: 5,
              boxShadow: 5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
              }}
            >
              {/* Text Section */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", mb: 3, color: "#00796b" }}
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
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {selectedProduct.systemDescription}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: "bold", mb: 1 }}
                    >
                      Tipovi uređaja:
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        mb: 2,
                      }}
                    >
                      {selectedProduct.deviceTypes?.map((type, idx) => (
                        <Chip
                          key={idx}
                          label={type}
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </>
                )}
                {tabIndex === 1 && (
                  <>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: "bold", mb: 1 }}
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
                          color="secondary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </>
                )}
                {tabIndex === 2 && (
                  <>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: "bold", mb: 1 }}
                    >
                      Kodovi grešaka:
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        mb: 2,
                      }}
                    >
                      {selectedProduct.errorCodes?.map((error, idx) => (
                        <Chip
                          key={idx}
                          label={error}
                          color="error"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </>
                )}
              </Box>

              {/* Image Section */}
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
                    boxShadow: 4,
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
