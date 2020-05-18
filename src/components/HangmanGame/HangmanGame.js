import React from 'react';

import './HangmanGame.css';

export default class HangmanGame extends React.Component {
  constructor(props) {
    super(props);

    this.notification = React.createRef();
    this.popup = React.createRef();

    this.words = ['application', 'programming', 'interface', 'wizard'];
    this.selectedWord = this.words[Math.floor(Math.random() * this.words.length)];

    this.state = {
      correctLetters: [],
      wrongLetters: [],
      selectedWord: this.selectedWord,
      pass: false
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onWindowKeyDown);
    this.figureParts = document.querySelectorAll('.figure-part');
  }

  // Show notification
  onNotificationShow = () => {
    this.notification.current.classList.add('show');

    setTimeout(() => {
      this.notification.current.classList.remove('show');
    }, 2000)
  }

  // KeyDown event listener
  onWindowKeyDown = (e) => {
    const letter = e.key;
    const correctLetterArr = this.state.correctLetters;
    const wrongLetterArr = this.state.wrongLetters;

    // + If lost, stopped typing
    if (e.keyCode >= 65 && e.keyCode <= 90 && this.popup.current.style.display === '') {
      if (this.state.selectedWord.includes(letter)) {
        if (!this.state.correctLetters.includes(letter)) {
          correctLetterArr.push(letter);
        } else {
          this.onNotificationShow();
        }
      } else {
        if (!this.state.wrongLetters.includes(letter)) {
          wrongLetterArr.push(letter);
        } else {
          this.onNotificationShow();
        }
      }

      this.setState({ correctLetters: correctLetterArr, wrongLetters: wrongLetterArr })
    }

    // Display parts
    const errors = wrongLetterArr.length;
    this.figureParts.forEach((part, index) => {
      if (index < errors) {
        part.style.display = 'block';
      } else {
        part.style.display = 'none';
      }
    });

    // Check if won
    const innerWord = document.querySelector('.word').innerText.replace(/\n/g, '');
    if (this.state.selectedWord === innerWord) {
      this.setState({ pass: true });
      this.popup.current.style.display = 'flex';
    }

    // Check if lost
    if (this.figureParts.length === wrongLetterArr.length) {
      this.popup.current.style.display = 'flex';
    }

    // Enter & Space Listener in popup
    if ((e.key === 'Enter' || e.keyCode === 32) && this.popup.current.style.display === 'flex') {
      this.onPlayBtnClick();
    }
  }

  // Click play again button
  onPlayBtnClick = () => {
    this.selectedWord = this.words[Math.floor(Math.random() * this.words.length)];

    // Empty arrays & pass true to false & change selectedWord
    this.setState({ correctLetters: [], wrongLetters: [], pass: false, selectedWord: this.selectedWord });

    this.figureParts.forEach(part => part.style.display = 'none');

    this.popup.current.style.display = '';
  }

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
                <span>{this.state.wrongLetters.join(', ')}</span>
              </div>
            </div>

            <div className="word">
              {this.state.selectedWord.split('').map((letter, index) => {
                return <span className="letter" key={index}>
                  {this.state.correctLetters.includes(letter) ? letter : ''}
                </span>;
              })}
            </div>
          </div>

          <div ref={this.popup} className="popup-container">
            <div className="popup">
              <h2>{this.state.pass === true ? 'Congratulations! You won! 😃' : 'Unfortunately you lost. 😭'}</h2>
              <button onClick={this.onPlayBtnClick}>Play Again</button>
            </div>
          </div>

          <div ref={this.notification} className="notification-container">
            <p>You have already entered this letter</p>
          </div>
        </div>
      </div>
    )
  }
}