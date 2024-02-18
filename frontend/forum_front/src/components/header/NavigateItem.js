import React from 'react';

function NavigateItem(props) {
    const listItems = props.name.map((name) =>
        <li key={name.toString()} class="nav-link px-2 text-dark bg-light">
        {name}
        </li>
    );
  return (
    <ul class="nav flex-lg-row flex-md-column flex-column text-center">
        {listItems}
    </ul>
  );
}

export default NavigateItem;
