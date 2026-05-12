import { createTheme, alpha } from "@mui/material";

const GOLD = "#f4e69a";
const GOLD_DEEP = "#d4af37";
const BG_BASE = "#1d1d1d";
const BG_PAPER = "#262626";
const BG_ELEVATED = "#2a2a2a";

declare module "@mui/material/styles" {
  interface Palette {
    gold: Palette["primary"];
  }
  interface PaletteOptions {
    gold?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: GOLD,
      light: "#fff176",
      dark: GOLD_DEEP,
      contrastText: "#1a1a1a",
    },
    secondary: {
      main: GOLD_DEEP,
      contrastText: "#ffffff",
    },
    gold: {
      main: GOLD,
      light: "#fff176",
      dark: GOLD_DEEP,
      contrastText: "#1a1a1a",
    },
    background: {
      default: BG_BASE,
      paper: BG_PAPER,
    },
    text: {
      primary: "#f5f5f5",
      secondary: "#cfcfcf",
      disabled: "#8a8a8a",
    },
    divider: alpha(GOLD, 0.15),
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: ["Inter", "Roboto", "Helvetica", "Arial", "sans-serif"].join(
      ",",
    ),
    h1: { fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.02em" },
    h3: { fontWeight: 700, letterSpacing: "-0.01em" },
    h4: { fontWeight: 700, letterSpacing: "-0.01em" },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 600, letterSpacing: "0.02em" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          backgroundColor: BG_BASE,
          color: "#f5f5f5",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
        "*::selection": {
          background: alpha(GOLD, 0.3),
          color: "#fff",
        },
        "*::-webkit-scrollbar": {
          width: 10,
          height: 10,
        },
        "*::-webkit-scrollbar-track": {
          background: BG_BASE,
        },
        "*::-webkit-scrollbar-thumb": {
          background: alpha(GOLD, 0.25),
          borderRadius: 8,
        },
        "*::-webkit-scrollbar-thumb:hover": {
          background: alpha(GOLD, 0.45),
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 10,
          padding: "10px 22px",
          fontWeight: 600,
          transition: "all 0.25s ease",
        },
        containedPrimary: {
          color: "#1a1a1a",
          background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_DEEP} 100%)`,
          boxShadow: `0 6px 18px ${alpha(GOLD, 0.25)}`,
          "&:hover": {
            background: `linear-gradient(135deg, #fff2b0 0%, ${GOLD} 100%)`,
            boxShadow: `0 8px 24px ${alpha(GOLD, 0.4)}`,
            transform: "translateY(-2px)",
          },
        },
        outlinedPrimary: {
          borderColor: alpha(GOLD, 0.5),
          color: GOLD,
          "&:hover": {
            borderColor: GOLD,
            background: alpha(GOLD, 0.08),
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: BG_ELEVATED,
          border: `1px solid ${alpha(GOLD, 0.1)}`,
          borderRadius: 16,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
    },
  },
});
