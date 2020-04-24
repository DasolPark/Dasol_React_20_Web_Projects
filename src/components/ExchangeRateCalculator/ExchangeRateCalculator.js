import React from 'react';

import './ExchangeRateCalculator.css';

import moneyImg from './img/money.png';

export default class ExchangeRateCalculator extends React.Component {

  constructor(props) {
    super(props);

    this.state = { currencyData: null, currencyOne: 'USD', currencyTwo: 'EUR', amountOne: 1, amountTwo: 0, rate: 0 };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI = (targetCountry = 'USD') => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${targetCountry}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ currencyData: data, rate: data.rates[this.state.currencyTwo] });
      }).catch(err => console.log(err));
  }

  onSelectOneChange = (e) => {
    this.setState({ currencyOne: e.target.value, amountOne: 1, amountTwo: 0 });
    this.fetchAPI(e.target.value);
  }

  onSelectTwoChange = (e) => {
    this.setState({ currencyTwo: e.target.value, rate: this.state.currencyData.rates[e.target.value], amountOne: 1, amountTwo: 0 });
  }

  onInputOneChange = (e) => {
    this.setState({ amountOne: +e.target.value, amountTwo: (this.state.rate * (+e.target.value)).toFixed(2) });
  }

  onSwapBtnClick = () => {
    this.setState({ currencyOne: this.state.currencyTwo, currencyTwo: this.state.currencyOne, amountOne: 1, amountTwo: 0 });
    this.fetchAPI(this.state.currencyTwo);
  }

  renderContents() {
    return (
      <div className="exchange-container">
        <img src={moneyImg} alt="money" className="money-img" />
        <h1>환율 계산기</h1>
        <p>기준 통화를 선택하고, 통화량을 입력해 주세요<span role="img" aria-labelledby="emoji">😉</span></p>
        <p className="date"><span role="img" aria-labelledby="emoji">🕛</span> {this.state.currencyData.date}</p>
        <div className="currency-container">
          <div className="currency">
            <select value={this.state.currencyOne} onChange={this.onSelectOneChange}>
              <option value="AED">AED</option>
              <option value="ARS">ARS</option>
              <option value="AUD">AUD</option>
              <option value="BGN">BGN</option>
              <option value="BRL">BRL</option>
              <option value="BSD">BSD</option>
              <option value="CAD">CAD</option>
              <option value="CHF">CHF</option>
              <option value="CLP">CLP</option>
              <option value="CNY">CNY</option>
              <option value="COP">COP</option>
              <option value="CZK">CZK</option>
              <option value="DKK">DKK</option>
              <option value="DOP">DOP</option>
              <option value="EGP">EGP</option>
              <option value="EUR">EUR</option>
              <option value="FJD">FJD</option>
              <option value="GBP">GBP</option>
              <option value="GTQ">GTQ</option>
              <option value="HKD">HKD</option>
              <option value="HRK">HRK</option>
              <option value="HUF">HUF</option>
              <option value="IDR">IDR</option>
              <option value="ILS">ILS</option>
              <option value="INR">INR</option>
              <option value="ISK">ISK</option>
              <option value="JPY">JPY</option>
              <option value="KRW">KRW</option>
              <option value="KZT">KZT</option>
              <option value="MXN">MXN</option>
              <option value="MYR">MYR</option>
              <option value="NOK">NOK</option>
              <option value="NZD">NZD</option>
              <option value="PAB">PAB</option>
              <option value="PEN">PEN</option>
              <option value="PHP">PHP</option>
              <option value="PKR">PKR</option>
              <option value="PLN">PLN</option>
              <option value="PYG">PYG</option>
              <option value="RON">RON</option>
              <option value="RUB">RUB</option>
              <option value="SAR">SAR</option>
              <option value="SEK">SEK</option>
              <option value="SGD">SGD</option>
              <option value="THB">THB</option>
              <option value="TRY">TRY</option>
              <option value="TWD">TWD</option>
              <option value="UAH">UAH</option>
              <option value="USD">USD</option>
              <option value="UYU">UYU</option>
              <option value="VND">VND</option>
              <option value="ZAR">ZAR</option>
            </select>
            <input type="number" placeholder="1" value={this.state.amountOne} onChange={this.onInputOneChange} />
          </div>

          <div className="swap-rate-container">
            <button onClick={this.onSwapBtnClick}>Swap</button>
            <div className="rate">{`1 ${this.state.currencyOne} = ${this.state.rate} ${this.state.currencyTwo}`}</div>
          </div>

          <div className="currency">
            <select value={this.state.currencyTwo} onChange={this.onSelectTwoChange}>
              <option value="AED">AED</option>
              <option value="ARS">ARS</option>
              <option value="AUD">AUD</option>
              <option value="BGN">BGN</option>
              <option value="BRL">BRL</option>
              <option value="BSD">BSD</option>
              <option value="CAD">CAD</option>
              <option value="CHF">CHF</option>
              <option value="CLP">CLP</option>
              <option value="CNY">CNY</option>
              <option value="COP">COP</option>
              <option value="CZK">CZK</option>
              <option value="DKK">DKK</option>
              <option value="DOP">DOP</option>
              <option value="EGP">EGP</option>
              <option value="EUR">EUR</option>
              <option value="FJD">FJD</option>
              <option value="GBP">GBP</option>
              <option value="GTQ">GTQ</option>
              <option value="HKD">HKD</option>
              <option value="HRK">HRK</option>
              <option value="HUF">HUF</option>
              <option value="IDR">IDR</option>
              <option value="ILS">ILS</option>
              <option value="INR">INR</option>
              <option value="ISK">ISK</option>
              <option value="JPY">JPY</option>
              <option value="KRW">KRW</option>
              <option value="KZT">KZT</option>
              <option value="MXN">MXN</option>
              <option value="MYR">MYR</option>
              <option value="NOK">NOK</option>
              <option value="NZD">NZD</option>
              <option value="PAB">PAB</option>
              <option value="PEN">PEN</option>
              <option value="PHP">PHP</option>
              <option value="PKR">PKR</option>
              <option value="PLN">PLN</option>
              <option value="PYG">PYG</option>
              <option value="RON">RON</option>
              <option value="RUB">RUB</option>
              <option value="SAR">SAR</option>
              <option value="SEK">SEK</option>
              <option value="SGD">SGD</option>
              <option value="THB">THB</option>
              <option value="TRY">TRY</option>
              <option value="TWD">TWD</option>
              <option value="UAH">UAH</option>
              <option value="USD">USD</option>
              <option value="UYU">UYU</option>
              <option value="VND">VND</option>
              <option value="ZAR">ZAR</option>
            </select>
            <input type="number" placeholder="0" value={this.state.amountTwo} onChange={e => this.setState({ amountTwo: e.target.value })} />
          </div>
        </div>
      </div>
    )
  }

  render() {
    if (this.state.currencyData === null) {
      return <div className="exchange-wrapper"><h1>Loading...<span role="img" aria-labelledby="emoji">🧐</span></h1></div>;
    } else {
      return <div className="exchange-wrapper">{this.renderContents()}</div>;
    }
  }
}