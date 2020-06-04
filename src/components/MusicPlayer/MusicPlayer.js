import React from 'react';

import './MusicPlayer.css';
import CoverImage from './MusicCoverImage';
import MusicInfoCard from './MusicInfoCard';
import MusicNavigation from './MusicNavigation';

const songs = ['hey', 'summer', 'ukulele'];
const songIndex = 2;

export default class MusicPlayer extends React.Component {
  state = { songs: [], songIndex: 0 };

  componentDidMount() {
    this.setState({ songs, songIndex });
  }

  render() {
    return (
      <div className="music-player__wrapper">
        <h1>Music Player</h1>

        <div className="music-container">
          <audio src="music/ukulele.mp3"></audio>

          <CoverImage src={`${process.env.PUBLIC_URL}/songImgs/${this.state.songs[songIndex]}.jpg`} />

          <MusicInfoCard title={this.state.songs[this.state.songIndex]} />

          <MusicNavigation />
        </div>
      </div>
    )
  }
}