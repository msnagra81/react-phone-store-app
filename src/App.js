import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import Cart from './components/Cart/Cart';
import Modal from './components/Modal';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route exact path="/details" component={Details}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        <Route exact component={Default}></Route>
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
