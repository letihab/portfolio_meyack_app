// recipeMiddleware.js
const axios = require('axios');
const Recipe = require('../models/recipe');

// Middleware pour récupérer et stocker les recettes de l'API dans la base de données
const fetchAndStoreRecipes = async (req, res, next) => {
    try {
        const response = await axios.get('https://api.spoonacular.com/recipes/search', {
            params: {
                query: 'healthy',
                apiKey: '92f3a5dfa0954db981c5e7b9b010bd33'
            },
        });

        const recipesToSave = response.data.results.map(result => {
            return {
                label: result.title,
                ingredients: [], // Ajoutez la logique pour récupérer les ingrédients si nécessaire
                instructions: result.instructions || '', // Utilisez les instructions de l'API ou une chaîne vide si les instructions sont manquantes
                imageUrl: result.image,
                sourceUrl: result.sourceUrl,
                totalTime: result.readyInMinutes,
                servings: result.servings,
                calories: Math.floor(Math.random() * 1000),
            };
        });

        const savedRecipes = await Recipe.create(recipesToSave);
        console.log('Recettes enregistrées avec succès dans la base de données:', savedRecipes);
        next();
    } catch (error) {
        console.error('Erreur lors de la récupération et de l\'enregistrement des recettes :', error);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération et de l\'enregistrement des recettes' });
    }
};

module.exports = { fetchAndStoreRecipes };

