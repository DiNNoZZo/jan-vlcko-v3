import React from 'react';

import classes from './section.module.scss';

function Section(props) {
  return (
    <section
      className={`${
        props.styles
          ? `${props.styles} ${classes.section}`
          : `${classes.section}`
      }`}
    >
      {props.children}
    </section>
  );
}

export default Section;
