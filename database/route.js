const express = require('express');
const router = express.Router();

// Ajoutez votre modèle Recipe
const Recipe = require('../models/recipe');

// Route pour obtenir toutes les recettes
router.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Autres routes peuvent être ajoutées pour obtenir une recette spécifique, filtrer par catégorie, etc.

module.exports = router;
