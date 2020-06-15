import React from 'react';

import './MusicPlayer.css';
import CoverImage from './MusicCoverImage';
import MusicInfoCard from './MusicInfoCard';
import MusicNavigation from './MusicNavigation';

const dummySongs = ['hey', 'summer', 'ukulele'];

export default class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.musicContainer = React.createRef();
    this.audio = React.createRef();

    this.state = { songs: [], songIndex: 0 };
  }

  componentDidMount() {
    this.setState({ songs: dummySongs, isPlaying: false });
  }

  render() {
    console.log(this.state.songIndex);
    return (
      <div className="music-player__wrapper">
        <h1>Music Player</h1>

        <div ref={this.musicContainer} className="music-container">
          <audio ref={this.audio} src={`${process.env.PUBLIC_URL}/songs/${this.state.songs[this.state.songIndex]}.mp3`}></audio>

          <CoverImage src={`${process.env.PUBLIC_URL}/songImgs/${this.state.songs[this.state.songIndex]}.jpg`} />

          <MusicInfoCard title={this.state.songs[this.state.songIndex]} />

          <MusicNavigation isPlaying={this.state.isPlaying} onClickPlay={this.onClickPlay} onClickPrev={this.onClickPrev} onClickNext={this.onClickNext} />
        </div>
      </div>
    )
  }
}