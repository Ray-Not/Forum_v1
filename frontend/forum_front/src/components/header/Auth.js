import React from 'react';

function UserMenu({ isAuthenticated, userImage }) {
  return (
    <div className="col-lg-4 col-md-12 d-flex justify-content-center align-items-center">
      <button type="button" className="btn btn-outline-dark me-2">Авторизация</button>
      <button type="button" className="btn btn-dark">Регистрация</button>
    </div>
  );
}

export default UserMenu;
