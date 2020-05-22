import React from 'react';

import './FoodFinderApp.css';

import SearchBar from './SearchBar';
import FoodsCard from './FoodsCard';
import SingleFoodCard from './SingleFoodCard';

export default class FoodFinderApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      term: '',
      foods: [],
      singleFood: [],
      isResult: false
    };
  }

  onSubmit = (term) => {
    if (term.trim()) {
      this.setState({ term });
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then(res => res.json())
        .then(data => {
          this.setState({ isResult: true });

          if (data.meals === null) {
            this.setState({ foods: [], isResult: false });
          } else {
            this.setState({ foods: data.meals });
          }
        });
    } else {
      alert('Please enter a search term.');
    }
  }

  onFoodClick = mealID => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
      .then(res => res.json())
      .then(data => {
        console.log(data.meals[0]);
        this.setState({ singleFood: data.meals[0] })
      })
  }

  render() {
    return (
      <div className="food-finder__wrapper">
        <div className="food-finder__container">
          <h1>Food Finder</h1>
          <SearchBar onSubmit={this.onSubmit} />
          <div>{this.state.isResult ?
            <h2>Search results for '{this.state.term}':</h2> :
            this.state.term.length > 0 ?
              <p>There are no results. Try again!</p> : ''}
          </div>
          <FoodsCard foods={this.state.foods.length > 0 ? this.state.foods : []} onFoodClick={this.onFoodClick} />
          {this.state.singleFood.length !== 0 ? <SingleFoodCard singleFood={this.state.singleFood} /> : ''}
        </div>
      </div>
    )
  }
}