import React, { useState } from 'react';
import '../styles/FilterOptions.css';

function FilterOptions({ onChange }) {
  const [filters, setFilters] = useState({
    vegan: false,
    glutenFree: false,
    highProtein: false,
  });

  const handleFilterChange = (filter) => {
    setFilters({ ...filters, [filter]: !filters[filter] });
  };

  const applyFilters = () => {
    onChange(filters);
  };

  return (
    <div className="filter-options-container">
      <h2>Filtre:</h2>
      <div className="filter-options"> {/* New container for horizontal alignment */}
        <label className="checkbox-label">
          <input
            type="checkbox"
            className="checkbox-input"
            checked={filters.vegan}
            onChange={() => handleFilterChange('vegan')}
          />
          Vegan
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            className="checkbox-input"
            checked={filters.glutenFree}
            onChange={() => handleFilterChange('glutenFree')}
          />
          Sans gluten
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            className="checkbox-input"
            checked={filters.highProtein}
            onChange={() => handleFilterChange('highProtein')}
          />
          Riche en protéine
        </label>
      </div>
      <button className="apply-button" onClick={applyFilters}>
        Appliquer les filtres
      </button>
    </div>
  );
}

export default FilterOptions;