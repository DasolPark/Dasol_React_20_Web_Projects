import React from 'react';

import './SingleFoodCard.css';

export default class SingleFoodCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ingredients: [] };
  }

  componentDidMount() {
    this.getIngredients();
  }

  getIngredients = () => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      if (this.props.singleFood[`strIngredient${i}`]) {
        ingredients.push(
          `${this.props.singleFood[`strIngredient${i}`]} - ${this.props.singleFood[`strMeasure${i}`]}`
        )
      } else {
        break;
      }
    }

    this.setState({ ingredients });
  }

  render() {
    const { strMealThumb, strMeal, strCategory, strArea, strInstructions } = this.props.singleFood;

    return (
      <div className="single-food">
        <h1>{strMeal}</h1>
        <img src={strMealThumb} alt={strMeal}></img>
        <div className="single-food-info">
          {strCategory ? <p>{strCategory}</p> : ''}
          {strArea ? <p>{strArea}</p> : ''}
        </div>
        <div className="main">
          <p>{strInstructions}</p>
          <h2>Ingredients</h2>
          <ul>
            {this.state.ingredients.map((ing, index) => <li key={index}>{ing}</li>)}
          </ul>
        </div>
      </div>
    )
  }
} 