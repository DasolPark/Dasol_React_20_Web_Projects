import React from 'react';

import './HangmanGame.css';

export default class HangmanGame extends React.Component {
  render() {
    return (
      <div className="hangman__wrapper">
        <div className="hangman__container">
          <h1>Hangman Game</h1>
          <p>Find the hidden word - Enter a letter</p>
          <div className="game-container">
            <svg height="250" width="200" className="figure-container">
              <line x1="60" y1="20" x2="140" y2="20" />
              <line x1="140" y1="20" x2="140" y2="50" />
              <line x1="60" y1="20" x2="60" y2="230" />
              <line x1="20" y1="230" x2="100" y2="230" />

              <circle cx="140" cy="70" r="20" className="figure-part" />
              <line x1="140" y1="90" x2="140" y2="150" className="figure-part" />

              <line x1="140" y1="120" x2="120" y2="100" className="figure-part" />
              <line x1="140" y1="120" x2="160" y2="100" className="figure-part" />

              <line x1="140" y1="150" x2="120" y2="180" className="figure-part" />
              <line x1="140" y1="150" x2="160" y2="180" className="figure-part" />
            </svg>

            <div className="wrong-letters-container">
              <div className="wrong-letters">
                <p>Wrong</p>
                <span>w,x,y</span>
              </div>
            </div>

            <div className="word">
              <span className="letter">H</span>
              <span className="letter">H</span>
              <span className="letter">H</span>
              <span className="letter">H</span>
            </div>
          </div>

          <div className="popup-container">
            <div className="popup">
              <h2>You Have Won</h2>
              <button>Play Again</button>
            </div>
          </div>

          <div className="notification-container">
            <p>You have already entered this letter</p>
          </div>
        </div>
      </div>
    )
  }
}