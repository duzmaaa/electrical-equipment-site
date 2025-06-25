import { Link as RouterLink, useLocation } from "react-router-dom";
import { Box, Link } from "@mui/material";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { label: "POČETNA", to: "/" },
    { label: "PROIZVODI", to: "/proizvod" },
    { label: "TUNING", to: "/tuning" },
    { label: "ECU MODIFIKACIJE", to: "/modifikacije" },
    { label: "O NAMA", to: "/onama" },
    { label: "KONTAKT", to: "/kontakt" },
  ];

  return (
    <Box sx={{ display: "flex", gap: 4 }}>
      {navItems.map((item) => {
        const isActive = location.pathname === item.to;

        return (
          <Link
            key={item.to}
            component={RouterLink}
            to={item.to}
            color={isActive ? "#374151" : "inherit"}
            // textDecorationColor={"#374151"}
            underline={isActive ? "always" : "none"}
            sx={{
              textDecorationColor: isActive ? "#374151" : "transparent",
              fontSize: "1rem",
              "&:hover": { color: "#374151" },
            }}
          >
            {item.label}
          </Link>
        );
      })}
    </Box>
  );
};

export default Navigation;
