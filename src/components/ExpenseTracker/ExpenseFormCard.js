import React from 'react';

import './ExpenseFormCard.css';


export default class ExpenseFormCard extends React.Component {

  constructor(props) {
    super(props);

    this.text = React.createRef();
    this.amount = React.createRef();
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    if (this.text.current.value === '' || this.amount.current.value === '') {
      alert('항목 또는 금액을 입력해주세요😀');
    } else {
      this.props.onTransactionSubmit(this.text.current.value, +this.amount.current.value);
      this.text.current.value = '';
      this.amount.current.value = '';
    }
  }

  render() {
    return (
      <>
        <h3>수입/지출 추가</h3>
        <form className="form" onSubmit={this.onFormSubmit}>
          <div className="form-control">
            <label htmlFor="text">항목</label>
            <input type="text" ref={this.text} placeholder="항목을 입력해주세요😋" autoComplete="off" />
          </div>
          <div className="form-control">
            <label htmlFor="amount">금액</label>
            <input type="number" ref={this.amount} placeholder="금액을 입력해주세요😘" autoComplete="off" />
          </div>
          <button className="btn">추가</button>
        </form>
      </>
    )
  }
}
