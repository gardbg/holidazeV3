import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import App from './App';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import Establishments from './pages/Establishment';
import HotelSpecific from './pages/HotelSpecific';
import BookingConfirmed from './pages/BookingConfirmed';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/Login" exact component={Admin}></Route>
        <Route path="/establishments" exact component={Establishments}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/hotel-specific/:id" exact component={HotelSpecific}></Route>
        <Route path="/bookingconfirmed" exac component={BookingConfirmed}></Route>
      </Switch>
    </App>
  </Router>

  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
