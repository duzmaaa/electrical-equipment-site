// Home.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import ProductCard from "../componets/ProductCard";

const products = [
  {
    id: 1,
    name: "Kontrolna jedinica MAN",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Senzor Volvo FH",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Alternator Scania",
    image: "https://via.placeholder.com/300",
  },
];

const Home: React.FC = () => (
  <Box>
    <Typography variant="h4" component="h1" gutterBottom>
      Dobrodošli na Truck Spare Electrics
    </Typography>
    <Typography paragraph>
      Specijalizovani za električne delove za kamione i radne mašine. Nudimo
      veliki izbor rezervnih delova, kvalitetnu uslugu i brzu dostavu.
    </Typography>
    <Typography paragraph>
      Kontaktirajte nas putem telefona za sva pitanja i porudžbine. Naš tim
      stručnjaka je spreman da vam pomogne pri izboru pravih delova za vaša
      vozila.
    </Typography>

    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mt: 4 }}>
      {products.map((product) => {
        const link =
          product.id === 1 ? "/product/kamion" : `/proizvod/${product.id}`;

        return (
          <Box
            key={product.id}
            sx={{ width: { xs: "100%", sm: "48%", md: "30%" } }}
          >
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
  </Box>
);

export default Home;
