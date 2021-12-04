import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import SignUp from "./SignUp";
import SignInSide from "./SignInSide";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import FrontPage from "./FrontPage";

export default class HomePage extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {" "}
            {/** important to add exact here */}
            <FrontPage />
          </Route>
          <Route path="/signup" component={() => SignUp()}></Route>
          <Route path="/signin" render={() => SignInSide()}></Route>
        </Switch>
      </Router>
    );
  }
}

// const FrontPage = ():JSX.Element => {
//   return (
//     <React.Fragment>
//       <Box
//         component="form"
//         sx={{
//           "& .MuiTextField-root": { m: 1, width: "25ch" },
//           //bgcolor: "rgb(167 170 173)",
//           height: "60vh",
//         }}
//         noValidate
//         autoComplete="off"
//         margin="normal"
//       ></Box>
//     <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage: "url(https://source.unsplash.com/random)",
//             backgroundRepeat: "no-repeat",
//             backgroundColor: (t) =>
//               t.palette.mode === "light"
//                 ? t.palette.grey[50]
//                 : t.palette.grey[900],
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//       </React.Fragment>
//   )
// }
