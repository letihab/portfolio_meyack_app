import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MealPlan from './pages/MealPlan';
import PhysicalActivity from './pages/PhysicalActivity';
import UserProfilePage from './pages/UserProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import AuthenticationPage from './pages/AuthenticationPage';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeList from './components/RecipeList'; // Importez le composant RecipeList ici
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
          <Route path="/physical-activities" element={<PhysicalActivity />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/authentication" element={<AuthenticationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;

