import React from 'react';

import './FoodCard.css';

const MealCard = ({ thumb, name, id }) => {
  return (
    <div className="food">
      <img src={thumb} alt={name} />
      <div className="food-info" data-mealid={id}>
        <h3>{name}</h3>
      </div>
    </div>
  )
}

export default MealCard