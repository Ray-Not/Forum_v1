import React from 'react';
import { Link } from 'react-router-dom';

function UserMenu() {
  return (
    <div className="col-lg-4 col-md-12 d-flex justify-content-center align-items-center">
      <Link to="/signin" className="btn btn-dark-dark me-2">Авторизация</Link>
      <Link to="/signup" className="btn btn-dark">Регистрация</Link>
    </div>
  );
}

export default UserMenu;
