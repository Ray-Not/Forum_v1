import React from 'react';

function HelpText(props) {
  return (
    <div className="col-12 text-center mt-2">
      <p className="text-secondary">{props.content} <a className="text-white" href='/'>{props.linkContent}</a></p>
    </div>
  )
}

export default HelpText