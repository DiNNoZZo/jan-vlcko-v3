import React from 'react';

import classes from './portfolio.module.scss';

function Portfolio() {
  return (
    <ul className={classes.portfolio}>
      <li className={classes.portfolio__item}>
        <img
          className={classes.portfolio__img}
          src="/img/cat-1.jpg"
          alt="cat"
        ></img>
      </li>
      <li className={classes.portfolio__item}>
        <img
          className={classes.portfolio__img}
          src="/img/cat-2.jpg"
          alt="cat"
        ></img>
      </li>
      <li className={classes.portfolio__item}>
        <img
          className={classes.portfolio__img}
          src="/img/cat-3.jpg"
          alt="cat"
        ></img>
      </li>
      <li className={classes.portfolio__item}>
        <img
          className={classes.portfolio__img}
          src="/img/cat-4.jpg"
          alt="cat"
        ></img>
      </li>
      <li className={classes.portfolio__item}>
        <img
          className={classes.portfolio__img}
          src="/img/cat-5.jpg"
          alt="cat"
        ></img>
      </li>
    </ul>
  );
}

export default Portfolio;
