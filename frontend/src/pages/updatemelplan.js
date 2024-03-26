import React, { useState } from 'react';

function UpdateMealPlan({ mealPlan, onUpdate }) {
  const [date, setDate] = useState(mealPlan.date);

  const handleUpdate = () => {
    // Valider les données du formulaire

    // Mettre à jour le plan de repas
    const updatedMealPlan = {
      ...mealPlan,
      date: date,
      // Autres champs du plan de repas
    };

    // Appeler la fonction de mise à jour passée en props
    onUpdate(updatedMealPlan);
  };

  return (
    <div>
      <h2>Mettre à jour le plan de repas</h2>
      <input
        type="text"
        value={date}
        onChange={e => setDate(e.target.value)}
        placeholder="Date"
      />
      {/* Ajouter d'autres champs pour le plan de repas */}
      <button onClick={handleUpdate}>Mettre à jour</button>
    </div>
  );
}

export default UpdateMealPlan;
