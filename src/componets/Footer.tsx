import React from "react";
import { Box, Typography, Link, IconButton, Button } from "@mui/material";
import {
  Facebook,
  Twitter,
  Google,
  Instagram,
  LinkedIn,
  GitHub,
  Home,
  Email,
  Phone,
  Print,
  KeyboardArrowUp,
} from "@mui/icons-material";

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", color: "#111827", mt: 10 }}>
      {/*/!* Main content *!/*/}
      {/*<Box*/}
      {/*  sx={{*/}
      {/*    display: "flex",*/}
      {/*    flexDirection: { xs: "column", md: "row" },*/}
      {/*    justifyContent: "space-between",*/}
      {/*    flexWrap: "wrap",*/}
      {/*    px: 3,*/}
      {/*    py: 5,*/}
      {/*    gap: 4,*/}
      {/*  }}*/}
      {/*>*/}
      {/*  /!* Logo + Opis *!/*/}
      {/*  <Box sx={{ flex: "1 1 250px" }}>*/}
      {/*    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>*/}
      {/*      TosanicElectronics*/}
      {/*    </Typography>*/}
      {/*    <Box*/}
      {/*      sx={{*/}
      {/*        width: 150,*/}
      {/*        height: 50,*/}
      {/*        backgroundColor: "#ccc",*/}
      {/*        display: "flex",*/}
      {/*        alignItems: "center",*/}
      {/*        justifyContent: "center",*/}
      {/*        borderRadius: 1,*/}
      {/*        mb: 2,*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      LOGO*/}
      {/*    </Box>*/}
      {/*    <Typography variant="body2">*/}
      {/*      Kvalitetan servis elektronskih modula za teretna vozila i kamione.*/}
      {/*    </Typography>*/}
      {/*  </Box>*/}

      {/*  /!* Proizvodi *!/*/}
      {/*  <Box sx={{ flex: "1 1 200px" }}>*/}
      {/*    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>*/}
      {/*      Proizvodi*/}
      {/*    </Typography>*/}
      {/*    {["ECU dijagnostika", "ABS popravke", "AdBlue OFF", "Kablovi"].map(*/}
      {/*      (item) => (*/}
      {/*        <Link*/}
      {/*          key={item}*/}
      {/*          href="#"*/}
      {/*          underline="hover"*/}
      {/*          display="block"*/}
      {/*          color="inherit"*/}
      {/*          sx={{ mb: 1 }}*/}
      {/*        >*/}
      {/*          {item}*/}
      {/*        </Link>*/}
      {/*      ),*/}
      {/*    )}*/}
      {/*  </Box>*/}

      {/*  /!* Korisni linkovi *!/*/}
      {/*  <Box sx={{ flex: "1 1 200px" }}>*/}
      {/*    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>*/}
      {/*      Linkovi*/}
      {/*    </Typography>*/}
      {/*    {["Početna", "Usluge", "Cene", "Kontakt"].map((item) => (*/}
      {/*      <Link*/}
      {/*        key={item}*/}
      {/*        href="#"*/}
      {/*        underline="hover"*/}
      {/*        display="block"*/}
      {/*        color="inherit"*/}
      {/*        sx={{ mb: 1 }}*/}
      {/*      >*/}
      {/*        {item}*/}
      {/*      </Link>*/}
      {/*    ))}*/}
      {/*  </Box>*/}

      {/*  /!* Kontakt *!/*/}
      {/*  <Box sx={{ flex: "1 1 250px" }}>*/}
      {/*    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>*/}
      {/*      Kontakt*/}
      {/*    </Typography>*/}
      {/*    <Typography variant="body2" sx={{ display: "flex", mb: 1 }}>*/}
      {/*      <Home sx={{ mr: 1 }} fontSize="small" />*/}
      {/*      Čačak, Srbija*/}
      {/*    </Typography>*/}
      {/*    <Typography variant="body2" sx={{ display: "flex", mb: 1 }}>*/}
      {/*      <Email sx={{ mr: 1 }} fontSize="small" />*/}
      {/*      info@tosanic.rs*/}
      {/*    </Typography>*/}
      {/*    <Typography variant="body2" sx={{ display: "flex", mb: 1 }}>*/}
      {/*      <Phone sx={{ mr: 1 }} fontSize="small" />*/}
      {/*      +381 60 1234567*/}
      {/*    </Typography>*/}
      {/*    <Typography variant="body2" sx={{ display: "flex" }}>*/}
      {/*      <Print sx={{ mr: 1 }} fontSize="small" />*/}
      {/*      +381 11 7654321*/}
      {/*    </Typography>*/}
      {/*  </Box>*/}
      {/*</Box>*/}

      {/* Bottom bar */}
      {/* Bottom bar */}
      <Box
        sx={{
          py: 2,
          px: 3,
          backgroundColor: "#eaeaea",
          color: "#111827",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          textAlign: { xs: "center", sm: "left" },
          gap: 2,
        }}
      >
        <Typography variant="body2" sx={{ flex: 1, textAlign: "center" }}>
          © {new Date().getFullYear()} TosanicElectronics. Sva prava zadržana.
        </Typography>

        <Button
          variant="outlined"
          size="small"
          onClick={handleScrollTop}
          startIcon={<KeyboardArrowUp />}
          sx={{ alignSelf: { xs: "center", sm: "flex-end" } }}
        >
          Back to top
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
