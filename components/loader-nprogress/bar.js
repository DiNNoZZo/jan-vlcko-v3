import React from 'react';

import classes from './loader.module.scss';

const Bar = ({ animationDuration, progress }) => {
  console.log('bar');
  return (
    <div className={classes.bar__bg}>
      <div
        className={classes.bar}
        style={{
          height: 2,
          marginLeft: `${(-1 + progress) * 100}%`,

          transition: `margin-left ${animationDuration}ms linear`,

          zIndex: 1031,
        }}
      ></div>
    </div>
  );
};

export default Bar;
