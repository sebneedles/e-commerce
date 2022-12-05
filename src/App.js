import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Product from './pages/products/Product';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Error from './pages/error/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/accueil" element={<Home />} />
          <Route path="/produits" element={<Products />} />
          <Route path="/article/:id" element={<Product />} />
          <Route path="/article/:id/*" element={<Error />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
