import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Hero from './Hero';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <section className="home"></section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
