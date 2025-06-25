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
import productsData from "../data/new_product.json";

// Tip za proizvode
interface Product {
  id: number;
  type: string;
  module: string;
  description: string;
  common_repairs: string[];
  image?: string;
}

// Type guard za sigurnost
function isProduct(item: any, type?: string): item is Product {
  return (
    item &&
    typeof item.id === "number" &&
    typeof item.type === "string" &&
    (type ? item.type === type : true) &&
    typeof item.module === "string" &&
    typeof item.description === "string" &&
    Array.isArray(item.common_repairs)
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
        maxHeight: "80vh",
        overflowY: "auto",
        p: 2,
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
            borderRadius: 2,
          }}
          onClick={() => handleProductClick(product)}
        >
          <CardContent sx={{ textAlign: "center", p: 1 }}>
            <Typography fontWeight="bold" fontSize={14}>
              {product.module}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  return (
    <Box sx={{ display: "flex", height: "80vh", bgcolor: "#F9FAFB" }}>
      {/* Burger meni za mobilne */}
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
              {/* Naslov */}
              <Typography
                variant="h4"
                sx={{ color: "#111827", fontWeight: 600 }}
              >
                {selectedProduct.module}
              </Typography>

              {/* Opis */}
              <Typography sx={{ color: "#4B5563", lineHeight: 1.6 }}>
                {selectedProduct.description}
              </Typography>

              {/* Uobičajene popravke */}
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 500, color: "#111827", mb: 1 }}
                >
                  Uobičajene popravke:
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {selectedProduct.common_repairs.map((repair, idx) => (
                    <Chip
                      key={idx}
                      label={repair}
                      sx={{
                        bgcolor: "#3B82F6",
                        color: "#FFFFFF",
                        "&:hover": { bgcolor: "#2563EB" },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Card>
        )}
      </Box>
    </Box>
  );
};

export default ProductDetail;
