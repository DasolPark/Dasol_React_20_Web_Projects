import React from 'react';

import FoodCard from './FoodCard';

import './FoodsCard.css';

export default class FoodsCard extends React.Component {

  render() {
    const { foods, onFoodClick } = this.props;

    return (
      <div className="foods" onClick={this.onFoodsClick}>
        {foods.length > 0 ?
          foods.map(food =>
            <FoodCard
              onFoodClick={onFoodClick}
              thumb={food.strMealThumb}
              name={food.strMeal}
              id={food.idMeal}
              key={food.idMeal} />) : ''
        }
      </div>
    )
  }
}
