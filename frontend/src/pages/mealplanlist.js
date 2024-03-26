import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MealPlanList() {
  const [mealPlans, setMealPlans] = useState([]);

  useEffect(() => {
    fetchMealPlans();
  }, []);

  const fetchMealPlans = async () => {
    try {
      const response = await axios.get('/api/meal-plans');
      setMealPlans(response.data);
    } catch (error) {
      console.error('Error fetching meal plans:', error);
    }
  };

  return (
    <div>
      <h2>Meal Plans</h2>
      <ul>
        {mealPlans.map(mealPlan => (
          <li key={mealPlan._id}>
            <p>Date: {mealPlan.date}</p>
            <p>Meals:</p>
            <ul>
              {mealPlan.meals.map((meal, index) => (
                <li key={index}>
                  <p>{meal.day}</p>
                  <p>Breakfast: {meal.breakfast}</p>
                  <p>Lunch: {meal.lunch}</p>
                  <p>Dinner: {meal.dinner}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealPlanList;
