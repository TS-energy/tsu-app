// First time Using theme

import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

// TODO : create Theme in the future
const buttonTheme = createTheme({
  palette: {
    primary: {
      // example
      // purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex,
      main: "#11cb5f",
    },
    neutral: {
      main: "#647488",
      contrastText: "#fff",
    },
    black: {
      main: "black",
      contrastText: "#fff",
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
    black: Palette["neutral"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
    black?: PaletteOptions["neutral"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
    black: true;
  }
}

export default buttonTheme;
