import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import Auth from './Auth';

function Header() {
  return (
    <header>
      <div className="row p-3 mx-auto bg-light">
        <Logo />
        <Navigation />
        <Auth />
      </div>
    </header>
  );
}

export default Header;
