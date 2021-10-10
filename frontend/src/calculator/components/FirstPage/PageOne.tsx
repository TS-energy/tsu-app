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

const steps = ['1', '2', '3'];

const theme = createTheme();

const PageOne = (): JSX.Element => {
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
       <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <React.Fragment>
      <h1>Flight</h1>
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
          <Grid item xs={6} md={6}>
            <TextField
              required
              id="outlined-required"
              label="Defart from"
              defaultValue=""
              margin="normal"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              required
              id="outlined-required"
              label="Arrive at"
              defaultValue=""
              margin="normal"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">Trip Type</FormLabel>
              <RadioGroup
                aria-label="trip"
                defaultValue="round-trip"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="round-trip"
                  control={<Radio />}
                  label="Round Trip"
                />
                <FormControlLabel
                  value="one-way"
                  control={<Radio />}
                  label="One Way"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={6} md={6}>
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">Trip Class</FormLabel>
              <RadioGroup
                aria-label="trip-class"
                defaultValue="economy"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="economy"
                  control={<Radio />}
                  label="Economy"
                />
                <FormControlLabel
                  value="business"
                  control={<Radio />}
                  label="Business"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={8} md={6}>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              style={{ width: "100%", textAlign: "center" }}
            />
          </Grid>
        </Grid>
        {/* </form> */}
      </Box>
      </React.Fragment>
      <React.Fragment>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </Box>
      </React.Fragment>
      </Paper>
    </Container>
  );
};

export default PageOne;
