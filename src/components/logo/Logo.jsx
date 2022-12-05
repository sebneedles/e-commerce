import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <>
      <div className="content__logo">
        <NavLink to="/">
          <i className="fas fa-desktop logo"></i>
        </NavLink>
        <p className="text">SuperShop</p>
      </div>
    </>
  );
};

export default Logo;
