import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./Header";
import HomePage from "./HomePage";
// import SignUp from './SignUp'

export default class App extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <>
        {/* <h1>Test website</h1> */}
        <Header />

        <div>
          <HomePage />
        </div>
      </>
    );
  }
}
