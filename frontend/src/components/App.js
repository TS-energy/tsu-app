import React,{Component} from 'react'
import {render} from "react-dom"
import HomePage from './HomePage'
import SignUp from './SignUp'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom"

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <>
            {/* <h1>Test website</h1> */}
            
            <div>
                <HomePage/>
            </div>
            
        </>)
    }
}

const appDiv = document.getElementById("app")
render(<App/>, appDiv);