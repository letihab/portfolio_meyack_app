import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import RecipePage from './pages/RecipePage';
import MealPlan from './pages/MealPlan';
import PhysicalActivity from './pages/PhysicalActivity';
import UserProfilePage from './pages/UserProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/styles.css';

function App() {
  const [users, setUsers] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Récupérer les utilisateurs depuis le backend
    fetch("/api/users")
      .then(res => res.json())
      .then(usersData => setUsers(usersData))
      .catch(error => console.error('Error fetching users:', error));

    // Récupérer les recettes depuis l'API Edamam (à remplacer par votre propre logique)
    fetch("https://api.edamam.com/api/recipes/v2?type=public&q=pasta&app_id=e55bf6d5&app_key=e176ce9b14274bbdf4e09253e178a7dc")
      .then(res => res.json())
      .then(recipesData => setRecipes(recipesData.hits))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage users={users} recipes={recipes} />} />
          <Route path="/recipes" element={<RecipePage />} />
          <Route path="/meal-plan" element={<MealPlan/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/physical-activities" element={<PhysicalActivity />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
