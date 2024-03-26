import React from 'react';
import '../styles/loginForm.css'; // Importez le fichier CSS pour le formulaire de connexion
import useLoginForm from './signup';

function LoginForm({ onSubmit }) {
  // Appelez le hook useLoginForm pour obtenir les fonctions et l'état nécessaires
  const { formData, handleChange, handleLogin } = useLoginForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(); // Utilisez la fonction handleLogin retournée par le hook
    } catch (error) {
      console.error('Error logging in:', error);
      // Gérer les erreurs de connexion ici
    }
  };

  // Assurez-vous que la valeur du champ d'email est correctement initialisée
  // Si la valeur de formData.email est undefined, définissez-la sur une chaîne vide
  if (formData.email === undefined) {
    formData.email = '';
  }

  // Assurez-vous que la valeur du champ de mot de passe est correctement initialisée
  // Si la valeur de formData.password est undefined, définissez-la sur une chaîne vide
  if (formData.password === undefined) {
    formData.password = '';
  }

  return (
    <form className="authentication-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
