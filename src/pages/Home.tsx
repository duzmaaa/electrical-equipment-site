import React, { useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import ProductCard from "../componets/ProductCard";
import MultiSelect from "../componets/product/Multiselect";
import SearchAutocomplete from "../componets/product/Autocomplate";
import porductItems from "../data/data.json";

interface ChildItem {
  title: string;
  desc: string;
}
interface ProductItem {
  id: number;
  title: string;
  type: string;
  desc: string;
  child?: ChildItem[];
}

const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState<ProductItem | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const filteredItems = porductItems.filter((item: ProductItem) => {
    const matchesType =
      selectedTypes.length === 0 || selectedTypes.includes(item.type);

    const matchesSearch =
      inputValue.trim() === "" ||
      item.title.toLowerCase().includes(inputValue.toLowerCase());

    return matchesType && matchesSearch;
  });

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url('/images/hero-section.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "500px",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          marginTop: "-20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          color: "#f4e69a",
          textAlign: "left",
          pl: 5,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
              md: "2.5rem",
            },
            marginLeft: "10rem",
            fontWeight: "600",
          }}
          component="h1"
          gutterBottom
        >
          PROIZVODNJA I POPRAVKA
          <br />
          ELEKTRONSKE OPREMA
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: 700,
            color: "white",
            mt: 4,
            marginLeft: "10rem",
            fontSize: "1.2rem",
          }}
        >
          Specijalizovani za električne delove kamiona, autobusa i brodova. Naša
          firma pruža vrhunsku uslugu popravke i proizvodnje elektronske opreme,
          uz brz rok isporuke i garanciju kvaliteta.
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "#1d1d1d", // pozadina iza kartica
        }}
      >
        <Box
          sx={{
            p: 4,
            display: "flex",
            justifyContent: "center", // centrira horizontalno ceo sadržaj
            gap: 3, // razmak između komponenti
            flexWrap: "wrap", // da budu responsivne, prelaze u novi red ako nema mesta
            alignItems: "center", // vertikalno poravnanje u sredinu
          }}
        >
          <MultiSelect
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
          />
          <SearchAutocomplete
            productItems={porductItems}
            searchValue={searchValue}
            handleSearchChange={(e, newValue) => setSearchValue(newValue)}
            inputValue={inputValue}
            handleInputChange={(e, newInput) => setInputValue(newInput)}
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            py: 6,
            px: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
            }}
          >
            {filteredItems.map((item, index) => (
              <Card
                key={index}
                style={{ background: "transparent" }}
                sx={{ width: 280, borderRadius: 3, boxShadow: 3 }}
              >
                <CardContent sx={{ textAlign: "center", px: 3, py: 2 }}>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    gutterBottom
                    sx={{
                      color: "#f4e69a",
                      fontSize: "1.2rem",
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "white",
                      fontSize: "0.95rem",
                      fontWeight: 400,
                      mt: 1,
                    }}
                  >
                    {item.type}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/*{filteredItems.map((item) => (*/}
        {/*  <ProductCard key={item.id} product={item} />*/}
        {/*))}*/}
      </Box>
    </Box>
  );
};

export default Home;
