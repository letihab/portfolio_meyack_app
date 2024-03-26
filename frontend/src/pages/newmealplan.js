import React, { useState } from 'react';

function CreateMealPlan({ onCreate }) {
  const [date, setDate] = useState('');

  const handleCreate = () => {
    // Valider les données du formulaire

    // Créer un nouveau plan de repas
    const newMealPlan = {
      date: date,
      // Autres champs du plan de repas
    };

    // Appeler la fonction de création passée en props
    onCreate(newMealPlan);

    // Réinitialiser les champs du formulaire après la création
    setDate('');
    // Réinitialiser d'autres champs si nécessaire
  };

  return (
    <div>
      <h2>Créer un nouveau plan de repas</h2>
      <input
        type="text"
        value={date}
        onChange={e => setDate(e.target.value)}
        placeholder="Date"
      />
      {/* Ajouter d'autres champs pour le plan de repas */}
      <button onClick={handleCreate}>Créer</button>
    </div>
  );
}

export default CreateMealPlan;
