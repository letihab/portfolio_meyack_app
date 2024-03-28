const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const User = require('../models/user');
const config = require('../config/config');

const router = express.Router();

// Fonction pour vérifier les informations de connexion de l'utilisateur
const verifyUserLogin = async (email, encodedPassword) => {
    try {
        // Recherche de l'utilisateur dans la base de données par email
        const user = await User.findOne({ email }).lean();
        if (!user) {
            console.log('User not found');
            return { status: 'error', error: 'User not found' };
        }
        // Décode le mot de passe encodé reçu du client
        const password = decodePassword(encodedPassword);
        // Vérification du mot de passe
        if (await bcrypt.compare(password, user.password)) {
            console.log('Password is correct');
            // Création d'un jeton JWT
            const token = jwt.sign({ id: user._id, email: user.email, type: 'user' }, process.env.JWT_SECRET, { expiresIn: '2h' });
            return { status: 'ok', data: token };
        }
        console.log('Invalid password');
        return { status: 'error', error: 'Invalid password' };
    } catch (error) {
        console.error('Error verifying user login:', error);
        return { status: 'error', error: 'Timed out' };
    }
};

// Route pour la connexion de l'utilisateur
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Vérification des informations de connexion de l'utilisateur
        console.log('Verifying user login...');
        const response = await verifyUserLogin(email, password);
        if (response.status === 'ok') {
            // Stockage du jeton JWT en tant que cookie dans le navigateur de l'utilisateur
            res.cookie('token', response.data, { maxAge: 2 * 60 * 60 * 1000, httpOnly: true }); // maxAge: 2 heures
            console.log('User logged in successfully');
            res.redirect('/'); // Redirection vers la page d'accueil ou toute autre page après la connexion réussie
        } else {
            // Envoi de la réponse avec le statut d'erreur
            console.log('Error logging in user:', response.error);
            res.json(response);
        }
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ status: 'error', error: 'Internal Server Error' });
    }
});

// Fonction pour décoder le mot de passe encodé côté client
const decodePassword = (encodedPassword) => {
    return Buffer.from(encodedPassword, 'base64').toString('utf-8');
};

module.exports = router;



