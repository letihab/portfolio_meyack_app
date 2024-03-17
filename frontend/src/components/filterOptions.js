import React, { useState } from 'react';

function FilterOptions({ onChange }) {
  const [filters, setFilters] = useState({
    vegan: false,
    glutenFree: false,
    salad: false,
    highProtein: false,
  });

  const handleFilterChange = (filter) => {
    setFilters({ ...filters, [filter]: !filters[filter] });
  };

  const applyFilters = () => {
    // Appeler la fonction de rappel onChange avec les filtres sélectionnés
    onChange(filters);
  };

  return (
    <div>
      <h2>Filtrer les recettes par :</h2>
      <label>
        <input
          type="checkbox"
          checked={filters.vegan}
          onChange={() => handleFilterChange('vegan')}
        />
        Vegan
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={filters.glutenFree}
          onChange={() => handleFilterChange('glutenFree')}
        />
        Sans gluten
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={filters.salad}
          onChange={() => handleFilterChange('salad')}
        />
        salad
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={filters.highProtein}
          onChange={() => handleFilterChange('highProtein')}
        />
        Riche en protéine
      </label>
      <br />
      <button onClick={applyFilters}>Appliquer les filtres</button>
    </div>
  );
}

export default FilterOptions;
