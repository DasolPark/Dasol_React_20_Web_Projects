import React from 'react';

import ExpenseList from './ExpenseList';

import './ExpenseTracker.css';
import ExpenseStatus from './ExpenseStatus';
import ExpenseFormCard from './ExpenseFormCard';

export default class ExpenseTracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = { transactions: [], total: 0, income: 0, expense: 0 };
  }

  componentDidMount() {
    const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));

    let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

    this.setState({ transactions });
    this.updateValues(transactions);
  }

  formatMoney(money) {
    return new Intl.NumberFormat('kr-KR', { style: 'currency', currency: 'KRW' }).format(money);
  }

  updateValues = (transactions) => {
    const amounts = transactions.length === 0 ? [] :
      transactions.map(transaction =>
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

  generateID = () => {
    return Math.floor(Math.random() * 10000000);
  }

  onTransactionSubmit = (text, amount) => {
    const transactions = this.state.transactions;

    const transaction = {
      id: this.generateID(),
      text, amount
    }

    transactions.push(transaction);

    localStorage.setItem('transactions', JSON.stringify(transactions));

    this.setState({ transactions });
    this.updateValues(transactions);
  }

  removeTransaction = (id) => {
    let transactions = this.state.transactions;

    transactions = transactions.filter(transaction => transaction.id !== id);

    this.setState({ transactions });
    this.updateValues(transactions);
  }

  render() {
    const { transactions, total, income, expense } = this.state;

    return (
      <div className="expense-tracker__wrapper">
        <h2>깔끔 가계부<span role="img" aria-labelledby="emoji">💰</span></h2>

        <div className="expense-tracker__container">
          <ExpenseStatus total={total} income={income} expense={expense} formatMoney={this.formatMoney} />

          <ExpenseList transactions={transactions} formatMoney={this.formatMoney} removeTransaction={this.removeTransaction} />

          <ExpenseFormCard onTransactionSubmit={this.onTransactionSubmit} />
        </div>
      </div>
    )
  }
}