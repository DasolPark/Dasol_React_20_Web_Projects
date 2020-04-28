import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Home from './routes/Home';
import FormValidator from './components/FormValidator/FormValidator';
import MovieSeatBooking from './components/MovieSeatBooking/MovieSeatBooking';
import CustomVideoPlayer from './components/CustomVideoPlayer/CustomVideoPlayer';
import ExchangeRateCalculator from './components/ExchangeRateCalculator/ExchangeRateCalculator';
import DOMArrayMethods from './components/DOMArrayMethods/DOMArrayMethods';
import MenuSliderAndModal from './components/MenuSliderAndModal';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/form-validator" exact={true} component={FormValidator}></Route>
      <Route path="/movie-seat-booking" exact={true} component={MovieSeatBooking}></Route>
      <Route path="/custom-video-player" exact={true} component={CustomVideoPlayer}></Route>
      <Route path="/exchange-rate-calculator" exact={true} component={ExchangeRateCalculator}></Route>
      <Route path="/dom-array-methods" exact={true} component={DOMArrayMethods}></Route>
      <Route path="/menu-slider-modal" exact={true} component={MenuSliderAndModal}></Route>
    </BrowserRouter>
  );
};

export default App;
