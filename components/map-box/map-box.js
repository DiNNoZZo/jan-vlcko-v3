import React from 'react';
import Image from 'next/image';

import classes from './map-box.module.scss';
import 'aos/dist/aos.css';

function MapBox(props) {
  const dataAos = props['data-aos'] ? props['data-aos'] : null;
  return <div data-aos={dataAos} className={classes.image__container}></div>;
}

export default MapBox;
