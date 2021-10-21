import React from 'react';
import Image from 'next/image';

import spinner from '/public/Spinner.svg';
import classes from './loader.module.scss';

function Loader() {
  return (
    <Image
      className={classes.loader}
      src={spinner}
      width={80}
      height={80}
      alt="Loading..."
    ></Image>
  );
}

export default Loader;
