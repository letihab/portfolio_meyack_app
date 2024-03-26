import React, { useState, useEffect } from 'react';
import '../styles/article.css';

const ProcessedFoods = () => {
  const [articleContent, setArticleContent] = useState({
    introduction: "**On retrouve des aliments transformés partout de nos jours. Ils sont pratiques, rapides à préparer et souvent savoureux. Mais savez-vous vraiment ce qu'ils contiennent ?**",
    developpement: "**Que sont les aliments transformés ?**\n\nUn aliment transformé est tout aliment qui a subi une modification par rapport à son état naturel. Cela peut inclure :\n\n* Le chauffage\n* La congélation\n* La mise en conserve\n* L'ajout d'ingrédients tels que le sucre, le sel, les huiles et les graisses\n* L'ajout d'additifs alimentaires tels que les conservateurs, les colorants et les arômes artificiels\n\n**Pourquoi limiter les aliments transformés ?**\n\nLes aliments transformés sont souvent riches en :\n\n* Sucres ajoutés : Une consommation excessive de sucre est associée à un risque accru de maladies chroniques telles que l'obésité, le diabète et les maladies cardiaques.\n* Sel : Un excès de sel peut entraîner une hypertension artérielle.\n* Graisses malsaines : Les gras saturés et trans, souvent présents dans les aliments transformés, peuvent augmenter le risque de maladies cardiaques.\n\n**Comment limiter les aliments transformés ?**\n\n* Cuisinez plus souvent à la maison : Cela vous permet de contrôler les ingrédients et de limiter le sel, le sucre et les graisses ajoutés.\n* Lisez les étiquettes nutritionnelles : Faites attention à la teneur en sucre, en sel et en graisses saturées avant d'acheter un produit transformé.\n* Optez pour des aliments frais et complets : Les fruits, les légumes, les céréales complètes et les viandes maigres sont d'excellentes alternatives aux aliments transformés.\n* Limitez les plats préparés et les fast-foods : Ces options sont souvent riches en calories, en sucre, en sel et en graisses malsaines.",
    conclusion: "**En conclusion, les aliments transformés peuvent faire partie d'une alimentation équilibrée, mais il est important de les consommer avec modération. Privilégiez les aliments frais et peu transformés pour une meilleure santé.**",
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
        <h1>Les aliments transformés à consommer avec modération !</h1>
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

export default ProcessedFoods;
