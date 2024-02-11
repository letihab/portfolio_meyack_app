/* eslint-env node */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schéma pour la table User
const userSchema = new Schema({
  UserID: { type: String, required: true, unique: true },
  Username: { type: String, required: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true },
  ProfileInfo: { type: String },
});

// Schéma pour la table Recipe
const recipeSchema = new mongoose.ErrorSchema({
  RecipeID: { type: String, required: true, unique: true },
  Name: { type: String, required: true },
  Ingredients: { type: String, required: true },
  Instructions: { type: String, required: true },
  NutritionalInfo: { type: String },
  CreatedBy: { type: String, ref: 'User' },
});

// Schéma pour la table Meal
const mealSchema = new Schema({
  MealID: { type: String, required: true, unique: true },
  UserID: { type: String, ref: 'User' },
  RecipeID: { type: String, ref: 'Recipe' },
  MealDetails: { type: String, required: true },
  Date: { type: Date, required: true },
});

// Schéma pour la table MealPlan
const mealPlanSchema = new Schema({
  PlanID: { type: String, required: true, unique: true },
  UserID: { type: String, ref: 'User' },
  MondayMealID: { type: String, ref: 'Meal' },
  TuesdayMealID: { type: String, ref: 'Meal' },
  // Ajoutez d'autres jours de la semaine ici
});

// Schéma pour la table PhysicalActivity
const physicalActivitySchema = new Schema({
  ActivityID: { type: String, required: true, unique: true },
  UserID: { type: String, ref: 'User' },
  ActivityDetails: { type: String, required: true },
  CaloriesBurned: { type: Number, required: true },
  Date: { type: Date, required: true },
});

// Schéma pour la table FavoriteRecipes
const favoriteRecipesSchema = new Schema({
  FavoriteID: { type: String, required: true, unique: true },
  UserID: { type: String, ref: 'User' },
  RecipeID: { type: String, ref: 'Recipe' },
});

// Connectez-vous à MongoDB
mongoose.connect('mongodb://localhost:27017/meyack_app');

// Modèles pour chaque table
const User = mongoose.model('User', userSchema);
const Recipe = mongoose.model('Recipe', recipeSchema);
const Meal = mongoose.model('Meal', mealSchema);
const MealPlan = mongoose.model('MealPlan', mealPlanSchema);
const PhysicalActivity = mongoose.model('PhysicalActivity', physicalActivitySchema);
const FavoriteRecipes = mongoose.model('FavoriteRecipes', favoriteRecipesSchema);

// Insérez des données de test
const insertTestData = async () => {
  try {
    const existingUser = await User.findOne({ UserID: '2' });
    if (!existingUser) {
      const user = await User.create({
        UserID: '2',
        Username: 'JohnDoe',
        Email: 'john@example.com',
        Password: 'hashedpassword',
        ProfileInfo: 'Some user details',
      });

      const existingRecipe = await Recipe.findOne({ RecipeID: '1' });
      if (!existingRecipe) {
        const recipe = await Recipe.create({
          RecipeID: '1',
          Name: 'Pasta Carbonara',
          Ingredients: 'Spaghetti, eggs, bacon, parmesan cheese',
          Instructions: 'Cook pasta, fry bacon, mix with eggs and cheese',
          NutritionalInfo: 'High in protein and deliciousness',
          CreatedBy: user.UserID,
        });

        const existingMeal = await Meal.findOne({ MealID: '1' });
        if (!existingMeal) {
          const meal = await Meal.create({
            MealID: '1',
            UserID: user.UserID,
            RecipeID: recipe.RecipeID,
            MealDetails: 'Enjoying a tasty Pasta Carbonara',
            Date: new Date(),
          });

          // ... Continuez le processus pour les autres collections

          console.log('Test data inserted successfully.');
        } else {
          console.log('Le repas avec MealID "1" existe déjà.');
        }
      } else {
        console.log('La recette avec RecipeID "1" existe déjà.');
      }
    } else {
      console.log('L\'utilisateur avec UserID "2" existe déjà.');
    }
  } catch (error) {
    console.error('Erreur lors de l\'insertion des données de test :', error);
  } finally {
    // Déconnectez-vous de la base de données après l'insertion des données
    mongoose.disconnect();
  }
};

// Exécutez la fonction pour insérer les données de
