import React, { useContext } from 'react';

import classes from './loader.module.scss';

function LoadPage({ isFinished, children }) {
  return (
    <section
      style={{ display: isFinished ? 'none' : 'block' }}
      className={classes.loading}
    >
      {children}
    </section>
  );
}

export default LoadPage;
