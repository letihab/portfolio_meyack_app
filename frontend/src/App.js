import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MealPlan from './pages/MealPlan';
import Conseils from './pages/Conseils';
import Hydratation from './pages/Hydratation';
import Foodprocess from './pages/Foodprocess';
import UserProfilePage from './pages/UserProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeList from './components/RecipeList';
import LoginForm from './pages/LoginForm'; // Ajout de l'import du composant LoginForm
import CreateAccountForm from './pages/CreateAccountForm'; // Ajout de l'import du composant CreateAccountForm
import './styles/styles.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<RecipeList/>} />
          <Route path="/meal-plan" element={<MealPlan/>} />
          <Route path="/article" element={<Conseils />} />
          <Route path="/hydration" element={<Hydratation />} />
          <Route path="/food-process" element={<Foodprocess />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/login" element={<LoginForm />} /> {/* Ajout de la route vers la page de connexion */}
          <Route path="/authentication" element={<CreateAccountForm />} /> {/* Ajout de la route vers la page de création de compte */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
