const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// Route pour récupérer toutes les recettes
router.get('/api/recipes', recipeController.getAllRecipes);

// Route pour récupérer une recette par son ID
router.get('/api/recipes/:id', recipeController.getRecipeById);

// Route pour ajouter une nouvelle recette
router.post('/api/recipes', recipeController.addRecipe);

// Route pour mettre à jour une recette existante
router.put('/api/recipes/:id', recipeController.updateRecipe);

// Route pour supprimer une recette
router.delete('/api/recipes/:id', recipeController.deleteRecipe);

// Route pour filtrer les recettes par type d'alimentation
router.get('/api/recipes/filter', recipeController.filterRecipesByType);

module.exports = router;


