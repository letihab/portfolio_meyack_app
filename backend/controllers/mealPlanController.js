const MealPlan = require('../models/mealPlan');

// Créer un plan de repas
exports.createMealPlan = async (req, res) => {
  try {
    const { date, meals } = req.body;
    const user = req.user.id;

    const mealPlan = new MealPlan({
      user,
      date,
      meals
    });

    await mealPlan.save();

    res.status(201).json(mealPlan);
  } catch (error) {
    console.error('Error creating meal plan:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Récupérer les plans de repas de l'utilisateur
exports.getMealPlans = async (req, res) => {
  try {
    const user = req.user.id;
    const mealPlans = await MealPlan.find({ user });

    res.json(mealPlans);
  } catch (error) {
    console.error('Error fetching meal plans:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Mettre à jour un plan de repas existant
exports.updateMealPlan = async (req, res) => {
  try {
    const { date, meals } = req.body;
    const mealPlanId = req.params.id;

    const updatedMealPlan = await MealPlan.findByIdAndUpdate(mealPlanId, { date, meals }, { new: true });

    res.json(updatedMealPlan);
  } catch (error) {
    console.error('Error updating meal plan:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Supprimer un plan de repas
exports.deleteMealPlan = async (req, res) => {
  try {
    const mealPlanId = req.params.id;

    await MealPlan.findByIdAndDelete(mealPlanId);

    res.json({ message: 'Meal plan deleted successfully' });
  } catch (error) {
    console.error('Error deleting meal plan:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
