import React, { useEffect, useState } from 'react';
import RecipeDetails from '../components/RecipeDetails';
import FilterBar from '../components/FilterBar';
import { useParams } from 'react-router-dom';

function RecipePage() {
  const { recipeId } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    // Fetch recipe details from API
    fetch(`/api/recipes/${recipeId}`)
      .then(res => res.json())
      .then(data => setRecipeDetails(data))
      .catch(error => console.error('Error fetching recipe details:', error));
  }, [recipeId]);

  return (
    <div className="recipe-page">
      <h2>{recipeDetails?.name || 'Recipe Details'}</h2> {/* Display recipe name or default */}

      {/* Add optional sections based on your needs: */}
      <div className="recipe-image">
        {/* Display recipe image, potentially using a placeholder while loading */}
        {recipeDetails?.imageUrl ? (
          <img src={recipeDetails.imageUrl} alt={recipeDetails.name} />
        ) : (
          <p>Loading image...</p>
        )}
      </div>

      <div className="recipe-info">
        {/* Display additional recipe information like rating, servings, cook time, etc. */}
        <p>
          {recipeDetails?.rating ? (
            <span>Rating: {recipeDetails.rating}/5</span>
          ) : null}
        </p>
        <p>Servings: {recipeDetails?.servings}</p>
        <p>Cook time: {recipeDetails?.cookTime} minutes</p>
      </div>

      <FilterBar />
      {recipeDetails ? (
        <RecipeDetails recipe={recipeDetails} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default RecipePage;
