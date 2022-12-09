import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <ul className="navigation">
        <li>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
            title="Accueil"
          >
            Accueil
          </NavLink>
          <NavLink
            to="/produits"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
            title="Produits"
          >
            Produits
          </NavLink>
          <NavLink
            to="/a-propos"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
            title="A Propos"
          >
            A Propos
          </NavLink>
          <NavLink
            to="/contact"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
            title="Contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Nav;
