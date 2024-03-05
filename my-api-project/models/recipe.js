// recipe.js (Modèle pour les recettes)
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  label: { type: String, required: true }, // Nom de la recette
  ingredients: [{ // Tableau des ingrédients
    text: { type: String, required: true }, // Texte de l'ingrédient
    weight: { type: Number, required: true } // Poids de l'ingrédient
  }],
  instructions: { type: String, required: true }, // Instructions de la recette
  imageUrl: { type: String, required: true }, // URL de l'image de la recette
  sourceUrl: { type: String, required: true }, // URL source de la recette sur l'API Edamam
  totalTime: { type: Number, required: true }, // Temps total de préparation de la recette (en secondes)
  servings: { type: Number, required: true }, // Nombre de portions de la recette
  calories: { type: Number, required: true } // Nombre de calories de la recette
});

module.exports = mongoose.model('Recipe', recipeSchema);
