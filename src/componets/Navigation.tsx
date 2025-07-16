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
            color={isActive ? "#3B82F6" : "inherit"}
            // textDecorationColor={"#374151"}
            // underline={isActive ? "always" : "none"}
            sx={{
              fontSize: {
                xs: "0.65rem", // <600px
                sm: "0.75rem", // 600–900
                md: "0.8rem", // 900–1200
                lg: "0.9rem", // 1200–1536
                xl: "1rem", // >1536
              },
              textDecorationColor: "transparent",
              "&:hover": { color: "#3B82F6" },
              transition: "all 0.3s ease-in",
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
