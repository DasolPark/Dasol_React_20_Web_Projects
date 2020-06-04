import React from 'react';

import './MusicNavigation.css';

const MusicNavigation = () => {
  return (
    <div className="navigation">
      <button className="action-btn">
        <i className="fas fa-backward"></i>
      </button>
      <button className="action-btn action-btn-big">
        <i className="fas fa-play"></i>
      </button>
      <button className="action-btn">
        <i className="fas fa-forward"></i>
      </button>
    </div>
  )
}

export default MusicNavigation;