import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import productsData from "../data/data.json";

interface Product {
  id: number;
  type: string;
  title: string;
  desc: string;
  child?: { title: string; desc: string }[];
}

function isProduct(item: any, type?: string): item is Product {
  return (
    item &&
    typeof item.id === "number" &&
    typeof item.type === "string" &&
    (type ? item.type === type : true) &&
    typeof item.title === "string" &&
    typeof item.desc === "string"
  );
}

const ProductDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");
  const id = searchParams.get("id");

  const filteredProducts: Product[] = productsData.filter((item) =>
    isProduct(item, type ?? undefined),
  );

  const selectedProduct: Product | undefined = id
    ? filteredProducts.find((p) => String(p.id) === id)
    : filteredProducts[0];

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleProductClick = (product: Product) => {
    setSearchParams({ type: product.type, id: String(product.id) });
    setDrawerOpen(false);
  };

  const productList = (
    <Box
      sx={{
        width: 250,
        bgcolor: "#111827",
        height: "100vh",
        overflowY: "auto",
        p: 0, // bez paddinga
        margin: 0, // nema margine
      }}
    >
      {filteredProducts.map((product) => (
        <Card
          key={product.id}
          sx={{
            backgroundColor:
              selectedProduct?.id === product.id ? "#1f2937" : "#111827",
            color: "#FFFFFF",
            cursor: "pointer",
            transition: "0.3s",
            mb: 1,
            "&:hover": { backgroundColor: "#374151" },
            borderRadius: 0, // bez zaobljenja da ide do ivice
            boxShadow: "none", // da bude skroz ravno, po želji
          }}
          onClick={() => handleProductClick(product)}
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
    <Box sx={{ display: "flex", height: "90vh", bgcolor: "#F9FAFB" }}>
      {/* Burger meni za mobilne - levo i samo kad nije otvoren drawer */}
      {!drawerOpen && (
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            position: "fixed",
            top: "6.5rem",
            left: "1.5rem",
            zIndex: 1400,
          }}
        >
          <IconButton onClick={toggleDrawer(true)} size="large">
            <MenuIcon sx={{ color: "#111827" }} />
          </IconButton>
        </Box>
      )}

      {/* Sidebar za desktop - LEVO */}
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
          p: 0,
          margin: 0,
          borderRadius: 0,
          boxShadow: "none",
        }}
      >
        {productList}
      </Box>

      {/* Drawer za mobilne - LEVO */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 250,
            height: "100vh",
            margin: 0,
            padding: 0,
            borderRadius: 0,
            boxShadow: "none",
            zIndex: 1500,
          },
        }}
        ModalProps={{
          keepMounted: true,
          BackdropProps: {
            sx: {
              backgroundColor: "rgba(0,0,0,0.3)",
            },
          },
        }}
      >
        {productList}
      </Drawer>

      {/* Glavni sadržaj */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          padding: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {selectedProduct && (
          <Card
            sx={{
              width: "100%",
              maxWidth: 800,
              bgcolor: "#FFFFFF",
              borderRadius: 3,
              boxShadow: 3,
              p: 3,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography
                variant="h4"
                sx={{ color: "#111827", fontWeight: 600 }}
              >
                {selectedProduct.title}
              </Typography>

              <Typography sx={{ color: "#4B5563", lineHeight: 1.6 }}>
                {selectedProduct.desc}
              </Typography>

              {selectedProduct.child && selectedProduct.child.length > 0 && (
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 500, color: "#111827", mb: 1 }}
                  >
                    Podgrupe:
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    {selectedProduct.child.map((childItem, idx) => (
                      <Box
                        key={idx}
                        sx={{ p: 1, borderRadius: 1, bgcolor: "#F3F4F6" }}
                      >
                        <Typography
                          sx={{ fontWeight: "bold", color: "#3B82F6" }}
                        >
                          {childItem.title}
                        </Typography>
                        <Typography sx={{ color: "#4B5563" }}>
                          {childItem.desc}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}
            </Box>
          </Card>
        )}
      </Box>
    </Box>
  );
};

export default ProductDetail;
