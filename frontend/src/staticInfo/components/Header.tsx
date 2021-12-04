import React, { Component } from "react";
import "../../styles/base.css";

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from "@mui/material/InputBase";
import SearchIcon from '@mui/icons-material/Search';

// import "./base.styles/base.css";

const styles = {
  // "&.MuiButton-root": {
  //   border: "2px black solid"
  // },
  "&.MuiButton-text": {
    color: "white"
  },
  "&.MuiButton-contained": {
    color: "yellow"
  },
  "&.MuiButton-outlined": {
    color: "brown"
  }
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = (): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TSUEnergy
          </Typography>
          <Button sx={{
    "&.MuiButton-text": { color: "white" },
    }}
  variant="text" href="/signup">Signup</Button>
          <Button sx={{
    "&.MuiButton-text": { color: "white" },
    }}
            variant="text" href="/">Profile</Button>
          <Button sx={{
    "&.MuiButton-text": { color: "white" },
    }}
            variant="text" href="/calculator">Calculator</Button>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button sx={{
    "&.MuiButton-text": { color: "white" },
    }} href="/signin">Login</Button>
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
