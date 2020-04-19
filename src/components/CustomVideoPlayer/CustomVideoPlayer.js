import React from 'react';

import './CustomVideoPlayerProgress.css';
import './CustomVideoPlayer.scss';

import videoGone from './videos/gone.mp4';
import gonePoster from './img/gonePoster.png';

export default class CustomVideoPlayer extends React.Component {

  constructor(props) {
    super(props);

    this.state = { isVideoPlay: false };

    this.video = React.createRef();
    this.play = React.createRef();
    this.progress = React.createRef();
    this.timestamp = React.createRef();
  }

  componentDidUpdate() {
    this.updateBtnIcon();
  }

  // functions
  updateBtnIcon = () => {
    if (this.state.isVideoPlay) {
      this.play.current.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    } else {
      this.play.current.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    }
  }

  // Event Listeners
  onVideoStatusToggle = () => {
    if (this.video.current.paused) {
      this.video.current.play();
      this.setState({ isVideoPlay: true });
    } else {
      this.video.current.pause();
      this.setState({ isVideoPlay: false });
    }
  }

  onVideoTimeUpdate = () => {
    console.log(this.video.current.volume);
    this.progress.current.value = (this.video.current.currentTime / this.video.current.duration) * 100;

    let hours = Math.floor(this.video.current.currentTime / 360);
    if (hours < 10) {
      hours = `0${hours}`;
    }

    let mins = Math.floor(this.video.current.currentTime / 60);
    if (mins < 10) {
      mins = `0${mins}`;
    }

    let secs = Math.floor(this.video.current.currentTime % 60);
    if (secs < 10) {
      secs = `0${secs}`;
    }

    this.timestamp.current.innerText = `${hours}:${mins}:${secs}`;

    if (this.video.current.ended) {
      this.setState({ isVideoPlay: false });
    }
  }

  onStopBtnClick = () => {
    this.video.current.currentTime = 0;
    this.video.current.pause();
    this.setState({ isVideoPlay: false });
  }

  onProgressChange = () => {
    this.video.current.currentTime = (this.progress.current.value * this.video.current.duration) / 100;
  }

  onExpandClick = () => {
    console.dir(this.video.current);
    if (this.video.current.requestFullscreen) {
      this.video.current.requestFullscreen();
    } else if (this.video.current.mozRequestFullScreen) {
      this.video.current.mozRequestFullScreen();
    } else if (this.video.current.webkitRequestFullscreen) {
      this.video.current.webkitRequestFullscreen();
    } else if (this.video.current.msRequestFullscreen) {
      this.video.current.msRequestFullscreen();
    }
  }

  onVolumeChange = (e) => {
    this.video.current.volume = e.target.value;
  }

  render() {
    return (
      <div className="custom-video-player__wrapper">
        <div className="custom-video-player__container">
          <h1>Custom Video Player</h1>
          <video ref={this.video} className="custom-video-player__screen" src={videoGone} poster={gonePoster} onClick={this.onVideoStatusToggle} onTimeUpdate={this.onVideoTimeUpdate} />
          <div className="custom-video-player__controls">
            <input type="range" className="custom-video-player__volume" min="0" max="1" step="0.1" defaultValue="0.5" onChange={this.onVolumeChange} />
            <button ref={this.play} className="custom-video-player__play" onClick={this.onVideoStatusToggle}><i className="fa fa-play fa-2x"></i></button>
            <button className="custom-video-player__stop" onClick={this.onStopBtnClick}><i className="fa fa-stop fa-2x"></i></button>
            <input ref={this.progress} type="range" className="progress" min="0" max="100" step="0.1" defaultValue="0" onChange={this.onProgressChange} />
            <span className="custom-video-player__expand" onClick={this.onExpandClick}><i className="fas fa-expand"></i></span>
            <span ref={this.timestamp} className="custom-video-player__timestamp">00:00:00</span>
          </div>
        </div>
      </div>
    )
  }
}