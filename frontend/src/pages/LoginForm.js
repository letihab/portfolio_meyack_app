import React, { useState } from 'react';
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