const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');

// Route pour récupérer toutes les recettes
router.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
