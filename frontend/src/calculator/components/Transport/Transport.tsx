import React, { Component, useState, useEffect, Key } from "react";

import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

import FormPropsTextFields from "../utils/template";
import SignUp from "../../../staticInfo/components/SignUp";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import {
    createTheme,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    makeStyles,
    MenuItem,
    Paper,
    Radio,
    RadioGroup,
    Select,
    SelectChangeEvent,
  } from "@mui/material";
import { ControlCamera } from "@mui/icons-material";
import ITextContainer from "../../../self-components/Container/ITextContainer";

const Transport = ():JSX.Element => {

    let [way,setWay] = useState<string>("");

    let [result,setResult] = useState<number>(0);

    let [distance,setDistance] = useState<number>(0);

    const waysOfTransport = ["1","2"];

    /**/
    const handleChange = (event: SelectChangeEvent) => {
        setWay(event.target.value as string);
    };

    const handleDistance = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDistance(Number(event.target.value));
    }

    /* handle calculation of transport */
    const transportHandler = (unit:number,distance:number) => {
        const res = unit * distance
        console.log(res)
        setResult(res);
    };

    return (
        <Container maxWidth="sm">
            <Paper
            variant="outlined"
            sx={{my:{xs:3,md:6}, p:{xs:2,md:3}}}
            >
                <React.Fragment>
                    <h1>Transport</h1>
                </React.Fragment>

                <Box
                    component="form"
                    autoComplete="off"
                    margin="normal"
                >
                    {/*form*/}
                    <Grid container spacing={3}>
                        <Grid item xs={6} md={6}>
                        <FormControl margin="normal" sx={{ minWidth: 200 }}>
                        <InputLabel id="demo-simple-select-filled-label">Way of Transport</InputLabel>
                        <Select 
                            value={way}
                            label = "Way of Transport"
                            id="select-ways-of-transport"
                            onChange={handleChange}
                        > 
                            {
                        
                                waysOfTransport.map((w,i) => {
                                    // alert(w);
                                    return <MenuItem key={i} value={w}>{w}</MenuItem>
                                })
                            }

                        </Select>
                        </FormControl>
                        </Grid> 
                        
                        <Grid item xs={6} md={6}>
                            <TextField
                                required
                                label="km/day"
                                type="number"
                                defaultValue={0}
                                margin="normal"
                                value={distance}
                                onChange={handleDistance}
                            />

                        </Grid>
                    </Grid>

                </Box>

                <React.Fragment>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }} margin="normal">
            <Grid item xs={6} md={6}>
                <ITextContainer color="red">Result: {result} kg/day</ITextContainer>
            </Grid>
            <Button
                variant="text"
                onClick={() => transportHandler(parseInt(way),distance)}
                sx={{mt:3,ml:1}}
            >Calculate</Button>
            <Button
                variant="contained"
                sx={{mt:3,ml:1}}
            >
                Next
            </Button>
          </Box>
        </React.Fragment>
            </Paper>
        </Container>
    );
};

export default Transport;