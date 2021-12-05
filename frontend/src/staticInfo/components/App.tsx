import { Theme,createStyles } from "@mui/material";
import { makeStyles, styled, alpha } from '@mui/material/styles';import { minHeight, style } from "@mui/system";
import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./Header";
import HomePage from "./HomePage";
// import SignUp from './SignUp'

const Picture = styled('div')(({ theme }) => ({
  root: {
    minHeight: '100vh',
    //backgroundImage: "url",
    // backgroundImage: `url(${process.env.PUBLIC_URL + '/images/forest.jpeg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
}));


export default class App extends Component {
  constructor(props: any) {
    super(props);
  }


  render() {
    console.log("flag");
    console.log(process.env.API_URL);
    // //console.log(`url(${process.env.PUBLIC_URL + '/images/forest.jpeg'})`);
    // if (process.env.API_URL) {
    //   console.log('Welcome to development');
    // }
    // if (process.env.DEBUG) {
    //   console.log('Debugging output');
    // }
    return (
      <div>
        <Picture>TEST</Picture>
        {/* <h1>Test website</h1> */}
        <Header />

        <div>
          <HomePage />
        </div>
      </div>
    );
  }
}
