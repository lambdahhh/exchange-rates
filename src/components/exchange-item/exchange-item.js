import {Component} from "react";
import './exchange-item.css';

export default class ExchangeItem extends Component {



    render() {

        const {course, isFavorite, setFavorites} = this.props;

        let buttonClasses = "far fa-bookmark exchange-button";
        let classes = "exchange-item";

        if (isFavorite) {
            buttonClasses += ' favorite';
            classes += ' item-bold';
        }

        return (
            <div className={classes}>
                <span>{course[0]}</span>
                <span>{course[1]}</span>
                <span><i
                    onClick={() => setFavorites(course)}
                    className={buttonClasses}>
                </i></span>
            </div>
        )
    }
}