import React, { useRef } from 'react';

import AnimationTitle from './hover-anim-title';
import useOnScreen from '../../hooks/use-first-anim';

import classes from './second-title.module.scss';
import animation from './animation-title.module.scss';

function SecondTitle(props) {
  const [ref] = useOnScreen({ root: null, threshold: 0.2 });
  const title = props.title.split('');
  return (
    <h2 ref={ref} className={classes.second__title}>
      {title.map((letter, i) => (
        <AnimationTitle key={i} className={animation.blast}>
          {letter}
        </AnimationTitle>
      ))}
    </h2>
  );
}

export default SecondTitle;
