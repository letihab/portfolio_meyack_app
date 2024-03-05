import React, { useState } from 'react';

function RecipeDetails({ recipe }) {
  const [filters, setFilters] = useState({
    mealType: '',
    cuisine: '',
    diet: '',
    health: '',
    allergies: ''
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  return (
    <div>
      {/* Affichage des détails de la recette */}
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Calories: {recipe.calories}</p>
      {/* Intégration des filtres */}
      <div>
        <label>
          Type de repas/plat:
          <input type="text" name="mealType" value={filters.mealType} onChange={handleFilterChange} />
        </label>
        <label>
          Cuisine:
          <input type="text" name="cuisine" value={filters.cuisine} onChange={handleFilterChange} />
        </label>
        <label>
          Régime alimentaire:
          <input type="text" name="diet" value={filters.diet} onChange={handleFilterChange} />
        </label>
        <label>
          Santé:
          <input type="text" name="health" value={filters.health} onChange={handleFilterChange} />
        </label>
        <label>
          Allergies:
          <input type="text" name="allergies" value={filters.allergies} onChange={handleFilterChange} />
        </label>
      </div>
    </div>
  );
}

export default RecipeDetails;
