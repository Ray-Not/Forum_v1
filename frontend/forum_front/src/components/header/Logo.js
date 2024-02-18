import React from 'react';
import logo from '../../images/logo.svg';

function Logo() {
  return (
    <div className="col-lg-4 col-md-12 d-flex justify-content-center align-items-center">
      <a href="/">
        <img src={logo} style={{ maxWidth: '70px', maxHeight: '70px' }} alt="Логотип" />
      </a>
    </div>
  );
}

export default Logo;