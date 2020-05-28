import React from 'react';

import './ExpenseTracker.css';
import ExpenseList from './ExpenseList';

export default class ExpenseTracker extends React.Component {
  constructor(props) {
    super(props);

    const dummyTransaction = [
      { id: 1, text: '월급', amount: 5000000 },
      { id: 2, text: '통신비', amount: -30000 },
      { id: 3, text: '교통비', amount: -100000 }
    ]

    this.transactions = dummyTransaction;

    this.state = { transactions: [] };
  }

  componentDidMount() {
    this.setState({ transactions: this.transactions });
  }

  formatMoney(money) {
    return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(money);
  }

  render() {
    return (
      <div className="expense-tracker__wrapper">
        <h2>깔끔 가계부<span role="img" aria-labelledby="emoji">💰</span></h2>

        <div className="expense-tracker__container">
          <h4>현재 잔액</h4>
          <h1>₩ 0</h1>

          <div className="inc-exp-container">
            <div>
              <h4>수입</h4>
              <p className="money plus">₩ 0</p>
            </div>
            <div>
              <h4>지출</h4>
              <p className="money minus">₩ 0</p>
            </div>
          </div>

          <h3>수입/지출 내용</h3>
          <ExpenseList transactions={this.state.transactions} formatMoney={this.formatMoney} />

          <h3>수입/지출 추가</h3>
          <form className="form">
            <div className="form-control">
              <label htmlFor="text">항목</label>
              <input type="text" id="text" placeholder="항목을 입력해주세요😋" autoComplete="off" />
            </div>
            <div className="form-control">
              <label htmlFor="amount">금액</label>
              <input type="number" id="amount" placeholder="금액을 입력해주세요😘" autoComplete="off" />
            </div>
            <button className="btn">추가</button>
          </form>
        </div>
      </div>
    )
  }
}