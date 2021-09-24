import React from 'react';

import classes from './text-area.module.scss';

function TextArea(props) {
  return (
    <div
      className={`${
        props.styles
          ? `${props.styles} ${classes.text__area}`
          : `${classes.text__area}`
      }`}
    >
      {props.children}
    </div>
  );
}

export default TextArea;
