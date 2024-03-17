// recipeRoutes.js
const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');
const { fetchAndStoreRecipes } = require('../services/recipeMiddleware');

// Middleware pour récupérer et stocker les recettes de l'API
router.use(fetchAndStoreRecipes);

// Route pour récupérer toutes les recettes
router.get('/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        console.error('Erreur lors de la récupération des recettes :', error);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération des recettes' });
    }
});

// Route pour rechercher des recettes par nom
router.get('/recipes/search', async (req, res) => {
    const { query } = req.query;
    try {
        const recipes = await Recipe.find({ label: { $regex: query, $options: 'i' } });
        res.json(recipes);
    } catch (error) {
        console.error('Erreur lors de la recherche des recettes :', error);
        res.status(500).json({ message: 'Erreur serveur lors de la recherche des recettes' });
    }
});

// Route pour filtrer les recettes par type (ex: vegan, sans gluten, halal, etc.)
router.get('/recipes/filter', async (req, res) => {
    const { type } = req.query;
    try {
        const recipes = await Recipe.find({ type: type });
        res.json(recipes);
    } catch (error) {
        console.error('Erreur lors du filtrage des recettes :', error);
        res.status(500).json({ message: 'Erreur serveur lors du filtrage des recettes' });
    }
});

module.exports = router;
