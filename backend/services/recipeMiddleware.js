const axios = require('axios');
const Recipe = require('../models/recipe');

const cache = {};

const getNumberOfRecipes = async () => {
  if (cache['totalRecipes']) {
    console.log('Nombre total de recettes récupéré du cache');
    return cache['totalRecipes'];
  }

  const response = await axios.get('https://api.edamam.com/search', {
    params: {
      q: 'healthy',
      app_id: 'dedb01cb',
      app_key: 'c07f41ebe2b5bfb40d8b473f4f09e5a2',
      to: 1,
    },
  });

  cache['totalRecipes'] = response.data.count;
  console.log('Nombre total de recettes enregistré dans le cache');
  return cache['totalRecipes'];
};

const fetchRecipes = async (options) => {
  const response = await axios.get(options.url, { params: options.params });

  const existingRecipes = await Recipe.find({ sourceUrl: { $in: response.data.hits.map(hit => hit.recipe.url) } });

  const newRecipes = response.data.hits.filter(hit => {
    const recipe = hit.recipe;
    return (
      recipe.label &&
      recipe.totalTime &&
      recipe.image &&
      recipe.calories &&
      !existingRecipes.some(existingRecipe => existingRecipe.sourceUrl === recipe.url)
    );
  });

  return newRecipes.map(hit => ({
    label: hit.recipe.label,
    servings: hit.recipe.yield,
    sourceUrl: hit.recipe.url,
    imageUrl: hit.recipe.image,
    calories: hit.recipe.calories,
    totalTime: hit.recipe.totalTime,
  }));
};

const fetchAndStoreRecipes = async (req, res, next) => {
  try {
    const totalRecipes = 10;
    const options = {
      url: 'https://api.edamam.com/search',
      params: {
        q: 'healthy',
        app_id: 'dedb01cb',
        app_key: 'c07f41ebe2b5bfb40d8b473f4f09e5a2',
        to: totalRecipes,
      },
    };

    // Récupérer les recettes depuis l'API Edamam
    const newRecipes = await fetchRecipes(options);

    // Enregistrer les nouvelles recettes
    const savedRecipes = await Recipe.create(newRecipes);
    console.log('Recettes enregistrées avec succès dans la base de données:', savedRecipes);

    next();
  } catch (error) {
    console.log('Erreur lors de la récupération des recettes:', error.message);
    res.status(500).json({ message: `Erreur lors de la récupération des recettes: ${error.message}` });
  }
};

module.exports = { fetchAndStoreRecipes };
