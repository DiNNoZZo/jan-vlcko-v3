import React, { useState } from 'react';
import Link from 'next/link';

import classes from './button.module.scss';

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.link}>{props.children}</a>
      </Link>
    );
  }

  if (props.href) {
    return (
      <Link href={props.href}>
        <a target={props.blank ? '_blank' : null} className={classes.btn}>
          {props.children}
        </a>
      </Link>
    );
  }

  return (
    <button
      style={{ ...props.styles }}
      className={classes.btn}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
