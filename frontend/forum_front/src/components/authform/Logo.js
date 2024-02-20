import React from 'react';
import logo from '../../images/logoDark.svg';

function Logo() {
  return (
        <div className="container mb-3 d-flex justify-content-center">
            <img src={logo} className="img-fluid" style={{ maxWidth: '200px' }} alt='Логотип'/>
        </div>
    );
}

export default Logo