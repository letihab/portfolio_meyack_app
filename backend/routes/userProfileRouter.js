const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');
const { v4: uuidv4 } = require('uuid');

// Route pour l'inscription d'un nouvel utilisateur
router.post('/user', async (req, res) => {
        // Récupérer les données de l'utilisateur depuis le frontend
        const { username, email, age, height, weight, password: plainTextPassword } = req.body;

        const newId = uuidv4();

        // Hachage du mot de passe avant de le stocker dans la base de données
        const password = await bcrypt.hash(plainTextPassword, 10); // Utilisation d'un coût de hachage de 10
        try{
        // Création de l'utilisateur dans la base de données
            const newUser = await User.create({
                userId: newId,
                username,
                email,
                password,
                age,
                height,
                weight
            });

            return res.redirect('/');
    } catch (error) {
        console.error(JSON.stringify(error));

        // Gestion des erreurs de création de l'utilisateur
        if (error.code === 11000) {
            return res.send({ status: 'error', error: 'Email already exists' });
        }

        throw error;
    }
})

// Mettre à jour un utilisateur existant
router.put('/user/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const updates = req.body; // Objet contenant les modifications à apporter

        // Trouver l'utilisateur par son ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Mettre à jour les propriétés de l'utilisateur avec les mises à jour fournies
        user.set(updates);

        // Sauvegarder l'utilisateur mis à jour dans la base de données
        await user.save();

        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Supprimer un utilisateur existant
router.delete('/user/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;

        // Trouver l'utilisateur par son ID et le supprimer
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Obtenir tous les utilisateurs
router.get('/users', async (req, res) => {
    try {
        // Récupérer tous les utilisateurs de la base de données
        const users = await User.find();
        console.log("recuperons tous les users");
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;

