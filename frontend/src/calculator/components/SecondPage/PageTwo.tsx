import React, { Component, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

import FormPropsTextFields from "../utils/template";
import SignUp from "../../../staticInfo/components/SignUp";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import {
  Autocomplete,
  createTheme,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";

// const useStyle = makeStyles((theme: any)=>({
//   root:{
//     '& .MuiForControl-root':{
//       width:'50%',
//       margin:theme.spacing(1)
//     }
//   }
// }))

// function getStepContent(step: number) {
//   switch (step) {
//     case 0:
//       return <AddressForm />;
//     case 1:
//       return <PaymentForm />;
//     case 2:
//       return <Review />;
//     default:
//       throw new Error('Unknown step');
//   }
// }

const steps = ["1", "2", "3"];

const options = [
  "Residential",
  "Office building",
  "Public building",
  "School",
  "Factory",
  "Others",
];

const theme = createTheme();

const PageTwo = (): JSX.Element => {
  // const classes=useStyle();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container maxWidth="sm">
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <React.Fragment>
          <h1>Buildings</h1>
        </React.Fragment>
        <React.Fragment>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
              //bgcolor: "rgb(167 170 173)",
              height: "60vh",
            }}
            noValidate
            autoComplete="off"
            margin="normal"
          >
            {/* <form> */}
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormLabel component="legend">Building Type</FormLabel>
                <Autocomplete
                  disablePortal
                  id="building-type"
                  options={options}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Select the building type" />
                  )}
                />
              </Grid>

              <Grid item xs={12}>

                <FormLabel component="legend">Address</FormLabel>
                <TextField
                  required
                  id="address-required"
                  label="Your address."
                  defaultValue=""
                />
              </Grid>
                      

              <Grid item xs={12}>
                <FormControl component="fieldset" margin="normal">
                  <FormLabel component="legend">Number of employees</FormLabel>
                  <RadioGroup
                    aria-label="trip"
                    defaultValue="round-trip"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Less than or equal to 150"
                      control={<Radio />}
                      label="Less than or equal to 150"
                    />
                    <FormControlLabel
                      value="Over 150"
                      control={<Radio />}
                      label="Over 150"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={6} md={6}></Grid>
            </Grid>
            {/* </form> */}
          </Box>
        </React.Fragment>
        <React.Fragment>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {activeStep !== 0 && (
              <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                Back
              </Button>
            )}
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 3, ml: 1 }}
            >
              {activeStep === steps.length - 1 ? "Place order" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      </Paper>
    </Container>
  );
};

export default PageTwo;
