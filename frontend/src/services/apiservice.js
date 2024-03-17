import axios from 'axios';

axios.get('http://localhost:4000/api/users')
  .then(response => {
    // Traitement de la réponse ici
    console.log(response.data);
  })
  .catch(error => {
    // Gestion des erreurs ici
    console.error('Erreur lors de la récupération des utilisateurs :', error);
  });
