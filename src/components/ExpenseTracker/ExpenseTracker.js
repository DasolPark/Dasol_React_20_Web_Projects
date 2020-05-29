import React from 'react';

import ExpenseList from './ExpenseList';

import './ExpenseTracker.css';
import ExpenseStatus from './ExpenseStatus';

const dummyTransaction = [
  { id: 1, text: '월급', amount: 5000000 },
  { id: 2, text: '통신비', amount: -30000 },
  { id: 3, text: '교통비', amount: -100000 }
]

export default class ExpenseTracker extends React.Component {
  constructor(props) {
    super(props);

    this.transactions = dummyTransaction;

    this.state = { transactions: [], total: 0, income: 0, expense: 0 };
  }

  componentDidMount() {
    this.setState({ transactions: this.transactions });
  }

  formatMoney(money) {
    return new Intl.NumberFormat('kr-KR', { style: 'currency', currency: 'KRW' }).format(money);
  }

  updateValues = () => {
    const amounts = this.transactions.length < 0 ? [] :
      this.state.transactions.map(transaction =>
        transaction.amount
      )

    const total = amounts.reduce((acc, amount) => (acc += amount), 0);

    const income = amounts
      .filter(amount => amount > 0)
      .reduce((acc, amount) => (acc += amount), 0);

    const expense = amounts
      .filter(amount => amount < 0)
      .reduce((acc, amount) => (acc += amount), 0) * -1;

    this.setState({ total, income, expense });
  }

  render() {
    const { transactions, total, income, expense } = this.state;

    return (
      <div className="expense-tracker__wrapper">
        <h2>깔끔 가계부<span role="img" aria-labelledby="emoji">💰</span></h2>

        <div className="expense-tracker__container">
          <ExpenseStatus total={total} income={income} expense={expense} formatMoney={this.formatMoney} />

          <ExpenseList transactions={transactions} formatMoney={this.formatMoney} />

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