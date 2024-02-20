import React from 'react';
import NavigateItem from './NavigateItem';

function Navigation() {
  const navi_list = ['Новости', 'Форум', 'Донат', 'Команда'];
  return (
    <div className="col-lg-4 col-sm-12 mt-sm-2 d-flex justify-content-center align-items-center">
      <NavigateItem content={navi_list}/>
    </div>
  );
}

export default Navigation;
