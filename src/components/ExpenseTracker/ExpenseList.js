import React from 'react';

import './ExpenseList.css';

const ExpenseList = (props) => {
  const { transactions, formatMoney, removeTransaction } = props;

  return (
    <>
      <h3>수입/지출 내용</h3>

      <ul className="list">
        {
          transactions.map(transaction =>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'} key={transaction.id}>
              {transaction.text} <span>{transaction.amount < 0 ? '- ' : '+ '}{formatMoney(Math.abs(transaction.amount))}</span>
              <button className="delete-btn" onClick={() => removeTransaction(transaction.id)}>
                <span role="img" aria-labelledby="emoji">⛔</span>
              </button>
            </li>
          )
        }
      </ul>
    </>
  )
}

export default ExpenseList;