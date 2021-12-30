import React, { Component } from "react";
// import logo from "../../../static/images/logo.png";
// import Button from '@material-ui/core/Button'
import Button from "@mui/material/Button";
import { ButtonGroup, Grid, styled } from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";
import logo from "./../../assets/images/Logo.png";
import background from "./../../assets/images/forest.jpeg";
import Header from "./Header";
import { flexbox } from "@mui/system";

const Picture = styled("div")({
  minHeight: "100vh",
  backgroundImage: `url(${background})`,
  //backgroundImage: `url(${process.env.IMG_PATH + 'forest.jpeg'})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

const TextContainer = styled("div")({
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    height : '100vh',
});

const FrontPage = (): JSX.Element => {
  return (
    <div className="FrontPage">
      <Picture>
        <Header></Header>
          <TextContainer>
            <h1>
            Welcome to <br/> <span style={{color:"#5AFFDD"}}> TSUEnergy </span>
            </h1>
          </TextContainer>
      </Picture>
      <header className="Front-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

export default FrontPage;
