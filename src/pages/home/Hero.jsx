import React from 'react';
import HeroImg from '../../assets/hero-homepage.jpg';

const Hero = () => {
  return (
    <>
      <div className="hero">
        <img
          src={HeroImg}
          alt="Femme dans un canapé qui fait une commande en ligne"
        />
        <div className="hero__group">
          <h1>Votre nouvelle boutique en ligne</h1>
          <button className="btn">Voir nos produits</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
