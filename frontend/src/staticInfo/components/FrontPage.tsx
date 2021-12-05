import React, { Component } from "react";
// import logo from "../../../static/images/logo.png";
import Button from '@material-ui/core/Button'
import { ButtonGroup, styled } from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";
import logo from "./../../assets/images/Logo.png";

import background from "./../../assets/images/forest.jpeg";


const Picture = styled('div')({
  minHeight: '90vh',
  backgroundImage: `url(${background})`,
  //backgroundImage: `url(${process.env.IMG_PATH + 'forest.jpeg'})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
});

const useStyles = makeStyles({
    root : {
        
    }
})

const FrontPage = () : JSX.Element => {
    return(
        <div className="FrontPage">
            <Picture></Picture>
            <header className="Front-header">
                <ButtonGroup></ButtonGroup>
                <Button
                    // startIcon
                    size = "large" 
                    style = {
                        {
                            fontSize: 24
                        }
                    }
                    variant="contained" color="secondary"
                    href = "/">
                    Welcome to TSUEnergy
                </Button>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

export default FrontPage;