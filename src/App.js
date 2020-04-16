import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './routes/Home';
import FormValidator from './components/FormValidator';
import MovieSeatBooking from './components/MovieSeatBooking';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/form-validator" exact={true} component={FormValidator}></Route>
      <Route path="/movie-seat-booking" exact={true} component={MovieSeatBooking}></Route>
    </BrowserRouter>
  );
};

export default App;
