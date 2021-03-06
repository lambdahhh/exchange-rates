import React, {Component} from 'react';
import './exchange.css';
import withService from "../with-service/with-service";
import ExchangeItem from "../exchange-item";

class Exchange extends Component {

    state = {
        rates: null,
        count: 0
    }

    componentDidMount() {
        this.update();
    }

    update() {
        this.props.getData()
            .then((data) => {
                this.setState({
                    rates: data.quotes
                })
            })
    }

    setFavorites = (course) => {
        if (localStorage.getItem(course[0])) {
            localStorage.removeItem(course[0]);
        } else {
            localStorage.setItem(course[0], course[1]);
        }
        const count = this.state.count + 1;
        this.setState({
            count: count
        })
    }

    isFavorites(rates) {
        const favorites = [];
        const items = [];
        const locals = Object.keys(localStorage);

        for (let rate of rates) {
            if (locals.includes(rate[0])) {
                favorites.push(rate);
            } else {
                items.push(rate);
            }
        }

        return {
            'favorites': favorites,
            'items': items
        };
    }

    render() {

        if (!this.state.rates) {
            return <h3>...</h3>
        }

        const rates = Object.entries(this.state.rates);

        const {favorites, items} = this.isFavorites(rates);

        const favs = favorites.map((item) => {
            return <li key={item[0]}><ExchangeItem setFavorites={this.setFavorites} isFavorite={true} course={item} /></li>;
        })

        const rats = items.map((item) => {
            return <li key={item[0]}><ExchangeItem setFavorites={this.setFavorites} isFavorite={false} course={item} /></li>;
        })

        return (
            <div className="exchange">
                <h1>Курсы валют</h1>
                <ul>
                    {favs}
                </ul>
                <ul>
                    {rats}
                </ul>
            </div>
        );
    }
};

const methodProps = (exchangeService) => {
    return {
        getData: exchangeService.getAllRates
    }
}

export default withService(Exchange, methodProps);