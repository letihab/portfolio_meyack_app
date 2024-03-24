// signup.js

import { useState } from 'react'; // Importez useState depuis React
import useCustomNavigate from './useCustomNavigate'; // Importez votre hook personnalisé
import axios from 'axios';

const useLoginForm = () => {
  const [formData, setFormData] = useState({ // Utilisez useState pour déclarer un état local
    username: '',
    password: ''
  });
  
  const customNavigate = useCustomNavigate(); // Utilisation du hook personnalisé pour obtenir la fonction de navigation

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/login', formData);
      
      // Stockage du token dans le stockage local du navigateur
      localStorage.setItem('token', response.data.token);
      
      // Redirection vers une page après la connexion réussie
      customNavigate('/recipes');
    } catch (error) {
      console.error('Error logging in:', error);
      // Gérer les erreurs de connexion ici
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return { formData, handleChange, handleLogin }; // Retournez les fonctions et l'état pour les utiliser dans un composant React
};

export default useLoginForm;
