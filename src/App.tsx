import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { theme } from "./theme/Theme";
import { ThemeProvider } from "@mui/material";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
