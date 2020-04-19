import React from 'react';

import './CustomVideoPlayerProgress.css';
import './CustomVideoPlayer.css';

import videoGone from './videos/gone.mp4';
import gonePoster from './img/gonePoster.png';

export default class CustomVideoPlayer extends React.Component {
  render() {
    return (
      <div className="custom-video-player__wrapper">
        <div className="custom-video-player__container">
          <h1>Custom Video Player</h1>
          <video className="custom-video-player__screen" src={videoGone} poster={gonePoster} />
          <div className="custom-video-player__controls">
            <button className="custom-video-player__play"><i className="fa fa-play fa-2x"></i></button>
            <button className="custom-video-player__stop"><i className="fa fa-stop fa-2x"></i></button>
            <input type="range" className="progress" min="0" max="100" step="0.1" value="0" />
            <span className="custom-video-player__timestamp">00:00:00</span>
          </div>
        </div>
      </div>
    )
  }
}