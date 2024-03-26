import React, { useState, useEffect } from 'react';
import '../styles/article.css';

const Hydratation = () => {
    const [articleContent, setArticleContent] = useState({
      introduction: "**L'eau est essentielle à la vie.** Elle représente environ 60% du poids corporel d'un adulte et est impliquée dans de nombreuses fonctions vitales, telles que la régulation de la température corporelle, le transport des nutriments et l'élimination des déchets.",
      developpement: "**Combien d'eau faut-il boire ?**\n\nLes besoins en eau varient d'une personne à l'autre, mais il est généralement recommandé de boire environ 1,5 litre d'eau par jour. Cette quantité peut être augmentée en cas d'activité physique intense, de chaleur ou de grossesse.\n\n**Signes de déshydratation**\n\nLa soif est le signe le plus courant de déshydratation. D'autres signes peuvent inclure :\n\n* Fatigue\n* Maux de tête\n* Vertiges\n* Constipation\n* Peau sèche\n\n**Conseils pour rester hydraté**\n\n* Buvez de l'eau tout au long de la journée, même si vous n'avez pas soif.\n* Emportez une bouteille d'eau avec vous partout où vous allez.\n* Buvez avant, pendant et après l'exercice physique.\n* Privilégiez les fruits et légumes riches en eau.\n* Limitez la consommation de boissons alcoolisées et caféinées, qui peuvent déshydrater l'organisme.",
      conclusion: "**En conclusion, il est important de boire suffisamment d'eau tout au long de la journée pour rester hydraté et en bonne santé.**",
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
          <h1>L'importance de l'hydratation</h1>
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
  
  export default Hydratation;
  