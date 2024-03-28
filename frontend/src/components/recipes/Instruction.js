// Instruction.js
import React from 'react';
import '../../styles/recipedetails.css';

const Instruction = ({ instructions }) => {
  return (
    <div className="instructions">
      <h3>Instructions:</h3>
      <ol>
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default Instruction;
