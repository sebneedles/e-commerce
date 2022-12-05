import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {} from 'react-router-dom';

const Products = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Nos Produits</h1>
        <div className="products">
          <div className="card__products">
            <figure className="card__products-thumb">
              <img className="image" src="" alt="" />
              <figcaption>
                <h3 className="title__card">title</h3>
                <p className="price"> €</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Products;
