import React from 'react';
import '../styles/styles.css';

function Header() {
  return (
    <header className="header">
      <h1>Meyack App</h1>
      <nav className="navbar">
        <ul className="navLinks">
          <li><a href="/">Home</a></li>
          <li><a href="/recipes">Recipes</a></li>
          <li><a href="/meal-plan">Meal Plan</a></li>
          <li><a href="/physical-activities">Physical Activities</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/create-account">log in</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

