import React from 'react';

import classes from './loader.module.scss';

const Container = ({ animationDuration, children, isFinished }) => (
  <div
    className={classes.container}
    style={{
      pointerEvents: 'none',
      transition: `opacity ${animationDuration}ms linear`,
    }}
  >
    {children}
  </div>
);

export default Container;
