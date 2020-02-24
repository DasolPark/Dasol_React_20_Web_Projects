import React from 'react';
import './FormValidator.css';

class FormValidator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <form className="form" id="form">
          <h2>회원 가입</h2>
          <div className="form-control">
            <label htmlFor="username">성/이름</label>
            <input
              type="text"
              id="username"
              placeholder="홍길동"
              autoComplete="off"
            />
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label htmlFor="email">이메일</label>
            <input
              type="text"
              id="email"
              placeholder="이메일"
              autoComplete="off"
            />
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label htmlFor="password">비밀번호(최소 6자)</label>
            <input type="password" id="password" />
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label htmlFor="password2">비밀번호 확인</label>
            <input type="password" id="password2" />
            <small>Error message</small>
          </div>
          <button type="submit">회원 가입 신청</button>
        </form>
      </div>
    );
  }
}

export default FormValidator;
