import React from 'react';
import LoginForm from './LoginForm';
import axios from 'axios';

function ParentComponent() {
  const handleSubmit = async (username, password) => {
    try {
      // Envoi de la requête au backend
      const response = await axios.post('http://localhost:4000/api/login', { username, password });
      // Gestion de la réponse du backend
      console.log('Réponse du serveur:', response.data);
    } catch (error) {
      // Gestion des erreurs
      console.error('Erreur lors de la connexion:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default ParentComponent;
