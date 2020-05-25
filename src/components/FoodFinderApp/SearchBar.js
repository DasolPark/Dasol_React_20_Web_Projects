import React from 'react';

import './SearchBar.css';

export default class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div className="flex">
        <form className="flex" onSubmit={this.onFormSubmit}>
          <input
            type="search"
            placeholder="Search for meals or keywords"
            onChange={(e) => this.setState({ term: e.target.value })}
            value={this.state.term}
          />
          <button type="submit" className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </form>
        <button className="random-btn" onClick={this.props.onRandomSubmit}>
          <i className="fas fa-random"></i>
        </button>
      </div>
    )
  }
}
