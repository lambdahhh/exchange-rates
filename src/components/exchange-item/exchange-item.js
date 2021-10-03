import {Component} from "react";
import './exchange-item.css';

export default class ExchangeItem extends Component {



    render() {

        const {course, isFavorite, setFavorites} = this.props;

        let buttonClasses = "far fa-bookmark exchange-button";
        let classes = "exchange-item alert alert-secondary";

        if (isFavorite) {
            buttonClasses += ' favorite';
            classes += ' alert-info';
        }

        return (
            <div className={classes}>
                <span>{course[0].slice(3)}</span>
                <span>{course[1]}</span>
                <span><i
                    onClick={() => setFavorites(course)}
                    className={buttonClasses}>
                </i></span>
            </div>
        )
    }
}