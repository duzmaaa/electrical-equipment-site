// Kamion.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import ProductCard from "../componets/ProductCard";

const truckProducts = [
  {
    id: 1,
    name: "Kontrolna jedinica MAN",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Alternator Scania",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Senzor Volvo FH",
    image: "https://via.placeholder.com/300",
  },
];

const Truck: React.FC = () => (
  <Box>
    <Typography variant="h4" component="h1" gutterBottom>
      Kamion Delovi
    </Typography>
    <Typography paragraph>
      Na ovoj stranici možete pronaći delove specijalizovane za kamione.
      Kliknite na kartice kako biste saznali više o svakom proizvodu.
    </Typography>

    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mt: 4 }}>
      {truckProducts.map((product) => (
        <Box
          key={product.id}
          sx={{ width: { xs: "100%", sm: "48%", md: "30%" } }}
        >
          <ProductCard
            id={product.id}
            name={product.name}
            image={product.image}
            link={`/proizvod/${product.id}`}
          />
        </Box>
      ))}
    </Box>
  </Box>
);

export default Truck;
