import React from 'react';
import './FormValidator.css';

export default class FormValidator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      password2: '',
      isUsernameSuccess: false,
      isEmailSuccess: false,
      isPasswordSuccess: false,
    };
    this.password2 = React.createRef();
  }

  onInputBlurForValid = (e) => {
    if (e.target.id === 'username') {
      this.checkLength(e.target, 3, 8);
    }

    if (e.target.id === 'email') {
      this.checkEmailValid(e.target);
    }

    if (e.target.id === 'password' || e.target.id === 'password2') {
      this.checkLength(e.target, 6, 10);

      if (e.target.id === 'password2' && this.state.password2.length > 0) {
        this.checkPasswordMatch();
      }
    }
  };

  showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    const small = formControl.lastChild;
    small.innerText = message;
  };

  showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  };

  getFieldName = (input) => {
    return input.previousElementSibling.innerText;
  };

  checkLength = (input, min, max) => {
    if (input.value.length < min) {
      if (input.id === 'password' || input.id === 'password2') {
        this.showError(
          input,
          `${this.getFieldName(input).slice(
            0,
            4
          )}는 최소 ${min}자가 필요합니다 🤣`
        );
      } else {
        this.showError(
          input,
          `${this.getFieldName(input)}은 최소 ${min}자가 필요합니다 🤣`
        );
      }
      this.setState({ isUsernameSuccess: false });
    } else if (input.value.length > max) {
      if (input.id === 'password' || input.id === 'password2') {
        this.showError(
          input,
          `${this.getFieldName(input).slice(
            0,
            4
          )}는 ${max}자를 초과할 수 없습니다 🤣`
        );
      } else {
        this.showError(
          input,
          `${this.getFieldName(input)}은 ${max}자를 초과할 수 없습니다 🤣`
        );
      }
      this.setState({ isUsernameSuccess: false });
    } else {
      this.showSuccess(input);
      this.setState({ isUsernameSuccess: true });
    }
  };

  checkEmailValid = (input) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(input.value.trim()).toLowerCase())) {
      this.showSuccess(input);
      this.setState({ isEmailSuccess: true });
    } else {
      this.showError(input, `이메일 주소를 올바르게 작성해주세요 🤣`);
      this.setState({ isEmailSuccess: false });
    }
  };

  checkPasswordMatch = () => {
    if (this.state.password !== this.state.password2) {
      this.showError(
        this.password2.current,
        '위 비밀번호와 다릅니다. 다시 확인해주세요 🤣'
      );
      this.setState({ isPasswordSuccess: false });
    } else {
      this.showSuccess(this.password2.current);
      this.setState({ isPasswordSuccess: true });
    }
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    const { isUsernameSuccess, isEmailSuccess, isPasswordSuccess } = this.state;
    if (isUsernameSuccess && isEmailSuccess && isPasswordSuccess) {
      console.log('All Input Valid Success');
    } else {
      console.log('Input Valid Failed');
    }
  };

  render() {
    return (
      <div className="form-validator__wrapper">
        <div className="form-validator__container">
          <form className="form" id="form" onSubmit={this.onFormSubmit}>
            <h2>회원 가입</h2>
            <div className="form-control">
              <label htmlFor="username">성/이름</label>
              <input
                type="text"
                id="username"
                value={this.state.username}
                onChange={(e) =>
                  this.setState({ username: e.target.value.toLowerCase() })
                }
                onBlur={this.onInputBlurForValid}
                placeholder="홍길동"
                autoComplete="off"
              />
              <small>Error Message</small>
            </div>
            <div className="form-control">
              <label htmlFor="email">이메일</label>
              <input
                type="text"
                id="email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
                onBlur={this.onInputBlurForValid}
                placeholder="이메일"
                autoComplete="off"
              />
              <small>Error Message</small>
            </div>
            <div className="form-control">
              <label htmlFor="username">비밀번호(최소 6자)</label>
              <input
                type="password"
                id="password"
                onChange={(e) => this.setState({ password: e.target.value })}
                onBlur={this.onInputBlurForValid}
                placeholder="비밀번호"
              />
              <small>Error Message</small>
            </div>
            <div className="form-control">
              <label htmlFor="username">비밀번호 확인</label>
              <input
                ref={this.password2}
                type="password"
                id="password2"
                onChange={(e) => this.setState({ password2: e.target.value })}
                onBlur={this.onInputBlurForValid}
                placeholder="비밀번호 확인"
              />
              <small>Error Message</small>
            </div>
            <button type="submit">회원 가입 신청</button>
          </form>
        </div>

      </div>
    );
  }
}
