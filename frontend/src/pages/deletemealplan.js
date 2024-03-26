import React from 'react';

function DeleteMealPlan({ mealPlan, onDelete }) {
  const handleDelete = () => {
    // Appeler la fonction de suppression passée en props
    onDelete(mealPlan.id);
  };

  return (
    <div>
      <h2>Supprimer le plan de repas</h2>
      <p>Date: {mealPlan.date}</p>
      {/* Afficher d'autres détails du plan de repas */}
      <button onClick={handleDelete}>Supprimer</button>
    </div>
  );
}

export default DeleteMealPlan;
