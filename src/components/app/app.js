import React, {Component} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "../header";
import Exchange from "../exchange";
import Converter from "../converter/converter";

export default class App extends Component {


    render() {
        return (
            <div>
                <Router>
                    <Header />

                    <Route path="/" exact component={Exchange} />
                    <Route path="/exchange/" exact component={Exchange} />
                    <Route path="/converter/" exact component={Converter} />

                </Router>
            </div>
        )
    }
}