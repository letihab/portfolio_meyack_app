const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route pour créer un nouvel utilisateur
router.post('/users', userController.createUser);

// Route pour mettre à jour un utilisateur existant
router.put('/users/:id', userController.updateUser);

// Route pour supprimer un utilisateur existant
router.delete('/users/:id', userController.deleteUser);

// Route pour récupérer tous les utilisateurs
router.get('/users', userController.getAllUsers);

module.exports = router;
