import React from 'react';
import { NavLink } from 'react-router-dom';

const ItemsHeader = () => {
  return (
    <>
      <ul className="infos">
        <li>
          <NavLink className="info">
            <i className="fas fa-shopping-bag" title="Panier"></i>{' '}
            <span>Panier (0)</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="info">
            <i
              className="fas fa-user-astronaut astronaut"
              title="Connexion"
            ></i>{' '}
            <span>Connexion</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default ItemsHeader;
