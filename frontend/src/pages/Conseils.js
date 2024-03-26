import React, { useState, useEffect } from 'react';
import '../styles/article.css';

const Advice = () => {
  const [articleContent, setArticleContent] = useState({
    introduction: "**Saviez-vous qu'une alimentation saine peut améliorer votre santé mentale et physique de manière significative ? Découvrez les secrets d'une vie meilleure dans cet article.**",
    developpement: "**Les bienfaits d'une alimentation saine**\n\n* **Amélioration de la santé mentale:** Une alimentation riche en fruits et légumes peut améliorer l'humeur, réduire le stress et l'anxiété. **Exemple :** Une étude a révélé que les personnes qui consommaient plus de fruits et légumes avaient un risque de dépression 30% plus bas.\n* **Augmentation de l'énergie:** Des aliments riches en fibres et en protéines vous procurent une énergie durable tout au long de la journée. **Exemple :** Privilégiez les aliments complets comme le riz brun et les flocons d'avoine pour une énergie matinale durable.\n* **Amélioration de la concentration:** Une alimentation saine nourrit votre cerveau et favorise la concentration. **Exemple :** Des études ont montré que les enfants qui mangent un petit-déjeuner sain ont de meilleurs résultats scolaires.\n\n**Les principes d'une alimentation saine**\n\n* Manger varié et équilibré : Il est important de manger des aliments de tous les groupes alimentaires (fruits, légumes, céréales, produits laitiers, viande, poisson et œufs) pour obtenir tous les nutriments dont nous avons besoin.\n* Manger des aliments riches en nutriments : Privilégiez les aliments riches en fibres, en vitamines et en minéraux.\n* Limiter la consommation d'aliments transformés : Les aliments transformés sont souvent riches en sucres ajoutés, en graisses saturées et en sodium, qui peuvent être néfastes pour la santé.\n* Boire suffisamment d'eau : L'eau est essentielle pour le bon fonctionnement de l'organisme. Il est recommandé de boire environ 1,5 litre d'eau par jour.\n\n**Conseils pour adopter une alimentation saine**\n\n* Planifiez vos repas : Cela vous aidera à faire des choix sains et à éviter les fringales.\n* Faites vos courses en ayant faim : Cela vous évitera d'acheter des aliments malsains dont vous n'avez pas besoin.\n* Cuisinez chez vous : Cela vous permet de contrôler les ingrédients et de préparer des repas sains et savoureux.\n* Lisez les étiquettes alimentaires : Faites attention à la teneur en calories, en sucres ajoutés, en graisses saturées et en sodium.\n* Mangez en pleine conscience : Prenez le temps de savourer votre repas et de manger sans distractions.",
    conclusion: "**Prêt à adopter une alimentation saine et à améliorer votre vie ? Commencez dès aujourd'hui en suivant les conseils de cet article et en explorant les ressources supplémentaires disponibles.**\n\n**Pour plus d'informations, consultez les sites Web suivants :**\n\n* https://www.mangerbouger.fr/\n* https://www.anses.fr/fr/content/l%E2%80%99alimentation-saine",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/article");
      const data = await response.json();
      setArticleContent(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Manger sainement pour une vie meilleure</h1>
      </header>

      <main>
        <Introduction content={articleContent.introduction} />
        <Developpement content={articleContent.developpement} />
        <Conclusion content={articleContent.conclusion} />
      </main>

      <footer>
        <p>
          © 2023 - Tous droits réservés.
        </p>
      </footer>
    </div>
  );
};

const Introduction = ({ content }) => {
  return (
    <section className="introduction">
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </section>
  );
};

const Developpement = ({ content }) => {
  return (
    <section className="developpement">
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </section>
  );
};

const Conclusion = ({ content }) => {
  return (
    <section className="conclusion">
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </section>
  );
};

export default Advice;
