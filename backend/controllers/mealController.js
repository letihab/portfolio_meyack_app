// mealController.js
const MealPlan = require('../models/mealPlan');

const planWeeklyMeals = async (req, res) => {
    try {
        const { userId, weeklyMeals } = req.body;
        
        // Delete existing meal plans for the user
        await MealPlan.deleteMany({ userId });

        // Create new meal plans for each day of the week
        const createdMealPlans = await Promise.all(weeklyMeals.map(async (meal) => {
            const { dayOfWeek, recipeId } = meal;
            const mealPlan = await MealPlan.create({ userId, dayOfWeek, recipeId });
            return mealPlan;
        }));

        res.status(201).json({ message: 'Weekly meals planned successfully', mealPlans: createdMealPlans });
    } catch (error) {
        console.error('Error planning weekly meals:', error);
        res.status(500).json({ message: 'Failed to plan weekly meals' });
    }
};

module.exports = { planWeeklyMeals };
