import React from 'react';

const SEATTOTAL = 16;

const MovieSeat = () => {
  const seats = [];
  for (let i = 0; i < SEATTOTAL; i++) {
    seats.push(i);
  }
  const result = seats.map(idx =>
    <div className="seat" key={idx} id={idx}></div>
  );
  console.log(result);
  return (
    <div className="row">
      {result}
    </div>
  )
}

export default MovieSeat;