import React from 'react';
import Infos from '../Infos/Infos';
import Nav from '../nav/Nav';
import Logo from '../logo/Logo';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__content">
          <div className="header__content-toggle">
            <button>Menu</button>
          </div>
          <Logo />
          <div className="header__content-nav">
            <Nav />
            <Infos />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
