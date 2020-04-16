import React from 'react';

import './MovieSeatBooking.css';

export default class MovieSeatBooking extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ticketPrice: 12000 }

    this.seats = React.createRef();
    this.count = React.createRef();
    this.total = React.createRef();
  }

  componentDidMount() {
    this.populateUI();
  }

  componentDidUpdate() {
    this.updateSelectedCount();
  }

  // Populate UI
  populateUI() {
    const selectedIndex = JSON.parse(localStorage.getItem(`selectedIndex_r`));
    console.log(selectedIndex);
    console.log(this.seats.current.childNodes);

    if (selectedIndex !== null && selectedIndex.length > 0) {
      [...this.seats.current.childNodes].forEach(el => {
        if (el.classList.value === 'row') {
          [...el.childNodes].forEach((seat, index) => {
            if (selectedIndex[index] && selectedIndex[index].indexOf[index] > -1) {
              seat.classList.add('selected');
            }
          })
        }
      })
    }
  }

  // Update selected count
  updateSelectedCount() {
    const selectedIndex = [];
    const selectedSeats = [...this.seats.current.childNodes].map(item => {
      const arr = [];
      if (item.classList.value === 'row') {
        [...item.childNodes].map(item => {
          if (item.classList.contains('seat') && item.classList.contains('selected')) {
            arr.push(item);
          }
          return arr;
        });

        selectedIndex.push(arr.map(seat => [...item.childNodes].indexOf(seat)));
      }
      return arr;
    })

    localStorage.setItem(`selectedIndex_r`, JSON.stringify(selectedIndex));

    const selectedSeatsTotal = selectedSeats.reduce((acc, val) => acc + val.length, 0)

    this.count.current.innerText = selectedSeatsTotal;
    this.total.current.innerText = selectedSeatsTotal * this.state.ticketPrice;
  }

  // Change option event
  onChangeSelect = (e) => {
    this.setState({ ticketPrice: +e.target.value });
  }

  // Click seat event
  onSeatClick = (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
      e.target.classList.toggle('selected');
      this.updateSelectedCount();
    }
  }

  render() {
    return (
      <div className="movie__container">

        <div className="movie-selection">
          <label><span role="img" aria-labelledby="emoji">🎥</span>영화를 선택해주세요 </label>
          <select value={this.state.ticketPrice} onChange={this.onChangeSelect} >
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

        <div ref={this.seats} className="seats" onClick={this.onSeatClick}>
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
          고객님이 선택한 좌석은 <span ref={this.count}>0</span>개 이며,
          총 가격은 ₩<span ref={this.total}>0</span> 입니다.
        </p>
      </div>
    )
  }
}