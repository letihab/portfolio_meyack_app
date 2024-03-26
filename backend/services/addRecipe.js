const Recipe = require('./models/recipe.js');

const newRecipe = new Recipe({
    label: "Ndole aux crevettes",
    ingredients: [
      { text: "1 botte de feuilles de ndolé", weight: 200 }, // Poids en grammes
      { text: "500g de crevettes décortiquées", weight: 500 }, // Poids en grammes
      { text: "2 plantains", weight: 400 }, // Poids en grammes
      { text: "1 oignon", weight: 100 }, // Poids en grammes
      { text: "2 gousses d'ail", weight: 20 }, // Poids en grammes
      { text: "1 tomate", weight: 150 }, // Poids en grammes
      { text: "1 cuillère à soupe d'huile d'olive", weight: 15 }, // Poids en grammes
      { text: "Epices (piment, sel, poivre)", weight: 10 } // Poids en grammes
    ],
    instructions: "Nettoyer et hacher les feuilles de ndolé. Faire revenir l'oignon et l'ail hachés dans l'huile d'olive. Ajouter les tomates et les épices, laisser mijoter. Incorporer les feuilles de ndolé et laisser cuire 15 minutes. Ajouter les crevettes et cuire 5 minutes supplémentaires. Servir avec du plantain braisé.",
    imageUrl: "https://www.tasteatlas.com/ndole-crevettes",
    sourceUrl: "https://www.tasteatlas.com/ndole-crevettes",
    totalTime: 45, // Temps total en minutes
    servings: 4, // Nombre de portions
    calories: 400, // Nombre de calories
    type: "veganfree" // Type de recette
});

  console.log('New recipe:', newRecipe);

  
  console.log('Before saving recipe');
  // Enregistrement de la recette dans la base de données
  newRecipe.save((err, savedRecipe) => {
    if (err) {
      console.error('Error saving recipe:', err);
      // Gérer l'erreur
    } else {
      console.log('Recipe saved successfully:', savedRecipe);
      // Envoyer une réponse ou effectuer d'autres actions après l'enregistrement réussi
    }
  });

  console.log('After saving recipe');
