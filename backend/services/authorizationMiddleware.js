// authorizationMiddleware.js
const MealPlan = require('../models/mealPlan');

const authorizeMealPlanning = async (req, res, next) => {
    const userId = req.user.id;

    // Check if the user has already planned meals
    const existingMealPlans = await MealPlan.find({ userId });
    if (existingMealPlans.length > 0) {
        return res.status(403).json({ message: 'Meal plans already exist for this user' });
    }

    next();
};

module.exports = { authorizeMealPlanning };
