// ProductCard.tsx
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, image, link }) => (
  <Card>
    <CardActionArea component={RouterLink} to={link}>
      <CardMedia component="img" height="200" image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default ProductCard;
