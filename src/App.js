import React from 'react';
import { Route } from 'react-router';

import {
  Orders, NewOrder
} from './pages';

import { Header, NavBar } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/orders' render={() => <Orders />} />
      <Route exact path='/newOrder' render={() => <NewOrder />} />
      <NavBar />
    </div>
  );
}

export default App;