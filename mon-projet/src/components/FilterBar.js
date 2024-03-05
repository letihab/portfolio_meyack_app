import React from 'react';

function FilterBar({ onFilterChange }) {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    onFilterChange(name, value);
  };

  return (
    <div className="filter-bar">
      <label htmlFor="mealType">Meal Type:</label>
      <select name="mealType" onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        {/* Autres options de type de repas/plat */}
      </select>

      {/* Autres filtres comme la cuisine, le régime alimentaire, la santé, les allergies, etc. */}
    </div>
  );
}

export default FilterBar;
