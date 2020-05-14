import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import ReactLogo from '../images/logo192.png';
import FormValidator from '../images/form-validator.JPG';
import MovieSeatBooking from '../images/movie-seat-booking.JPG';
import CustomVideoPlayer from '../images/custom-video-player.JPG';
import ExchangeRateCalculator from '../images/exchange-rate-calculator.JPG';
import DOMArrayMethods from '../images/dom-array-methods.JPG';
import MenuSliderAndModal from '../images/menu-slider-and-modal.JPG';
import HangmanGame from '../images/hangman-game.JPG';

const Home = () => {
  return (
    <div className="home__wrapper">
      <div className="home__container">
        <header className="showcase bg-primary">
          <img src={ReactLogo} alt="react-logo"></img>
          <h1>20 Web Projects With React.js</h1>
        </header>
        <section className="projects">
          <div>
            <img src={FormValidator} alt="Form Validator"></img>
            <div className="content">
              <h4>Form Validation</h4>
              <p>DOM & Events</p>
              <Link className="btn btn-primary" to={{ pathname: '/form-validator' }} target="_blank">
                Go to project
            </Link>
            </div>
          </div>
          <div>
            <img src={MovieSeatBooking} alt="Movie Seat Booking"></img>
            <div className="content">
              <h4>Movie Seat Booking</h4>
              <p>DOM & CSS & Local Storage</p>
              <Link className="btn btn-primary" to={{ pathname: '/movie-seat-booking' }} target="_blank">
                Go to project
            </Link>
            </div>
          </div>
          <div>
            <img src={CustomVideoPlayer} alt="Custom Video Player"></img>
            <div className="content">
              <h4>Custom Video Player</h4>
              <p>HTML5 Video API</p>
              <Link className="btn btn-primary" to={{ pathname: '/custom-video-player' }} target="_blank">
                Go to project
            </Link>
            </div>
          </div>
          <div>
            <img src={ExchangeRateCalculator} alt="Exchange Rate Calculator"></img>
            <div className="content">
              <h4>Exchange Rate Calculator</h4>
              <p>Fetch & JSON</p>
              <Link className="btn btn-primary" to={{ pathname: '/exchange-rate-calculator' }} target="_blank">
                Go to project
            </Link>
            </div>
          </div>
          <div>
            <img src={DOMArrayMethods} alt="dom-array-methods"></img>
            <div className="content">
              <h4>DOM Array Methods</h4>
              <p>DOM & forEach(), map(), filter(), etc</p>
              <Link className="btn btn-primary" to={{ pathname: '/dom-array-methods' }} target="_blank">
                Go to project
            </Link>
            </div>
          </div>
          <div>
            <img src={MenuSliderAndModal} alt="menu-slider_and_modal"></img>
            <div className="content">
              <h4>Menu Slider And Modal</h4>
              <p>DOM & CSS</p>
              <Link className="btn btn-primary" to={{ pathname: '/menu-slider-modal' }} target="_blank">
                Go to project
            </Link>
            </div>
          </div>
          <div>
            <img src={HangmanGame} alt="Hangman-Game"></img>
            <div className="content">
              <h4>Hangman Game</h4>
              <p>DOM, SVG, Events</p>
              <Link className="btn btn-primary" to={{ pathname: '/hangman-game' }} target="_blank">
                Go to project
            </Link>
            </div>
          </div>
          <div>
            <img src={FormValidator} alt="Form-validator"></img>
            <div className="content">
              <h4>Form Validation</h4>
              <p>Using DOM & Events</p>
              <Link className="btn btn-primary" to={{ pathname: '/form-validator' }}>
                Go to project
            </Link>
            </div>
          </div>
          <div>
            <img src={FormValidator} alt="Form-validator"></img>
            <div className="content">
              <h4>Form Validation</h4>
              <p>Using DOM & Events</p>
              <Link className="btn btn-primary" to={{ pathname: '/form-validator' }}>
                Go to project
            </Link>
            </div>
          </div>
          <div>
            <img src={FormValidator} alt="Form-validator"></img>
            <div className="content">
              <h4>Form Validation</h4>
              <p>Using DOM & Events</p>
              <Link className="btn btn-primary" to={{ pathname: '/form-validator' }}>
                Go to project
            </Link>
            </div>
          </div>
          <div>
            <img src={FormValidator} alt="Form-validator"></img>
            <div className="content">
              <h4>Form Validation</h4>
              <p>Using DOM & Events</p>
              <Link className="btn btn-primary" to={{ pathname: '/form-validator' }}>
                Go to project
            </Link>
            </div>
          </div>
          <div>
            <img src={FormValidator} alt="Form-validator"></img>
            <div className="content">
              <h4>Form Validation</h4>
              <p>Using DOM & Events</p>
              <Link className="btn btn-primary" to={{ pathname: '/form-validator' }}>
                Go to project
            </Link>
            </div>
          </div>
          <div>
            <img src={FormValidator} alt="Form-validator"></img>
            <div className="content">
              <h4>Form Validation</h4>
              <p>Using DOM & Events</p>
              <Link className="btn btn-primary" to={{ pathname: '/form-validator' }}>
                Go to project
            </Link>
            </div>
          </div>
          <div>
            <img src={FormValidator} alt="Form-validator"></img>
            <div className="content">
              <h4>Form Validation</h4>
              <p>Using DOM & Events</p>
              <Link className="btn btn-primary" to={{ pathname: '/form-validator' }}>
                Go to project
            </Link>
            </div>
          </div>
          <div>
            <img src={FormValidator} alt="Form-validator"></img>
            <div className="content">
              <h4>Form Validation</h4>
              <p>Using DOM & Events</p>
              <Link className="btn btn-primary" to={{ pathname: '/form-validator' }}>
                Go to project
            </Link>
            </div>
          </div>
          <div>
            <img src={FormValidator} alt="Form-validator"></img>
            <div className="content">
              <h4>Form Validation</h4>
              <p>Using DOM & Events</p>
              <Link className="btn btn-primary" to={{ pathname: '/form-validator' }}>
                Go to project
            </Link>
            </div>
          </div>
          <div>
            <img src={FormValidator} alt="Form-validator"></img>
            <div className="content">
              <h4>Form Validation</h4>
              <p>Using DOM & Events</p>
              <Link className="btn btn-primary" to={{ pathname: '/form-validator' }}>
                Go to project
            </Link>
            </div>
          </div>
          <div>
            <img src={FormValidator} alt="Form-validator"></img>
            <div className="content">
              <h4>Form Validation</h4>
              <p>Using DOM & Events</p>
              <Link className="btn btn-primary" to={{ pathname: '/form-validator' }}>
                Go to project
            </Link>
            </div>
          </div>
          <div>
            <img src={FormValidator} alt="Form-validator"></img>
            <div className="content">
              <h4>Form Validation</h4>
              <p>Using DOM & Events</p>
              <Link className="btn btn-primary" to={{ pathname: '/form-validator' }}>
                Go to project
            </Link>
            </div>
          </div>
          <div>
            <img src={FormValidator} alt="Form-validator"></img>
            <div className="content">
              <h4>Form Validation</h4>
              <p>Using DOM & Events</p>
              <Link className="btn btn-primary" to={{ pathname: '/form-validator' }}>
                Go to project
            </Link>
            </div>
          </div>
        </section>
        <footer className="main-footer bg-primary">
          <a href="https://github.com/DasolPark/Dasol_React_20_Web_Projects" target="_blank" rel="noopener noreferrer">
            <h2>> Projects Github Repo</h2>
          </a>
        </footer>
      </div>
    </div>
  )
}

export default Home;