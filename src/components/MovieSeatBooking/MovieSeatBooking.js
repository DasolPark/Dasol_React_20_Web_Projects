import React from 'react';

import './MovieSeatBooking.css';
import MovieSeat from './MovieSeat';

export default class MovieSeatBooking extends React.Component {
  // See you later

  // const testObj = {
  //   screenId: 0,
  //   price: 12000,
  //   totalSeat: 48,
  //   emptySeat: 36,
  //   occupiedSeat: 12
  //   titleKor: '기생충',
  //   titleEng: 'Parasite',
  // }
  // state = { countSeat: 0, totalPrice: 0 }

  render() {
    return (
      <div className="movie__container">

        <div className="movie-selection">
          <label><span role="img" aria-labelledby="emoji">🎥</span>영화를 선택해주세요 </label>
          <select>
            <option value="12000">기생충(Parasite) [₩12000]</option>
            <option value="10000">결혼 이야기(Marrige Story) [₩10000]</option>
            <option value="9000">1917 [₩9000]</option>
            <option value="7000">조커(Joker) [₩7000]</option>
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

          {/* seat component */}
          <MovieSeat />

        </div>

        <p className="text">
          고객님이 선택한 좌석은 <span>0</span>개 이며,
          총 가격은 ₩<span>0</span> 입니다.
        </p>
      </div>
    )
  }
}
