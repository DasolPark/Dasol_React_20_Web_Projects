import React from 'react';
import './FormValidator.css';

class FormValidator extends React.Component {
  constructor(props) {
    super(props);

    this.form = React.createRef();
    this.username = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
    this.password2 = React.createRef();
  }

  // Show Error
  showError(input, message) {
    const formControl = input.current.parentElement;
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');
    small.innerText = message;
  }

  // Show Success
  showSuccess(input) {
    const formControl = input.current.parentElement;
    formControl.className = 'form-control success';
  }

  // Get Field Name
  getFieldName(input) {
    if (input.current.id === 'username') {
      return `'성과 이름'`;
    } else if (input.current.id === 'email') {
      return `'이메일'`;
    } else if (input.current.id === 'password') {
      return `'비밀번호'`;
    } else if (input.current.id === 'password2') {
      return `'비밀번호 확인'`;
    }
  }

  // Check Required
  checkRequired(inputArr) {
    inputArr.forEach(input => {
      if (input.current.value === '') {
        this.showError(input, `${this.getFieldName(input)}을 작성해주세요 🤣`);
      } else {
        this.showSuccess(input);
      }
    });
  }

  // Check Length
  checkLength(input, min, max) {
    if (input.current.value.length < min) {
      this.showError(
        input,
        `${this.getFieldName(input)}은 최소 ${min}자가 필요합니다.`
      );
    } else if (input.current.value.length > max) {
      this.showError(
        input,
        `${this.getFieldName(input)}은 최대 ${min}자를 사용할 수 있습니다.`
      );
    }
  }

  // Check valid Email
  checkValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email.current.value.trim()).toLowerCase())) {
      this.showSuccess(email);
    } else {
      this.showError(email, '메일 주소를 올바르게 작성해주세요.');
    }
  }

  checkPasswordMatch(password, password2) {
    if (password.current.value !== password2.current.value) {
      this.showError(password2, '위 비밀번호와 다릅니다. 다시 확인해주세요.');
    }
  }

  // Event listeners
  onFormSubmit = e => {
    e.preventDefault();

    this.checkRequired([
      this.username,
      this.email,
      this.password,
      this.password2
    ]);
    this.checkLength(this.username, 2, 10);
    this.checkLength(this.password, 6, 10);
    this.checkValidEmail(this.email);
    this.checkPasswordMatch(this.password, this.password2);
  };

  render() {
    return (
      <div className="container">
        <form
          ref={this.form}
          onSubmit={this.onFormSubmit}
          className="form"
          id="form"
        >
          <h2>회원 가입</h2>
          <div className="form-control">
            <label htmlFor="username">성/이름</label>
            <input
              ref={this.username}
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
              ref={this.email}
              type="text"
              id="email"
              placeholder="이메일"
              autoComplete="off"
            />
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label htmlFor="password">비밀번호(최소 6자)</label>
            <input ref={this.password} type="password" id="password" />
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label htmlFor="password2">비밀번호 확인</label>
            <input ref={this.password2} type="password" id="password2" />
            <small>Error message</small>
          </div>
          <button type="submit">회원 가입 신청</button>
        </form>
      </div>
    );
  }
}

export default FormValidator;
