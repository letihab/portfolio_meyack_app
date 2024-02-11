import React from 'react';

function MealPlan() {
  return (
    <div className="meal-plan-page">
      <h2>Meal Plan</h2>
      <div className="meal-plan-details">
        <h3>Weekly Meal Plan</h3>
        <p>Monday: Breakfast - Oatmeal, Lunch - Salad, Dinner - Grilled Chicken</p>
        <p>Tuesday: Breakfast - Yogurt, Lunch - Sandwich, Dinner - Fish Tacos</p>
        <p>Wednesday: Breakfast - Smoothie, Lunch - Soup, Dinner - Pasta</p>
        {/* Ajoutez d'autres jours de la semaine ici */}
      </div>
    </div>
  );
}

export default MealPlan;
