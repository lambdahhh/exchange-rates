import React, {Component} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "../header";
import Exchange from "../exchange";
import Converter from "../converter/converter";
import {ExchangeServiceProvider} from "../exchange-service-context";
import ExchangeService from "../../services/exchange-service";

export default class App extends Component {

    state = {
        service: new ExchangeService()
    }

    render() {

        return (
            <div>
                <Router>
                    <ExchangeServiceProvider value={this.state.service}>
                        <Header />
                        <Route path="/" exact component={Exchange} />
                        <Route path="/exchange/" exact component={Exchange} />
                        <Route path="/converter/" exact component={Converter} />
                    </ExchangeServiceProvider>
                </Router>
            </div>
        )
    }
}