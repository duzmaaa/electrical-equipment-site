import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const ContactCta = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: "#111827",
        color: "#fff",
        textAlign: "center",
        py: 6,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Spreman da unaprediš svoje vozilo?
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => navigate("/kontakt")}
      >
        Kontaktiraj nas
      </Button>
    </Box>
  );
};

export default ContactCta;
