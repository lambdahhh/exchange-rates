import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <Link to="/">Exchange Rates</Link>
            </h3>
            <ul className="d-flex">
                <li>
                    <Link to="/exchange/">Курсы валют</Link>
                </li>
                <li>
                    <Link to="/converter/">Конвертер</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;