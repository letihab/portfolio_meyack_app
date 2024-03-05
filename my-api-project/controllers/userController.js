const User = require('../models/user');
const bcrypt = require('bcrypt');

// Fonction pour créer un nouvel utilisateur
exports.createUser = async (req, res) => {
    try {
        // Récupérer les données du corps de la requête
        const { username, email, password, age, height, weight } = req.body;

        // Vérifier si l'utilisateur existe déjà
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hasher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Créer un nouvel utilisateur
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            age,
            height,
            weight
        });

        // Sauvegarder l'utilisateur dans la base de données
        await newUser.save();

        // Retourner la réponse
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Fonction pour mettre à jour un utilisateur
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, age, height, weight } = req.body;

        // Vérifier si l'utilisateur existe
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Mettre à jour les propriétés de l'utilisateur
        user.username = username;
        user.email = email;
        user.age = age;
        user.height = height;
        user.weight = weight;

        // Sauvegarder les modifications dans la base de données
        await user.save();

        // Retourner la réponse
        res.json({ message: 'User updated successfully' });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Fonction pour supprimer un utilisateur
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        // Supprimer l'utilisateur de la base de données
        await User.findByIdAndDelete(id);

        // Retourner la réponse
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Fonction pour récupérer tous les utilisateurs
exports.getAllUsers = async (req, res) => {
    try {
        // Récupérer tous les utilisateurs depuis la base de données
        const users = await User.find();

        // Retourner la liste des utilisateurs
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
