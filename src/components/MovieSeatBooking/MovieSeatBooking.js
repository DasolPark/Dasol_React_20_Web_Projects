import React from 'react';

import './MovieSeatBooking.scss';
import MovieSeat from './MovieSeat';

const defaultSeatStatus = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]];
const marrige = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0]];
const testMovieData = [
  {
    screenId: 0,
    ticketPrice: 12000,
    seatStatus: (JSON.parse(localStorage.getItem(`selectedSeat`)) !== null) ? JSON.parse(localStorage.getItem(`selectedSeat`)) : defaultSeatStatus,
    titleKor: '기생충',
    titleEng: 'Parasite',
  },
  {
    screenId: 1,
    ticketPrice: 10000,
    // seatStatus: JSON.parse(localStorage.getItem(`selectedSeat`)) !== null && JSON.parse(localStorage.getItem(`selectedSeat`)).length > 0 ? JSON.parse(localStorage.getItem(`selectedSeat`)) : defaultSeatStatus,
    seatStatus: marrige,
    titleKor: '결혼 이야기',
    titleEng: 'Marrige Story',
  },
  {
    screenId: 2,
    ticketPrice: 9000,
    seatStatus: JSON.parse(localStorage.getItem(`selectedSeat`)) !== null && JSON.parse(localStorage.getItem(`selectedSeat`)).length > 0 ? JSON.parse(localStorage.getItem(`selectedSeat`)) : defaultSeatStatus,
    titleKor: '1917',
    titleEng: '1917',
  },
  {
    screenId: 3,
    ticketPrice: 7000,
    seatStatus: JSON.parse(localStorage.getItem(`selectedSeat`)) !== null && JSON.parse(localStorage.getItem(`selectedSeat`)).length > 0 ? JSON.parse(localStorage.getItem(`selectedSeat`)) : defaultSeatStatus,
    titleKor: '조커',
    titleEng: 'Joker',
  }
]

export default class MovieSeatBooking extends React.Component {

  constructor(props) {
    super(props);

    this.movie = React.createRef();
    this.count = React.createRef();
    this.total = React.createRef();

    this.state = { movieData: [], selectedSeats: [], selectedMovieIndex: 0, selectedMoviePrice: 0, selectedCount: 0, selectedTotal: 0 }
  }

  componentDidMount() {
    this.setState({ movieData: testMovieData });
  }

  // Event Listeners
  onSelectedSeat = (seats) => {
    this.setState({ selectedSeats: seats })
    localStorage.setItem(`selectedSeat`, JSON.stringify(seats));
  }

  onSelectChange = (e) => {
    console.log(e.target.selectedIndex);
    this.setState({ selectedMovieIndex: e.target.selectedIndex });
  }

  render() {
    const optionsJSX = this.state.movieData.map(movie => {
      return <option value={movie.ticketPrice} key={movie.screenId}>{movie.titleKor}({movie.titleEng}) [₩{movie.ticketPrice}]</option>
    })

    return (
      <div className="movie__container">

        <div className="movie-selection">
          <label><span role="img" aria-labelledby="emoji">🎥</span>영화를 선택해주세요 </label>
          <select ref={this.movie} onChange={this.onSelectChange}>
            {optionsJSX.length > 0 ? optionsJSX : <option value="0">Loading...</option>}
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

          <MovieSeat seatStatus={this.state.movieData[this.state.selectedMovieIndex].length ? this.state.movieData[this.state.selectedMovieIndex] : defaultSeatStatus} onSelectedSeat={this.onSelectedSeat} />
        </div>

        <p className="text">
          고객님은 <span ref={this.count}>0</span>좌석을 선택하셨으며,
          결제는 ₩<span ref={this.total}>0</span> 입니다.
        </p>
      </div>
    )
  }
}
