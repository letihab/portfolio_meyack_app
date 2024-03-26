import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/recipe.css';
import FilterOptions from './filterOptions'; // Importez le composant FilterOptions

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [filters, setFilters] = useState({
    vegan: false,
    glutenFree: false,
    salad: false,
    highProtein: false,
  });
  const [loading, setLoading] = useState(false); // Ajout d'un état pour afficher une indication de chargement

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true); // Afficher l'indication de chargement
        const response = await axios.get('/api/recipes');
        setRecipes(response.data);
        setLoading(false); // Masquer l'indication de chargement une fois les recettes chargées
      } catch (error) {
        console.error('Erreur lors de la récupération des recettes depuis le backend :', error);
        setLoading(false); // Masquer l'indication de chargement en cas d'erreur
      }
    };

    const filterRecipes = () => {
      let filtered = [];
      
      if (Array.isArray(recipes)) {
        filtered = recipes.filter((recipe) => {
          return (
            (!filters.vegan || recipe.label.toLowerCase().includes('vegan')) &&
            (!filters.glutenFree || recipe.label.toLowerCase().includes('gluten-free')) &&
            (!filters.salad || recipe.label.toLowerCase().includes('salad')) &&
            (!filters.highProtein || recipe.label.toLowerCase().includes('high-protein'))
          );
        });
      } else {
        console.error('recipes is not an array:', recipes);
      }

      setFilteredRecipes(filtered);
    };  

    fetchRecipes();
    filterRecipes();
  }, [recipes, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <h1> Nos recettes</h1>
      <FilterOptions onChange={handleFilterChange} /> {/* Ajoutez le composant FilterOptions */}
      {loading ? ( // Afficher l'indication de chargement si les recettes sont en cours de chargement
        <div className="loading-message">Chargement des recettes...</div>
      ) : (
        <div className="recipes">
          {filteredRecipes.length === 0 ? ( // Afficher un message si aucune recette n'est trouvée après le filtrage
            <div className="no-recipes-message">Aucune recette trouvée. Essayez de modifier vos filtres.</div>
          ) : (
            filteredRecipes.map(recipe => (
              <div key={recipe._id} className="recipe">
                <h2>{recipe.label}</h2>
                {/* Utilisez directement le nom de fichier de l'image pour l'URL */}
                <img src={`${process.env.PUBLIC_URL}/images/${recipe.imageUrl}`} alt={recipe.label} />
                <p>Temps total : {recipe.totalTime} minutes</p>
                <p>Nombre de portions : {recipe.servings}</p>
                <p>Calories : {recipe.calories}</p>
                <p><a href={recipe.sourceUrl}>Voir la recette</a></p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default RecipeList;

