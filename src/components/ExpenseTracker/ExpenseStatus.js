import React from 'react';

import './ExpenseStatus.css';

const ExpenseStatus = ({ total, income, expense, formatMoney }) => {
  // console.log('income', income);
  // console.log('expense', expense);

  return (
    <>
      <h4>현재 잔액</h4>
      <h1>{formatMoney(total)}</h1>

      <div className="inc-exp-container">
        <div>
          <h4>수입</h4>
          <p className="money plus">{formatMoney(income)}</p>
        </div>
        <div>
          <h4>지출</h4>
          <p className="money minus">{formatMoney(expense)}</p>
        </div>
      </div>
    </>
  )
}

export default ExpenseStatus;