import React from 'react';

import './MovieSeatBooking.css';

const defaultSeatStatus = [[0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 1, 0, 0, 0, 0, 0]];
const testMovieData = [
  {
    screenId: 0,
    ticketPrice: 12000,
    seatStatus: JSON.parse(localStorage.getItem(`selectedSeats0`)) === null || JSON.parse(localStorage.getItem(`selectedSeats0`)).length === 0 ? defaultSeatStatus : JSON.parse(localStorage.getItem(`selectedSeats0`)),
    titleKor: '기생충',
    titleEng: 'Parasite',
  },
  {
    screenId: 1,
    ticketPrice: 10000,
    seatStatus: JSON.parse(localStorage.getItem(`selectedSeats1`)) === null || JSON.parse(localStorage.getItem(`selectedSeats1`)).length === 0 ? defaultSeatStatus : JSON.parse(localStorage.getItem(`selectedSeats1`)),
    titleKor: '결혼 이야기',
    titleEng: 'Marrige Story',
  },
  {
    screenId: 2,
    ticketPrice: 9000,
    seatStatus: JSON.parse(localStorage.getItem(`selectedSeats2`)) === null || JSON.parse(localStorage.getItem(`selectedSeats2`)).length === 0 ? defaultSeatStatus : JSON.parse(localStorage.getItem(`selectedSeats2`)),
    titleKor: '1917',
    titleEng: '1917',
  },
  {
    screenId: 3,
    ticketPrice: 7000,
    seatStatus: JSON.parse(localStorage.getItem(`selectedSeats3`)) === null || JSON.parse(localStorage.getItem(`selectedSeats3`)).length === 0 ? defaultSeatStatus : JSON.parse(localStorage.getItem(`selectedSeats3`)),
    titleKor: '조커',
    titleEng: 'Joker',
  }
]

export default class MovieSeatBooking extends React.Component {
  constructor(props) {
    super(props);

    this.state = { movieData: [], selectedMovieIndex: 0, selectedMoviePrice: 12000, selectedSeatCount: 0, totalPrice: 0 };
    // console.log('constructor');
  }

  componentDidMount() {
    this.setState({ movieData: testMovieData });
    // console.log('componentDidMount');
  }

  // General functions
  formatMoney(money) {
    return new Intl.NumberFormat('kr-KR', { style: 'currency', currency: 'KRW' }).format(money);
  }

  // Event Listeners
  onSelectClick = (e) => {
    const getSeats = JSON.parse(localStorage.getItem(`selectedSeats${this.state.selectedMovieIndex}`)) === null ? defaultSeatStatus : JSON.parse(localStorage.getItem(`selectedSeats${this.state.selectedMovieIndex}`));
    let selectedSeatCounter = 0;
    getSeats.map((seat, firstIdx) => {
      const arr = [];
      seat.map((status, secondIdx) => {
        if (status === 0) {
          return arr.push(<div key={`${firstIdx}${secondIdx}`} id={`${firstIdx}${secondIdx}`} className="seat" onClick={this.onSeatClick}></div>)
        } else if (status === 1) {
          return arr.push(<div key={`${firstIdx}${secondIdx}`} className="seat occupied"></div>)
        }
        selectedSeatCounter++;
        return arr.push(<div key={`${firstIdx}${secondIdx}`} id={`${firstIdx}${secondIdx}`} className="seat selected" onClick={this.onSeatClick}></div>)
      })
      return <div key={firstIdx} id={firstIdx} className="row">{[...arr]}</div>
    });


    this.setState({
      selectedMovieIndex: e.target.selectedIndex,
      selectedMoviePrice: e.target.value,
      selectedSeatCount: selectedSeatCounter,
      totalPrice: e.target.value * selectedSeatCounter
    })
  }

  onSeatClick = (e) => {
    e.target.classList.toggle('selected');
    let selectedSeatCounter = 0;

    const getSeats = JSON.parse(localStorage.getItem(`selectedSeats${this.state.selectedMovieIndex}`)) === null ? defaultSeatStatus : JSON.parse(localStorage.getItem(`selectedSeats${this.state.selectedMovieIndex}`));
    localStorage.setItem(`selectedSeats${this.state.selectedMovieIndex}`, JSON.stringify(getSeats.map((row, firstIdx) => {
      return row.map((seat, secondIdx) => {
        if (+e.target.id[0] === firstIdx && +e.target.id[1] === secondIdx && e.target.classList.contains('selected')) {
          selectedSeatCounter++;
          return seat = 2;
        } else if (+e.target.id[0] === firstIdx && +e.target.id[1] === secondIdx && !e.target.classList.contains('selected')) {
          return seat = 0;
        }

        if (seat === 2) {
          selectedSeatCounter++;
        }
        return seat;
      })
    })));
    this.setState({ selectedSeatCount: selectedSeatCounter, totalPrice: this.state.selectedMoviePrice * selectedSeatCounter });
  }

  render() {
    // console.log('render');
    let tempSeatCounter = 0;
    const getSeats = JSON.parse(localStorage.getItem(`selectedSeats${this.state.selectedMovieIndex}`)) === null ? defaultSeatStatus : JSON.parse(localStorage.getItem(`selectedSeats${this.state.selectedMovieIndex}`));
    const optionJSX = this.state.movieData.map(movie => <option key={movie.screenId} value={movie.ticketPrice}>{movie.titleKor}({movie.titleEng}) {this.formatMoney(movie.ticketPrice)}</option>);
    const seatJSX = getSeats.map((seat, firstIdx) => {
      const arr = [];
      seat.map((status, secondIdx) => {
        if (status === 0) {
          return arr.push(<div key={`${firstIdx}${secondIdx}`} id={`${firstIdx}${secondIdx}`} className="seat" onClick={this.onSeatClick}></div>)
        } else if (status === 1) {
          return arr.push(<div key={`${firstIdx}${secondIdx}`} className="seat occupied"></div>)
        }
        tempSeatCounter++;
        return arr.push(<div key={`${firstIdx}${secondIdx}`} id={`${firstIdx}${secondIdx}`} className="seat selected" onClick={this.onSeatClick}></div>)
      })
      return <div key={firstIdx} id={firstIdx} className="row">{[...arr]}</div>
    });

    return (
      <div className="movie__wrapper">
        <div className="movie__container">
          <div className="movie__movie-list">
            <label><span role="img" aria-labelledby="emoji">🎥</span> 영화를 선택해주세요</label>
            <select onChange={this.onSelectClick}>
              {optionJSX}
            </select>
          </div>

          <ul className="movie__seat-list">
            <li>
              <div className="seat"></div>
              <small>빈 좌석</small>
            </li>
            <li>
              <div className="seat selected"></div>
              <small>선택 좌석</small>
            </li>
            <li>
              <div className="seat occupied"></div>
              <small>점유된 좌석</small>
            </li>
          </ul>

          <div className="movie__seats">
            <div className="screen"></div>
            {seatJSX}
          </div>

          <p className="movie__text">
            선택한 좌석은 <span>{this.state.selectedSeatCount === 0 || tempSeatCounter === 0 || tempSeatCounter !== this.state.selectedSeatCount ? tempSeatCounter : this.state.selectedSeatCount}</span>개, 최종 가격은 <span>{this.state.totalPrice === 0 || tempSeatCounter === 0 || tempSeatCounter !== this.state.selectedSeatCount ? this.formatMoney(tempSeatCounter * this.state.selectedMoviePrice) : this.formatMoney(this.state.totalPrice)}</span>입니다
          </p>
        </div>
      </div>
    )
  }
}
