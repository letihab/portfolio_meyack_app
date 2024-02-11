import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';


ReactDOM.render(
    <React.StrictMode>
      <LoginPage />
    </React.StrictMode>,
    document.getElementById('root')
  );

function LoginPage() {
  // State pour gérer les champs du formulaire
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de validation et d'envoi des données de connexion
    console.log('Username:', username);
    console.log('Password:', password);
    // Réinitialiser les champs après la soumission
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
    </div>
  );
}

export default LoginPage;
