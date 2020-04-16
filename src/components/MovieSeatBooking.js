import React from 'react';

import './MovieSeatBooking.css';

export default class MovieSeatBooking extends React.Component {
  render() {
    return (
      <div className="movie__container">

        <div className="movie-selection">
          <label><span role="img" aria-labelledby="emoji">🎥</span>영화를 선택해주세요 </label>
          <select id="movie">
            <option value="12">기생충(12000₩)</option>
            <option value="10">결혼 이야기(10000₩)</option>
            <option value="12">1917(9000₩)</option>
            <option value="12">조커(7000₩)</option>
          </select>
        </div>

        <ul className="seat-list">
          <li>
            <div className="seat"></div>
            <small>빈 좌석</small>
          </li>
          <li>
            <div className="seat selected"></div>
            <small>선택</small>
          </li>
          <li>
            <div className="seat occupied"></div>
            <small>예매완료</small>
          </li>
        </ul>

        <div className="seats">
          <div className="screen"></div>

          <div className="row">
            <div className="seat occupied"></div>
            <div className="seat occupied"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat occupied"></div>
            <div className="seat occupied"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat occupied"></div>
          </div>
          <div className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat occupied"></div>
            <div className="seat occupied"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div className="row">
            <div className="seat occupied"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat occupied"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
        </div>

        <p className="text">
          고객님이 선택한 좌석은 <span id="count">0</span>개 이며,
          총 가격은 <span id="total">0</span>₩ 입니다.
        </p>
      </div>
    )
  }
}