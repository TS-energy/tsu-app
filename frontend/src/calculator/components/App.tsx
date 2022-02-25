import React, { Component } from "react";
import { render } from "react-dom";
import FormPropsTextFields from "./utils/template";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageOne from "./FirstPage/PageOne";
import PageTwo from "./SecondPage/PageTwo";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@material-ui/core/colors";

import buttonTheme from "./../../themes/theme";
import Transport from "./Transport/Transport";

// // First time Using theme
// // TODO : create Theme in the future
// const theme = createTheme({
//   palette: {
//     primary: {
//       // example
//       // purple and green play nicely together.
//       main: purple[500],
//     },
//     secondary: {
//       // This is green.A700 as hex,
//       main: "#11cb5f",
//     },
//     neutral: {
//       main: "#647488",
//       contrastText: "#fff",
//     },
//     black: {
//       main: "black",
//       contrastText: "#fff",
//     },
//   },
// });

// declare module "@mui/material/styles" {
//   interface Palette {
//     neutral: Palette["primary"];
//     black: Palette["neutral"];
//   }

//   // allow configuration using `createTheme`
//   interface PaletteOptions {
//     neutral?: PaletteOptions["primary"];
//     black?: PaletteOptions["neutral"];
//   }
// }

// // Update the Button's color prop options
// declare module "@mui/material/Button" {
//   interface ButtonPropsColorOverrides {
//     neutral: true;
//     black: true;
//   }
// }

export default class App extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Router>
        {"Calculator"}
        <Switch>
          <Route exact path="/calculator/">
            <ThemeProvider theme={buttonTheme}>
              <p>Nothing important in this page !</p>
              <p>Please go to template page or calculating pages !</p>
              <React.Fragment>
                <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <Button
                    color="black"
                    variant="contained"
                    href="/calculator/pageone"
                    sx={{ mt: 3, ml: 2 }}
                  >
                    First Page
                  </Button>
                  <Button
                    color="black"
                    variant="contained"
                    href="/calculator/template"
                    sx={{ mt: 3, ml: 2 }}
                  >
                    Template Page
                  </Button>
                </Box>
              </React.Fragment>
            </ThemeProvider>
          </Route>
          <Route
            exact
            path="/calculator/template"
            component={() => FormPropsTextFields()}
          ></Route>
          <Route path="/calculator/transport" component={()=> Transport()}></Route>
          <Route path="/calculator/pageone" component={() => PageOne()}></Route>
          <Route path="/calculator/pagetwo" component={() => PageTwo()}></Route>
        </Switch>
      </Router>
    );
  }
}
