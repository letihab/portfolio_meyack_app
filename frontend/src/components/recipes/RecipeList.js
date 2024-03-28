import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/recipe.css';
import FilterOptions from '../filterOptions';
import RecipeLabel from './RecipeLabel';
import Ingredient from './Ingredient';
import Instruction from './Instruction';
import RecipeImage from './RecipeImage';
import SourceUrl from './SourceUrl';
import TotalTime from './TotalTime';
import Servings from './Servings';
import Calories from './Calories';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [filters, setFilters] = useState({
    vegan: false,
    glutenFree: false,
    highProtein: false,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/recipes');
        setRecipes(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des recettes depuis le backend :', error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  useEffect(() => {
    const filterRecipes = () => {
      let filtered = recipes;

      if (filters.vegan || filters.glutenFree || filters.highProtein) {
        filtered = recipes.filter((recipe) => {
          const meetsFilters =
            (filters.vegan && recipe.types.includes('vegan')) ||
            (filters.glutenFree && recipe.types.includes('glutenFree')) ||
            (filters.highProtein && recipe.types.includes('highprotein'));

          return meetsFilters;
        });
      }

      setFilteredRecipes(filtered);
    };

    filterRecipes();
  }, [recipes, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <h1 className="main-title">Nos recettes</h1>
      <FilterOptions onChange={handleFilterChange} />
      {loading ? (
        <div className="loading-message">Chargement des recettes...</div>
      ) : (
        <div className="recipes">
          {filteredRecipes.length === 0 ? (
            <div className="no-recipes-message">Aucune recette trouvée. Essayez de modifier vos filtres.</div>
          ) : (
            filteredRecipes.map(recipe => (
              <div key={recipe._id} className="recipe">
                <RecipeLabel label={recipe.label} />
                <RecipeImage imageUrl={recipe.imageUrl} />
                <SourceUrl sourceUrl={recipe.sourceUrl} />
                <TotalTime totalTime={recipe.totalTime} />
                <Servings servings={recipe.servings} />
                <Calories calories={recipe.calories} />
                <Ingredient ingredients={recipe.ingredients} />
                <Instruction instructions={recipe.instructions} />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default RecipeList;
