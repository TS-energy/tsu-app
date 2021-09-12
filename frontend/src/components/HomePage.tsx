import React,{Component} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom"
import SignUp from "./SignUp";


export default class HomePage extends Component {
    constructor(props:any) {
        super (props);
    }

    render (){
        return <Router>
            <Switch>
                <Route exact path='/'> {/** important to add exact here */}
                    <p>This is the home page</p>
                </Route>
                <Route path='/signup' component={SignUp}></Route>

            </Switch>
        </Router>
    }
}