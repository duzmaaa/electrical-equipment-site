import React, { useState, useEffect } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { useParams } from "react-router-dom";
import productsData from "../data/product.json"; // Importuj podatke iz JSON fajla

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  specifications: string;
  price: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Pronađi proizvod na osnovu ID-a
  useEffect(() => {
    if (id) {
      const product = productsData.find(
        (product) => product.id === parseInt(id), // Pretvori id iz parametara u broj
      );
      setSelectedProduct(product || null); // Ako nije pronađen proizvod, postavi null
    }
  }, [id]); // Trigeruj ponovo kada se promeni ID u URL-u

  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
      {/* Lista proizvoda sa leve strane */}
      <Box sx={{ width: "250px", borderRight: "1px solid #ddd" }}>
        <Typography variant="h6" gutterBottom>
          Proizvodi
        </Typography>
        <List>
          {productsData.map((product) => (
            <ListItem
              key={product.id}
              onClick={() => setSelectedProduct(product)}
            >
              <ListItemText primary={product.name} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Desna strana sa detaljima proizvoda */}
      <Box sx={{ flex: 1 }}>
        {selectedProduct ? (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ width: "100%" }}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={selectedProduct.image}
                  alt={selectedProduct.name}
                />
                <CardContent>
                  <Typography variant="h6">{selectedProduct.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {selectedProduct.description}
                  </Typography>
                  <Typography variant="h6">
                    Cena: {selectedProduct.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {selectedProduct.specifications}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        ) : (
          <Typography variant="h6" color="text.secondary">
            Izaberite proizvod sa leve strane
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ProductDetail;
