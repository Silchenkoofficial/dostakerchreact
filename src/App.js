import React from 'react';
import { Route } from 'react-router';

import {
  Orders
} from './pages';

import { Header, NavBar } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path='/orders/active' render={() => <Orders />} />
      <NavBar />
    </div>
  );
}

export default App;
