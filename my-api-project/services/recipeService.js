const axios = require('axios');

// Fonction pour récupérer toutes les recettes paginées
async function getAllRecipes() {
    let allRecipes = [];
    let nextPageUrl = 'https://api.edamam.com/api/recipes/v2';

    try {
        // Boucle pour récupérer toutes les pages de recettes
        while (nextPageUrl) {
            // Faire une requête à l'API Edamam pour récupérer la page suivante de recettes
            const response = await axios.get(nextPageUrl, {
                params: {
                    q: '', // Votre critère de recherche
                    app_id: 'e55bf6d5', // Votre ID d'application Edamam
                    app_key: 'e176ce9b14274bbdf4e09253e178a7dc', // Votre clé API Edamam
                },
            });

            // Extraire les recettes de la réponse
            const recipes = response.data.hits.map(hit => hit.recipe);
            allRecipes = allRecipes.concat(recipes);

            // Vérifier s'il y a une page suivante
            if (response.data._links && response.data._links.next) {
                nextPageUrl = response.data._links.next.href;
            } else {
                nextPageUrl = null;
            }
        }

        console.log('Toutes les recettes récupérées :', allRecipes);
    } catch (error) {
        console.error('Erreur lors de la récupération des recettes paginées :', error);
    }
}

// Appeler la fonction pour récupérer toutes les recettes
getAllRecipes();
