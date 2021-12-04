import React, { Component } from "react";
// import logo from "../../../static/images/logo.png";
import Button from '@material-ui/core/Button'
import { ButtonGroup } from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root : {
        
    }
})

const FrontPage = () : JSX.Element => {
    return(
        <div className="FrontPage">
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
                <img src={"../../../static/images/logo.png"} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

export default FrontPage;