import React,{Component} from 'react'
import {render} from "react-dom"
import FormPropsTextFields from './utils/template';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageOne from './FirstPage/PageOne';

export default class App extends Component {
    constructor(props:any) {
        super(props)
    }

    render() {
        return(
          <Router>
          {"Calculators"} 
          <Switch>
              <Route exact path ='/calculator/' >
                <p>Nothing important in this page !</p>
                <p>Please go to template page !</p>
              </Route>
              <Route exact path='/calculator/template' component={()=>FormPropsTextFields()}></Route>
              <Route path='/calculator/pageone' component={()=>PageOne()}>
              </Route>
          </Switch>
        </Router>
        )
        
    }
}

