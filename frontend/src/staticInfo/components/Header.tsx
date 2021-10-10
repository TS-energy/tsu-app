import React,{Component} from "react";
import "../../styles/base.css";
// import "./base.styles/base.css";

const Header = ():JSX.Element => {
    return (
        <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/signup">SignUp</a></li>
          <li><a href="/signin">SignIn</a></li>
          <li><a href="/calculator">Calculator</a></li>
        </ul>
      </nav>

    )
}

export default Header;