const express = require('express');
const router = express.Router();
const authMiddleware = require('../services/authMiddleware'); // Assurez-vous que le chemin d'accès est correct

const mealPlanController = require('../controllers/mealPlanController');

// Endpoint pour créer un plan de repas
router.post('/meal-plans', authMiddleware.authenticateUser, mealPlanController.createMealPlan);

// Endpoint pour récupérer les plans de repas de l'utilisateur
router.get('/meal-plans', authMiddleware.authenticateUser, mealPlanController.getMealPlans);

// Endpoint pour mettre à jour un plan de repas existant
router.put('/meal-plans/:id', authMiddleware.authenticateUser, mealPlanController.updateMealPlan);

// Endpoint pour supprimer un plan de repas
router.delete('/meal-plans/:id', authMiddleware.authenticateUser, mealPlanController.deleteMealPlan);

module.exports = router;
