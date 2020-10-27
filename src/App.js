import React, {useRef} from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  NewOrder, Orders
} from './pages';
import { Header, NavBar } from './components';

function App() {

  const ModalNewOrder = useRef(0);
  const openModal = () => {
    ModalNewOrder.current.style.left = 0 + 'px';
  }
  const closeModal = () => {
    ModalNewOrder.current.style.left = -10000 + 'px';
  }

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Switch>
          <Route exact path="/" render={() => <Orders openModal={() => openModal()} />}/>
          {/* <Route path='/newOrder' render={() => <NewOrder />} /> */}
        </Switch>
      </div>
      <NavBar openModal={() => openModal()} />
      <div ref={ModalNewOrder} style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }} >
        <NewOrder closeModal={() => closeModal()} />
      </div>
    </div>
  );
}

export default App;