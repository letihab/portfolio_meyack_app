import React, { useEffect, useState } from 'react';
import RecipeDetails from '../components/RecipeDetails';
import FilterBar from '../components/FilterBar';
import { useParams } from 'react-router-dom';
import '../styles/recipe.css';

function RecipePage() {
  const { recipeId } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Track loading state for feedback

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(`/api/Recipe/${recipeId}`);
        const data = await response.json();
        setRecipeDetails(data);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      } finally {
        setIsLoading(false); // Update loading state after fetching
      }
    };

    fetchRecipeDetails();
  }, [recipeId]);

  return (
    <div className="recipe-page">
      {isLoading ? (
        <div className="loading-container">
          <p>Loading recipe...</p>
        </div>
      ) : (
        <>
          <h2>{recipeDetails?.name}</h2>

          <div className="recipe-details-container">
            <div className="recipe-image">
              {/* Display recipe image, potentially using a placeholder while loading */}
              {recipeDetails?.imageUrl ? (
                <img src={recipeDetails.imageUrl} alt={recipeDetails.name} />
              ) : (
                <p>Image unavailable</p>
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
          </div>

          <FilterBar />
          <RecipeDetails recipe={recipeDetails} />
        </>
      )}
    </div>
  );
}

export default RecipePage;
