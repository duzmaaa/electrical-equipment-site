import React from "react";
import { Box, Typography } from "@mui/material";

const images = ["/popravka1.jpg", "/popravka2.jpg", "/popravka3.jpg"];

export default function AboutUs() {
  return (
    <Box
      sx={{
        backgroundColor: "#F3F4F6",
        padding: { xs: "20px", sm: "40px" },
        maxWidth: 900,
        margin: "0 auto",
        minHeight: "100vh",
      }}
    >
      {/* Naslov */}
      <Typography
        variant="h3"
        component="h1"
        sx={{
          color: "#111827",
          mb: 2,
          textAlign: "center",
          fontSize: {
            xs: "1.5rem",
            sm: "2rem",
            md: "2.5rem",
          },
        }}
      >
        Ko smo mi i zašto nam možete verovati?
      </Typography>

      {/* Podnaslov */}
      <Typography
        variant="h2"
        component="h2"
        sx={{
          color: "#374151",
          fontWeight: 500,
          fontSize: { xs: "1.25rem", sm: "1.75rem" },
          mb: 3,
          textAlign: "center",
        }}
      >
        Specijalisti za elektronsku opremu kamiona, autobusa i brodova
      </Typography>

      {/* Paragraf */}
      <Typography
        variant="body1"
        sx={{
          color: "#4B5563",
          fontSize: { xs: "1rem", sm: "1.125rem" },
          lineHeight: 1.6,
          mb: 4,
          textAlign: "justify",
        }}
      >
        Tosanić Truck Electronic je firma sa dugogodišnjom tradicijom u
        proizvodnji i popravci elektronskih delova za teška vozila i plovila.
        Naša misija je da pružimo pouzdana i inovativna rešenja za sve vaše
        potrebe u oblasti elektronskih sistema na kamionima, autobusima i
        brodovima. Kvalitet, stručnost i posvećenost su temelj našeg rada.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#4B5563",
          fontSize: { xs: "1rem", sm: "1.125rem" },
          lineHeight: 1.6,
          mb: 4,
          textAlign: "justify",
        }}
      >
        Naš tim stručnjaka koristi najnoviju tehnologiju i alate kako bi
        dijagnostikovao i rešio svaki problem brzo i efikasno. Ponosni smo što
        smo pouzdan partner mnogim kompanijama širom Srbije i regiona, koji
        prepoznaju kvalitet i profesionalizam naših usluga.
      </Typography>

      {/* Slike rada */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          justifyContent: "center",
          mb: 5,
        }}
      >
        {images.map((src, index) => (
          <Box
            key={index}
            component="img"
            src={src}
            alt={`Radnici na popravci ${index + 1}`}
            sx={{
              width: { xs: "100%", sm: "30%" },
              borderRadius: 2,
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              objectFit: "cover",
              height: 200,
            }}
          />
        ))}
      </Box>

      {/* Završni paragraf */}
      <Typography
        variant="body1"
        sx={{
          color: "#4B5563",
          fontSize: { xs: "1rem", sm: "1.125rem" },
          lineHeight: 1.6,
          textAlign: "justify",
        }}
      >
        Posetite nas ili nas kontaktirajte da saznate više o našim proizvodima i
        uslugama. Sa Tosanić Truck Electronic, vaše vozilo je u sigurnim rukama.
      </Typography>
    </Box>
  );
}
