const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

// Créer un nouvel utilisateur
router.post('/user', async (req, res) => {
  try {
    const { username, email, password, age, height, weight } = req.body;

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    let newId = uuidv4();
    console.log("new USER ID === ", newId);
    console.log("---------------------");

    // Créer un nouvel utilisateur avec un identifiant unique
    const newUser = new User({
      userId: newId, // Générer un identifiant unique
      username,
      email,
      password: hashedPassword,
      age,
      height,
      weight,
    });

    // Sauvegarder l'utilisateur dans la base de données
    await newUser.save();

    // Retourner la réponse
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

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
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
