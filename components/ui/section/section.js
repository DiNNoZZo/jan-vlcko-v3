import React from 'react';

import classes from './section.module.scss';

function Section(props) {
  return (
    <section
      style={{ ...props.styles }}
      className={`${
        props.flexRow
          ? `${classes.section} ${classes['section--flex__row']}`
          : `${classes.section}`
      }`}
    >
      {props.children}
    </section>
  );
}

export default Section;
