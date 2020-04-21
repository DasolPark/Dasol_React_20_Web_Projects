import React from 'react';


export default class MovieSeat extends React.Component {
  constructor(props) {
    super(props);

    this.state = { seatStatusArr: [] }
  }

  componentDidMount() {
    this.setState({ seatStatusArr: this.props.seatStatus })
  }

  onSeatClick = (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
      e.target.classList.toggle('selected');
    }

    if (e.target.classList.contains('selected') && e.target.classList.contains('seat')) {
      const seatChanged = this.state.seatStatusArr;
      seatChanged[e.target.id[0]][e.target.id[1]] = 2; // selected
      this.setState({ seatStatusArr: seatChanged })
    } else if (e.target.classList.contains('seat') && !e.target.classList.contains('selected') && !e.target.classList.contains('occupied')) {
      const seatChanged = this.state.seatStatusArr;
      seatChanged[e.target.id[0]][e.target.id[1]] = 0; // empty
      this.setState({ seatStatusArr: seatChanged })
    } else {
      const seatChanged = this.state.seatStatusArr;
      seatChanged[e.target.id[0]][e.target.id[1]] = 1; // occupied
      this.setState({ seatStatusArr: seatChanged })
    }

    this.props.onSelectedSeat(this.state.seatStatusArr);
  }

  render() {
    let seats = null;
    if (this.state.seatStatusArr.length > 0) {
      seats = this.state.seatStatusArr.map((row, rowIdx) => {
        const eachRow = row.map((seat, colIdx) => {
          const idxComb = `${rowIdx}${colIdx}`;
          let resultJSX = '';
          if (seat === 0) {
            resultJSX = <div className="seat" onClick={this.onSeatClick} id={idxComb} key={colIdx}></div>;
          } else if (seat === 1) {
            resultJSX = <div className="seat occupied" onClick={this.onSeatClick} id={idxComb} key={colIdx}></div>;
          } else if (seat === 2) {
            resultJSX = <div className="seat selected" onClick={this.onSeatClick} id={idxComb} key={colIdx}></div>;
          }
          return resultJSX;
        })

        return <div className="row" key={rowIdx}>{eachRow}</div>;
      });
    } else {
      seats = (
        <div className="row">
          <div className="seat"></div>
        </div>
      )
    }

    return (
      <div className="seats__seat">
        {seats}
      </div>
    )
  }
}