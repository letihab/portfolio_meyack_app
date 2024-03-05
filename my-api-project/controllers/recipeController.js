const fetch = require('node-fetch');

// Fonction pour récupérer la liste des recettes depuis l'API Edamam
const getRecipes = async (req, res) => {
    try {
        // Faites une requête à l'API Edamam pour récupérer les recettes
        const response = await fetch('https://api.edamam.com/search?q=chicken&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY');
        const data = await response.json();
        
        // Renvoyer les données des recettes récupérées comme réponse
        res.json(data);
    } catch (error) {
        // En cas d'erreur, renvoyer un message d'erreur
        console.error('Erreur lors de la récupération des recettes :', error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la récupération des recettes.' });
    }
};

// Fonction pour ajouter une recette à la liste des recettes favorites de l'utilisateur
const addFavoriteRecipe = async (req, res) => {
    try {
        // Logique pour ajouter une recette à la liste des recettes favorites de l'utilisateur
        // Vous pouvez implémenter cette fonctionnalité en utilisant votre modèle d'utilisateur et de recette
        // Par exemple :
        // const userId = req.user.id;
        // const recipeId = req.params.recipeId;
        // const user = await User.findById(userId);
        // user.favoriteRecipes.push(recipeId);
        // await user.save();
        
        // Renvoyer une réponse indiquant que la recette a été ajoutée avec succès
        res.status(200).json({ message: 'Recette ajoutée avec succès à la liste des recettes favorites.' });
    } catch (error) {
        // En cas d'erreur, renvoyer un message d'erreur
        console.error('Erreur lors de l\'ajout de la recette à la liste des recettes favorites :', error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de l\'ajout de la recette à la liste des recettes favorites.' });
    }
};

// Exporter les fonctions du contrôleur
module.exports = {
    getRecipes,
    addFavoriteRecipe
};
