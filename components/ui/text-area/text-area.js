import React from 'react';

import classes from './text-area.module.scss';

function TextArea({ style, otherClasses, children }) {
  return (
    <div
      style={{ ...style }}
      className={`${
        otherClasses
          ? `${otherClasses} ${classes.text__area}`
          : `${classes.text__area}`
      }`}
    >
      {children}
    </div>
  );
}

export default TextArea;
