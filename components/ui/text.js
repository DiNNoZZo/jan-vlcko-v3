import React from 'react';
import 'aos/dist/aos.css';

import classes from './text.module.scss';

function Text(props) {
  const dataAos = props['data-aos'] ? props['data-aos'] : null;
  return (
    <p data-aos={dataAos} className={classes.text}>
      {props.children}
    </p>
  );
}

export default Text;
