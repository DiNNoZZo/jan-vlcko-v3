import React, { Fragment } from 'react';

import classes from './j-logo.module.scss';

function JLogo(props) {
  return (
    <Fragment>
      <span
        className={props.title ? classes['title--back'] : classes['logo--back']}
      >
        J
      </span>
      <span
        className={
          props.title ? classes['title--front'] : classes['logo--front']
        }
      >
        J
      </span>
    </Fragment>
  );
}

export default JLogo;
