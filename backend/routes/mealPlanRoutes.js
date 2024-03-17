// mealRoutes.js
const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../services/authenticationMiddleware');
const { authorizeMealPlanning } = require('../services/authorizationMiddleware');
const { planWeeklyMeals } = require('../controllers/mealController');

// Route to plan weekly meals
router.post('/meal-plan', authenticateUser, authorizeMealPlanning, planWeeklyMeals);

module.exports = router;
