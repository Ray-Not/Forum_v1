import React from 'react';

function NavigateItem(props) {
    const listItems = props.content.map((content) =>
        <li key={content.toString()} className="nav-link px-2 text-dark bg-light">
        {content}
        </li>
    );
  return (
    <ul className="nav flex-lg-row flex-md-column flex-column text-center">
        {listItems}
    </ul>
  );
}

export default NavigateItem;
