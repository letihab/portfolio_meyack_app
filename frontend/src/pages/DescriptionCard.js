import React from 'react';

import { TooltipProvider } from 'react-tooltip';

const DescriptionCard = () => {
  return (
    <div className="description-card">
      <h3>Découvrez Meyack!</h3>
      <p>
        Meyack est une application web qui offre un choix de recettes saines, variées et équilibrées. l'utilisateur
        peut ajouter une ou plusieurs recettes comme favorie(s), planifier son repas pour la semaine, consulter toutes les recettes
        disponible et les filtrer par son type d'alimentation.
      </p>
      <button data-tip="Aperçu de la page de destination"
      data-for="description-card-tooltip"
      className="en-savoir-plus">
      Découvrir l'application
      </button>

    <TooltipProvider id="description-card-tooltip">
      <img src="/images/apercu-page-destination.png" alt="Aperçu de la page de destination" />
    </TooltipProvider>

    </div>
  );
};

export default DescriptionCard;
