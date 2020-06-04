import React from 'react';

import './MusicCoverImage.css';

const MusicCoverImage = props => {

  return (
    <div className="img-container">
      <img src={props.src} alt="music-cover" />
    </div>
  )
}

export default MusicCoverImage;