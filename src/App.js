import React from 'react';
import {Switch,Route} from 'react-router-dom';

import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';

import Details from './component/Details';
import Cart from './component/cart/Cart';
import Default  from './component/Default';
import Modal  from './component/Modal';

function App() {
  return (
  <>
  <Navbar />
  <Switch >
  <Route exact path="/" component={ProductList} ></Route>
    <Route path="/details" component={Details} ></Route>
    <Route path="/cart" component={Cart} ></Route>
    <Route  component={Default} ></Route>
  </Switch>
  <Modal />
 
  
  </>
  );
}

export default App;
