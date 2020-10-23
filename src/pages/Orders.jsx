import React, {useState} from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router, Link } from "react-router-dom";
import classnames from 'classnames';

import {
    Active,
    Completed,
    Incoming
} from './index';

import './Pages.css';

function Orders() {
    const menu = [
        {name: "Активные", to: '/orders'},
        {name: "Завершенные", to: 'orders/completed'},
        {name: "Входящие", to: 'incoming'}
    ];
    const [activeLink, setActiveLink] = useState(0);

    return (
        <div className="orders">
            <div className="orders__nav">
                {
                    menu.map((item, index) => 
                        <Link
                            className={classnames('orders__nav--link', {
                                active: activeLink === index && 'active'
                            })}
                            onClick={() => setActiveLink(index)}
                            to={item.to}
                        >{item.name}</Link>
                    )
                }
            </div>
            <Router>
                <Route exact path='/orders' component={Active}/>
                <Route exact path='/orders/completed' component={Completed}/>
                <Route exact path='/incoming' component={Incoming}/>
            </Router>
        </div>
    )
}

export default Orders
