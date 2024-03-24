// authController.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Endpoint pour la connexion de l'utilisateur
router.post('/login', async (req, res, navigate) => {
  try {
    const { email, password } = req.body;
    
    // Recherche de l'utilisateur dans la base de données par email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    // Vérification du mot de passe
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    // Génération du jeton JWT
    const token = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET);
    
    // Retourner la réponse avec le token
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
