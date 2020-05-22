import React from 'react';

import './FoodCard.css';

export default class MealCard extends React.Component {

  onFoodClick = (e) => {
    const mealInfo = e.currentTarget.children[1];
    const mealID = mealInfo.getAttribute('data-mealid');

    this.props.onFoodClick(mealID);
  }

  render() {
    const { thumb, name, id } = this.props;

    return (
      <div className="food" onClick={this.onFoodClick}>
        <img src={thumb} alt={name} />
        <div className="food-info" data-mealid={id}>
          <h3>{name}</h3>
        </div>
      </div>
    )
  }
}