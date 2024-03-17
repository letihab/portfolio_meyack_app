const mongoose = require('mongoose');

const mealPlanSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  dayOfWeek: {
    type: String,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    required: true
  },
  recipeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
    required: true
  },
  mealTime: {
    type: String, // Adjust type based on your needs (e.g., String, Date)
    required: true
  },
  quantity: {
    type: Number, // Adjust type based on your needs
    required: true
  }
});

module.exports = mongoose.model('MealPlan', mealPlanSchema);
