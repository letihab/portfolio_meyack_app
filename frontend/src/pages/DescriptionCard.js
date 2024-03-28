import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

const DescriptionCard = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleRedirect = () => {
    setIsRedirecting(true);
  };

  useEffect(() => {
    if (isRedirecting) {
      window.location.href = "/authentication";
    }
  }, [isRedirecting]);

  return (
    <div className="description-card">
      <h3>Découvrez Meyack!</h3>
      <p>
        Meyack est une application web qui offre un choix de recettes saines, variées et équilibrées. L'utilisateur peut ajouter une ou plusieurs recettes comme favorite(s), planifier son repas pour la semaine, consulter toutes les recettes disponibles et les filtrer par son type d'alimentation.
      </p>
      <Link to="/authentication">
        <button onClick={handleRedirect}>
          Découvrir l'application
        </button>
      </Link>
      <Tooltip content={<img src="/images/apercu-page-destination.png" alt="Aperçu de la page de destination" />}>
        <button className="apercu-bouton">
          Aperçu
        </button>
      </Tooltip>
    </div>
  );
};

export default DescriptionCard;

