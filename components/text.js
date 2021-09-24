import React from 'react';

import classes from './text.module.scss';

function Text(props) {
  return <p className={classes.text}>{props.children}</p>;
}

export default Text;
