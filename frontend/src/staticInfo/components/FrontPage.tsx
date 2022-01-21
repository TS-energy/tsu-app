import React, { Component } from "react";
// import logo from "../../../static/images/logo.png";
// import Button from '@material-ui/core/Button'
import Button from "@mui/material/Button";
import {
  Box,
  ButtonGroup,
  fabClasses,
  Grid,
  IconButton,
  styled,
} from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SortIcon from "@material-ui/icons/Sort";

import logo from "./../../assets/images/Logo.png";
import background from "./../../assets/images/forest.jpeg";
import Header from "./Header";
import { flexbox } from "@mui/system";
import buttonTheme from "./../../themes/theme";
import "../../styles/base";

const Picture = styled("div")({
  minHeight: "100vh",
  backgroundImage: `url(${background})`,
  //backgroundImage: `url(${process.env.IMG_PATH + 'forest.jpeg'})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column", // TODO : to understand why row flex cannot change line
    justifyContent: "center",
    alignItems: "center",
    background: "none",
    height: "95vh",
  },
  title: {
    fontSize: "5em",
  },
  buttonTest: {
    fontSize: "2.5em",
    padding: "12",
  },
});

const FrontPage = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      {/* <Picture> */}
      <Header></Header>
      <div className={classes.root}>
        <ThemeProvider theme={buttonTheme}>
          <h1 className={classes.title}>
            One calculator, <br /> for all carbon product
            {/* <span style={{ color: "#5AFFDD" }}> TSUEnergy </span> */}
            <br />
            <span style={{ fontSize: "1.5rem", fontFamily: "Open Sans" }}>
              TS energy for all carbon product
            </span>
          </h1>

          <Button
            color="black"
            className={classes.buttonTest}
            variant="contained"
            href="/calculator"
            sx={{ mt: 3 }}
          >
            Start
          </Button>
        </ThemeProvider>
      </div>
      {/* </Picture> */}
      <header className="Front-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

export default FrontPage;
