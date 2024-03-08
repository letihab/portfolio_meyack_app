import React, { useState } from 'react';
import '../styles/loginForm.css'; // Importez le fichier CSS pour le formulaire de connexion

function LoginForm({ onSubmit }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username, password);
    setUsername('');
    setPassword('');
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}> {/* Ajoutez la classe CSS au formulaire */}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
