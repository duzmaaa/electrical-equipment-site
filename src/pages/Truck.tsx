// Kamion.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import ProductCard from "../componets/ProductCard";

const truckProducts = [
  {
    id: 1,
    name: "MAN",
    image: "https://1000logos.net/wp-content/uploads/2021/04/MAN-logo.png",
  },
  {
    id: 2,
    name: "Scania",
    image:
      "https://www.shutterstock.com/image-vector/scania-logo-icon-art-design-260nw-2283038695.jpg",
  },
  {
    id: 3,
    name: "Volvo",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35us_ksL5vl8fthBpRck9W5iflDd94DAENg&s",
  },
  {
    id: 4,
    name: "Mercedes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1y8CtxvdSrxebERff16f2uZzxD46P5fyLww&s",
  },
  {
    id: 5,
    name: "DAF",
    image: "https://logowik.com/content/uploads/images/310_daf.jpg",
  },
  {
    id: 6,
    name: "Renault",
    image: "https://logowik.com/content/uploads/images/renault-trucks2259.jpg", // Placeholder
  },
  {
    id: 7,
    name: "IVECO",
    image: "https://cdn.worldvectorlogo.com/logos/iveco.svg",
  },
  {
    id: 8,
    name: "Multicar",
    image:
      "https://images.seeklogo.com/logo-png/9/1/multicar-logo-png_seeklogo-95914.png", // Placeholder
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

    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        mt: 4,
      }}
    >
      {truckProducts.map((product) => (
        <Box
          key={product.id}
          sx={{ width: { xs: "48%", sm: "48%", md: "30%" } }}
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
