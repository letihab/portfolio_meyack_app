// category.js (Modèle pour les catégories)
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true // Assure que chaque catégorie a un nom unique
  },
  description: {
    type: String,
    required: [true, 'La description de la catégorie est obligatoire'],
    trim: true
  },
});

module.exports = mongoose.model('Category', categorySchema);
