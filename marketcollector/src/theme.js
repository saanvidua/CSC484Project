// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#031273",
    },
    secondary: {
      main: "#0492C2",
    },
    background: {
      default: "#F8F9FA",
    },
    text: {
      primary: "#000000",
    },
  },
  typography: {
    fontFamily: ["Commissioner", "Arial", "serif"].join(","),
    // etc...
  },
});

export default theme;
