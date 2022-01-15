import React, { Component } from "react";
import "../../styles/base.css";
import { makeStyles } from "@material-ui/styles";
import { styled, alpha, Theme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@material-ui/icons/Sort";
import WebFont from "webfontloader";
// import "./base.styles/base.css";

const styles = {
  // "&.MuiButton-root": {
  //   border: "2px black solid"
  // },
  "&.MuiButton-text": {
    color: "white",
  },
  "&.MuiButton-contained": {
    color: "yellow",
  },
  "&.MuiButton-outlined": {
    color: "brown",
  },
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

type Props = {
  background: "blue";
};

// Note that this make Styles comes from material-mui version
const useStyles = makeStyles({
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: 1,
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
});

// TODO : import more beautiful fonts

const Header = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* TODO : to add makeStyles not style class */}
      <AppBar position="static" style={{ background: "none" }} elevation={0}>
        <Toolbar className={classes.appbar}>
          {" "}
          {/*container that flex */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SortIcon />
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{
              fontFamily: "Open Sans",
              // color: "ActiveBorder",
              color: "black",
              fontSize: "2em",
            }}
          >
            TSUEnergy
          </Typography>
          <Button
            sx={{
              "&.MuiButton-text": { color: "black" },
            }}
            variant="text"
            href="/signup"
          >
            Signup
          </Button>
          <Button
            sx={{
              "&.MuiButton-text": { color: "black" },
            }}
            variant="text"
            href="/"
          >
            Profile
          </Button>
          <Button
            sx={{
              "&.MuiButton-text": { color: "black" },
            }}
            variant="text"
            href="/calculator"
          >
            Calculator
          </Button>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Button
            sx={{
              "&.MuiButton-text": { color: "black" },
            }}
            href="/signin"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>

    // <nav>
    //   <ul>
    //     <li>
    //       <a href="/">Home</a>
    //     </li>
    //     <li>
    //       <a href="/signup">SignUp</a>
    //     </li>
    //     <li>
    //       <a href="/signin">SignIn</a>
    //     </li>
    //     <li>
    //       <a href="/calculator">Calculator</a>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Header;
