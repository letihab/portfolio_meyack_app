const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/config');

// Endpoint pour la connexion de l'utilisateur
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Recherche de l'utilisateur dans la base de données par email
    const user = await User.findOne({ email });

    console.log(`je suis dans autocontrole ${email} ${password}` ); 
    if (!user) {
      return res.status(401).json({ message: 'Invalid email' });
    }

    const passwordHashed = await bcrypt.hash(password, 10);
    console.log(`je suis dans autocontrole ${passwordHashed} et  ${user.password}` );
    // Vérification du mot de passe
    const passwordMatch = await bcrypt.checkpw(password.encode(), user.password);
    console.log(`Password match: ${passwordMatch}`);
    console.log(`je suis dans autocontrole ${user.password} ${password}` );
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Génération du jeton JWT en utilisant la clé secrète du fichier config.js
    const token = jwt.sign({ userId: user.userId }, config.JWT_SECRET);

    // Retourner la réponse avec le token
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;