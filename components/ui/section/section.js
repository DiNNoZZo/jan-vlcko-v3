import React from 'react';

import classes from './section.module.scss';

function Section({ styles, flexRow, children }) {
  return (
    <section
      style={{ ...styles }}
      className={`${
        flexRow
          ? `${classes.section} ${classes['section--flex__row']}`
          : `${classes.section}`
      }`}
    >
      {children}
    </section>
  );
}

export default Section;
