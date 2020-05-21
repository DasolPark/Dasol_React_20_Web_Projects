import React from 'react';

import FoodCard from './FoodCard';

import './FoodsCard.css';

const FoodsCard = ({ foods }) => {
  console.log(foods);
  return (
    <div className="foods">
      {foods.length > 0 ?
        foods.map(food =>
          <FoodCard
            thumb={food.strMealThumb}
            name={food.strMeal}
            id={food.idMeal}
            key={food.idMeal} />) : ''
      }
    </div>
  )
}

export default FoodsCard