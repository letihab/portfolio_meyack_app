import React from 'react';
import '../styles/styles.css';
import logo from './images/logo.png'; // Replace with your logo path
import { useNavigate } from 'react-router-dom'; // Import useHistory hook

function Header() {
  const navigate = useNavigate(); // Initialize useHistory hook

  // Fonction de déconnexion
  const handleLogout = () => {
    // Supprimer le jeton JWT stocké localement (par exemple, dans le localStorage)
    localStorage.removeItem('token');
    // Rediriger l'utilisateur vers la page de connexion ou la page d'accueil
    navigate('/authentication'); // Change '/authentication' to your login page route
  };

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navLinks">
          <img src={logo} alt="Meyack App Logo" className="logo" /> 
          <li><a href="/">Home</a></li>
          <li><a href="/recipes">Recipes</a></li>
          <li><a href="/meal-plan">Meal Plan</a></li>
          <li><a href="/authentication">Connexion</a></li>
          {/* Ajouter un bouton de déconnexion */}
          <li><button  className="logout-button" onClick={handleLogout}>Deconnexion</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
