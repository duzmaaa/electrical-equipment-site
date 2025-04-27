// Home.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import ProductCard from "../componets/ProductCard";
import Contact from "./Contact";

const products = [
  {
    id: 1,
    name: "Kamion",
    image:
      "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJ1Y2t8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    name: "Autobus",
    image:
      "https://plus.unsplash.com/premium_photo-1664302152991-d013ff125f3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Brod",
    image:
      "https://images.unsplash.com/photo-1593351415075-3bac9f45c877?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9hdHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Home: React.FC = () => (
  <Box>
    <Typography variant="h3" component="h1" color="black" gutterBottom>
      Proizvodnja i popravka elektronske opreme
    </Typography>

    <Typography variant="body1" sx={{ maxWidth: 700, mx: "auto", mt: 2 }}>
      Specijalizovani za električne delove kamiona, autobusa i brodova. Naša
      firma pruža vrhunsku uslugu popravke i proizvodnje elektronske opreme, uz
      brz rok isporuke i garanciju kvaliteta.
    </Typography>

    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        mt: 4,
      }}
    >
      {products.map((product) => {
        const link =
          product.id === 1 ? "/product/kamion" : `/proizvod/${product.id}`;

        return (
          <Box key={product.id}>
            <ProductCard
              id={product.id}
              name={product.name}
              image={product.image}
              link={link}
            />
          </Box>
        );
      })}
    </Box>

    <Contact></Contact>
  </Box>
);

export default Home;
