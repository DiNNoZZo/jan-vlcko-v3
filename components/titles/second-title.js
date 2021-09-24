import React from 'react';

import classes from './second-title.module.scss';

function SecondTitle(props) {
  const title = props.title.split('');
  return (
    <h2 className={classes.second__title}>
      {title.map((letter, i) => (
        <span key={i} className="blast">
          {letter}
        </span>
      ))}
    </h2>
  );
}

export default SecondTitle;
