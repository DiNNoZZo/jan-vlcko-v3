import React, { Fragment, useEffect, useState, useRef } from 'react';

import JLogo from '../j-logo/j-logo';
import AnimationTitle from './hover-anim-title';
import useOnScreen from '../../hooks/use-first-anim';

import classes from './main-title.module.scss';
import animation from './animation-title.module.scss';

function MainTitle() {
  const [anim, setAnim] = useState(`${animation.blast}`);
  const [ref] = useOnScreen({ root: null, threshold: 0.2 });

  return (
    <Fragment>
      <h1 ref={ref} className={`title blast-anim ${classes['title--primary']}`}>
        <AnimationTitle className={anim}>A</AnimationTitle>
        <AnimationTitle className={anim}>h</AnimationTitle>
        <AnimationTitle className={anim}>o</AnimationTitle>
        <AnimationTitle className={anim}>j</AnimationTitle>
        <AnimationTitle className={anim}>,</AnimationTitle>
        <br />
        <AnimationTitle className={anim}>s</AnimationTitle>
        <AnimationTitle className={anim}>o</AnimationTitle>
        <AnimationTitle className={anim}>m</AnimationTitle>
        &nbsp;
        <div className={`${classes['title-j']}`}>
          <JLogo title={true} />
        </div>
        <AnimationTitle className={anim}>á</AnimationTitle>
        <AnimationTitle className={anim}>n</AnimationTitle>
        <AnimationTitle className={anim}>,</AnimationTitle>
        <br />
        <AnimationTitle className={anim}>W</AnimationTitle>
        <AnimationTitle className={anim}>e</AnimationTitle>
        <AnimationTitle className={anim}>b</AnimationTitle>
        &nbsp;
        <AnimationTitle className={anim}>D</AnimationTitle>
        <AnimationTitle className={anim}>e</AnimationTitle>
        <AnimationTitle className={anim}>v</AnimationTitle>
        <AnimationTitle className={anim}>e</AnimationTitle>
        <AnimationTitle className={anim}>l</AnimationTitle>
        <AnimationTitle className={anim}>o</AnimationTitle>
        <AnimationTitle className={anim}>p</AnimationTitle>
        <AnimationTitle className={anim}>e</AnimationTitle>
        <AnimationTitle className={anim}>r</AnimationTitle>
      </h1>
    </Fragment>
  );
}

export default MainTitle;
