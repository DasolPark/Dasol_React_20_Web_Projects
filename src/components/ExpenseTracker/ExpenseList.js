import React from 'react';

const ExpenseList = (props) => {
  const { transactions, formatMoney } = props;

  return (
    <ul className="list">
      {
        transactions.map(transaction =>
          <li className={transaction.amount < 0 ? 'minus' : 'plus'} key={transaction.id}>
            {transaction.text} <span>{transaction.amount < 0 ? '- ' : '+ '}{formatMoney(Math.abs(transaction.amount))}</span>
            <button className="delete-btn"><span role="img" aria-labelledby="emoji">⛔</span></button>
          </li>
        )
      }
    </ul>
  )
}

export default ExpenseList