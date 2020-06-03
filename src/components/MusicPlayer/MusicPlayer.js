import React from 'react';

import './MusicPlayer.css';

export default class MusicPlayer extends React.Component {
  render() {
    return (
      <div className="music-player__wrapper">
        <h1>Music Player</h1>
        <div className="music-container">
          <audio src="music/ukulele.mp3"></audio>

          <div className="img-container">
            <img src="images/ukulele.jpg" alt="music-cover"></img>
          </div>

          <div className="music-info">
            <h4>ukulele</h4>
            <div className="progress-container">
              <div className="progress"></div>
            </div>
          </div>

          <div className="navigation">
            <button className="action-btn">
              <i className="fas fa-backward"></i>
            </button>
            <button className="action-btn action-btn-big">
              <i classname="fas fa-play"></i>
            </button>
            <button className="action-btn">
              <i className="fas fa-forward"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}