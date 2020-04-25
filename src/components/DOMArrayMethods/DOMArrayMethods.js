import React from 'react';

import './DOMArrayMethods.css';

export default class DOMArrayMethods extends React.Component {

  state = { randomUserArr: [], totalWealth: 0 };

  componentDidMount() {
    this.getRandomUser();
    this.getRandomUser();
    this.getRandomUser();
  }

  // General functions
  formatMoney(money) {
    return '$' + money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

  // Event Listeners
  getRandomUser = async () => {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];

    const newUser = {
      name: `${user.name.first} ${user.name.last}`,
      money: Math.floor(Math.random() * 1000000)
    }

    this.setState({ randomUserArr: [...this.state.randomUserArr, newUser], totalWealth: 0 });
  }

  onDoubleBtnClick = () => {
    this.setState({ randomUserArr: this.state.randomUserArr.map(user => { return { ...user, money: user.money * 2 } }), totalWealth: 0 });
  }

  onShowMillionaireBtnClick = () => {
    this.setState({ randomUserArr: this.state.randomUserArr.filter(user => user.money >= 100000), totalWealth: 0 });
  }

  onSortBtnClick = () => {
    this.setState({ randomUserArr: this.state.randomUserArr.sort((a, b) => b.money - a.money), totalWealth: 0 });
  }

  onCalculateWealthBtnClick = () => {
    this.setState({ totalWealth: this.state.randomUserArr.reduce((acc, user) => (acc += user.money), 0) });
  }

  render() {
    const millionaires = this.state.randomUserArr.map((user, idx) => {
      return <div key={idx} className="person"><strong>{user.name}</strong>{this.formatMoney(user.money)}</div>;
    })

    return (
      <div className="dom-array-method__wrapper" >
        <div className="dom-array-method__container">
          <h1>DOM Array Methods</h1>
          <p><u>[forEach, map, filter, sort, reduce]</u></p>

          <div className="dom-array-method__inner-container">
            <aside>
              <button onClick={this.getRandomUser}>Add User <span role="img" aria-labelledby="emoji">👱‍♂️</span></button>
              <button onClick={this.onDoubleBtnClick}>Double Money <span role="img" aria-labelledby="emoji">💰</span></button>
              <button onClick={this.onShowMillionaireBtnClick}>Show Only Millionaires <span role="img" aria-labelledby="emoji">💵</span></button>
              <button onClick={this.onSortBtnClick}>Sort by Richest <span role="img" aria-labelledby="emoji">↓</span></button>
              <button onClick={this.onCalculateWealthBtnClick}>Calculate Entire Wealth <span role="img" aria-labelledby="emoji">🧮</span></button>
            </aside>

            <main>
              <h2><strong>Person</strong> Wealth</h2>
              {millionaires}
              {this.state.totalWealth === 0 ? '' : <h3 className="total"><strong>Total: </strong>{this.formatMoney(this.state.totalWealth)}</h3>}
            </main>
          </div>
        </div>
      </div>
    )
  }
}