import React, { useState, useEffect } from 'react';

function MealPlan() {
  // State pour stocker les repas du plan
  const [mealPlan, setMealPlan] = useState([]);

  // Effet pour charger les repas du plan à partir de l'API
  useEffect(() => {
    // Fonction pour charger les repas du plan depuis l'API
    const fetchMealPlan = async () => {
      try {
        // Effectuer une requête à l'API pour récupérer les repas du plan
        const response = await fetch('URL_DE_VOTRE_API_MEAL_PLAN');
        const data = await response.json();
        // Mettre à jour le state avec les données récupérées
        setMealPlan(data);
      } catch (error) {
        console.error('Erreur lors du chargement des repas du plan:', error);
      }
    };

    // Appeler la fonction pour charger les repas du plan
    fetchMealPlan();
  }, []);

  return (
    <div className="meal-plan-page">
      <h2>Meal Plan</h2>
      <div className="meal-plan-list">
        {mealPlan.map((meal, index) => (
          <div key={index} className="meal-item">
            <h3>{meal.name}</h3>
            <p>{meal.description}</p>
            <p>{meal.ingredients}</p>
            {/* Afficher d'autres détails du repas si nécessaire */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MealPlan;