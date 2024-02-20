import React from 'react';
import './text.css';

function Text (props) {
    return(
        <p className={props.className}>
            {props.content}
        </p>
    );
}

export default Text