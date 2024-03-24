const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcrypt');

const User = require('./models/user');
const Recipe = require('./models/recipe');
const ActionHistory = require('./models/actionHistory');
const Image = require('./models/image');
const MealPlan = require('./models/mealPlan');
const Category = require('./models/category');

const mealPlanRoutes = require('./routes/mealPlanRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const userProfileRouter = require('./routes/userProfileRouter');

const authController = require('./controllers/authController');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api', mealPlanRoutes);
app.use('/api', recipeRoutes);
app.use('/api', userProfileRouter);

app.use('/api', authController);

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/meyack_app')
  .then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if MongoDB connection fails
  });

// Création des collections si elles n'existent pas déjà
const createCollections = async () => {
  try {
    // Vérification de l'existence de chaque collection et création si nécessaire
    await Promise.all([
      User.exists() || User.createCollection(),
      Recipe.exists() || Recipe.createCollection(),
      ActionHistory.exists() || ActionHistory.createCollection(),
      Image.exists() || Image.createCollection(),
      MealPlan.exists() || MealPlan.createCollection(),
      Category.exists() || Category.createCollection(),
    ]);
    console.log('Collections created successfully');
  } catch (error) {
    console.error('Error creating collections:', error);
  }
};

// Appel de la fonction de création des collections
createCollections();

// Point de terminaison pour récupérer la liste des utilisateurs
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Point de terminaison pour récupérer et stocker les recettes
app.get('/api/fetch-and-store-recipes', async (req, res) => {
  try {
    // Appeler la fonction pour récupérer et stocker les recettes
    await fetchAndStoreRecipes();
    res.json({ message: 'Recettes récupérées et stockées avec succès' });
  } catch (error) {
    console.error('Erreur lors de la récupération et de l\'enregistrement des recettes :', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Configuration pour servir les fichiers statiques depuis le répertoire /public de l'application React
app.use(express.static(path.join(__dirname, 'frontend', 'public')));

// Définir une route de fallback pour servir l'application React sur toutes les autres routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Démarrage du serveur sur le port défini dans l'environnement ou sur le port 4000 par défaut
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
