import React, { useState, useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import '../styles/home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery'; // Import jQuery
import 'slick-carousel'; // Import Slick
import DescriptionCard from './DescriptionCard';


const HomePage = () => {

  const [images] = useState([
    { src: 'images/image1.jpg', alt: 'Titre de la recette 1' },
    { src: 'images/image2.jpg', alt: 'Titre de la recette 2' },
    { src: 'images/image3.jpg', alt: 'Titre de la recette 3' },
    { src: 'images/ndole.png', alt: 'Titre de la recette 3' },
    { src: 'images/image9.jpg', alt: 'Titre de la recette 3' },
    { src: 'images/image7.jpg', alt: 'Titre de la recette 3' },
  ]);

  const carouselRef = useRef(null);

  useEffect(() => {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    $(carouselRef.current).slick({
      ...settings,
    });
  }, []); // Run only once after initial render

    // Fonction appelée lorsque le bouton "Lire plus" est cliqué
    function handleLirePlus() {
      // Ajoutez ici le code que vous souhaitez exécuter lorsque le bouton est cliqué
      window.location.href = "/article";
    }
    function handleLire() {
      // Ajoutez ici le code que vous souhaitez exécuter lorsque le bouton est cliqué
      window.location.href = "/hydration";
    }
    function handlePlus() {
      window.location.href = "/food-process";
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici votre logique pour soumettre l'email
    const email = e.target.email.value;
    console.log('Email soumis :', email);
    // Réinitialisez l'état de l'email après la soumission
    e.target.reset();
  };

  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li><a href="#featured-recipes">Recettes en vedette</a></li>
            <li><a href="#latest-users">Derniers utilisateurs</a></li>
            <li><a href="#health-tips">Conseils santé</a></li>
            <li><a href="#newsletter">S'abonner à la newsletter</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="featured-recipes">
          <h2>Plats en vedette</h2>
          <div ref={carouselRef} className="carousel">
            {images.map((image) => (
              <div key={image.src}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
          {/* Ajoutez des descriptions ou des liens vers les recettes ci-dessous le carrousel */}
          <DescriptionCard />
        </section>

        <section id="latest-users">
          <h2>Derniers utilisateurs</h2>
          <div className="testimonials">
            {/* Remplacez ce commentaire par vos témoignages d'utilisateurs */}
            <p>
              "J'adore cette plateforme ! Les recettes sont faciles à suivre et délicieuses." - Sarah L.
            </p>
            {/* Ajoutez plus de témoignages ici */}
          </div>
        </section>

        <section id="health-tips">
          <h2>Conseils rééquilibrage alimentaire</h2>
          <div className="articles">
            {/* Carte 1 */}
            <div className="article-mignon">
              <img src="images/fruits-legumes.jpg" alt="Mangez des fruits et légumes frais !" />
              <h3>Miam miam, fruits et légumes !</h3>
              <p>C'est l'heure de faire le plein de vitamines ! Mangez des fruits et légumes de toutes les couleurs pour être en pleine forme et avoir de l'énergie pour toute la journée ! </p>
              <button className="lire-plus-mignon" onClick={handleLirePlus}>Découvrir des recettes gourmandes</button>
            </div>

            {/* Carte 2 */}
            <div className="article-mignon">
              <img src="images/eau.jpg" alt="Buvez de l'eau !" />
              <h3>Glouglou, c'est l'eau !</h3>
              <p>Restez hydratés pour une meilleure énergie et une peau éclatante ! N'oubliez pas de boire de l'eau tout au long de la journée. </p>
              <button className="lire-plus-mignon" onClick={handleLire}>Conseils pour boire plus d'eau</button>
            </div>

            {/* Carte 3 */}
            <div className="article-mignon">
              <img src="images/aliments-transformes.jpg" alt="Évitez les aliments transformés !" />
              <h3>Bye bye, aliments transformés !</h3>
              <p>Évitez les aliments transformés et privilégiez les aliments frais et non transformés. Ils sont plus riches en nutriments essentiels et meilleurs pour votre santé globale.</p>
              <button className="lire-plus-mignon" onClick={handlePlus}>En savoir plus sur les aliments sains</button>
            </div>
          </div>
        </section>

        <section id="newsletter" className="newsletter-section" >
          <h2>S'abonner à la newsletter</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Votre email :</label>
            <input type="email" id="email" name="email" required />
            <button type="submit">S'abonner</button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
