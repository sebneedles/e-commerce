import React from 'react';
import { NavLink } from 'react-router-dom';

const ItemsHeader = () => {
  return (
    <>
      <ul className="infos">
        <li>
          <NavLink className="info" title="Panier">
            <i className="fas fa-shopping-bag"></i>
            <span>(0)</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="info" title="Profile">
            <i className="fas fa-user-astronaut astronaut"></i>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default ItemsHeader;
