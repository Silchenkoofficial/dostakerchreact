import React, {useState} from 'react';
import classnames from 'classnames';

import {
    Active,
    Completed,
    Incoming
} from './index';

import './Pages.css';

function Orders({openModal}) {
    const menu = [
        {name: "Активные", to: '/orders/active', component: <Active openModal={openModal} />},
        { name: "Завершенные", to: '/orders/completed', component: <Completed openModal={openModal} />},
        {name: "Входящие", to: '/orders/incoming', component: <Incoming />}
    ];
    const [activeLink, setActiveLink] = useState(0);

    return (
        <div className="orders">
            <ul className="orders__nav">
                {
                    menu.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className={classnames('orders__nav--link', {
                                    active: activeLink === index && 'active'
                                })}
                                onClick={() => setActiveLink(index)}
                            >{item.name}</li>
                        );
                    })
                }
            </ul>
            <div className="container">
                {
                    menu.map((item, index) => {
                        return (
                            activeLink === index && <React.Fragment key={index}>{item.component}</React.Fragment>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Orders
