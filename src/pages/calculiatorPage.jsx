import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Calculator from "../components/calculiator";
import About from "./aboutCalcPage";

class Page extends Component{
    render() {
        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={Calculator} />
                    <Route path="/about" component={About}/>
                </Switch>
            </Router>
           
        )
    }
};

export default Page;
