import React from 'react'
import { Route } from 'react-router'

import {
    Active,
    Completed,
    Incoming
} from './index';

function Orders() {
    return (
        <div className="orders">
            <div className="orders__nav"></div>
            <Route path='/orders/active' render={() => <Active />}/>
            <Route path='/orders/completed' render={() => <Completed />}/>
            <Route path='/orders/incoming' render={() => <Incoming />}/>
        </div>
    )
}

export default Orders
