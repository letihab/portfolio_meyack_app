// Ingredient.js
import React from 'react';
import '../../styles/recipedetails.css';

const Ingredient = ({ ingredients }) => {
  return (
    <div className="ingredients">
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredient;

