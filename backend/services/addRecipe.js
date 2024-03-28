const Recipe = require('./models/recipe.js');

const recipe = new Recipe({
    label: "Buddha bowl aux légumes grillés et houmous",
    ingredients: [
    "1 courgette, coupée en rondelles",
    "1 poivron rouge, coupé en lamelles",
    "1 oignon rouge, coupé en quartiers",
    "1 cuillère à soupe d'huile d'olive",
    "150 g de houmous",
    "100 g de quinoa cuit",
    "Feuilles de salade",
    "Graines de grenade pour la garniture"
  ],
    type: "vegan",
    totalTime: 30,
    servings: 1,
    calories: 350
  });
  

  console.log('New recipe:', newRecipe);

  
  console.log('Before saving recipe');
  // Enregistrement de la recette dans la base de données
  recipe.save((err, savedRecipe) => {
    if (err) {
      console.error('Error saving recipe:', err);
      // Gérer l'erreur
    } else {
      console.log('Recipe saved successfully:', savedRecipe);
      // Envoyer une réponse ou effectuer d'autres actions après l'enregistrement réussi
    }
  });

  console.log('After saving recipe');
