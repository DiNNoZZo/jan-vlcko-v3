import React, { useState } from 'react';

import AnimationTitle from './hover-anim-title';
import useOnScreen from '../../hooks/use-first-anim';

import classes from './second-title.module.scss';
import animation from './animation-title.module.scss';

function SecondTitle({ title }) {
  const [ref] = useOnScreen({ root: null, threshold: 0.2 });
  const [currTitle, setCurrTitle] = useState(title.split(''));

  return (
    <h2 ref={ref} className={`${animation.title} ${classes.second__title}`}>
      {currTitle.map((letter, i) => (
        <AnimationTitle key={i} className={animation.blast}>
          {letter}
        </AnimationTitle>
      ))}
    </h2>
  );
}

export default SecondTitle;
