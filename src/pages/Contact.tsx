import React, { useState } from "react";
import { Box, Typography, IconButton, Modal } from "@mui/material";
import { Phone, Email, LocationOn, AccessTime } from "@mui/icons-material";

const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Kontakt
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "4",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            marginBottom: 1,
          }}
        >
          <IconButton color="primary">
            <Phone />
          </IconButton>
          <Typography variant="body1">+381 6X XXX XXXX</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            marginBottom: 1,
          }}
        >
          <IconButton color="primary">
            <AccessTime />
          </IconButton>
          <Typography variant="body1">Radno vreme: 08: 16</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <IconButton color="primary">
            <Email />
          </IconButton>
          <Typography variant="body1">kontakt@trucks.com</Typography>
        </Box>

        {/* LOKACIJA - Klik na ovo otvara modal */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            marginBottom: 1,
            cursor: "pointer",
          }}
          onClick={handleOpen}
        >
          <IconButton color="primary">
            <LocationOn />
          </IconButton>
          <Typography variant="body1">
            Uzice, Srbija, Trg Slobode 123
          </Typography>
        </Box>
      </Box>

      {/* Modal sa Google Mapom */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: 600 },
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 2,
            outline: "none",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Uzice,Srbija"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default Contact;
