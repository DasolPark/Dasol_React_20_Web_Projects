import React from 'react';

import './MusicInfoCard.css';

const MusicInfoCard = ({ title }) => {
  return (
    <div className="music-info">
      <h4>{title}</h4>
      <div className="progress-container">
        <div className="progress"></div>
      </div>
    </div>
  )
}

export default MusicInfoCard;