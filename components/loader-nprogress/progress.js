import React, { useContext, useEffect } from 'react';
import { useNProgress } from '@tanem/react-nprogress';
import AnimationContext from '../../store/animation-context';

import Container from './container';
import Bar from './bar';
import LoadPage from './load-page';
import JLogo from '../j-logo/j-logo';

import classes from './loader.module.scss';

const Progress = ({ isRouteChanging }) => {
  const animCtx = useContext(AnimationContext);
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating: isRouteChanging,
  });

  useEffect(() => {}, []);

  return (
    <LoadPage isFinished={isFinished}>
      <Container animationDuration={animationDuration} isFinished={isFinished}>
        <div className={classes.logo}>
          <JLogo />
        </div>
        <p className={classes.loading__text}>Smoothy loading, just wait...</p>
        <Bar animationDuration={animationDuration} progress={progress} />
      </Container>
    </LoadPage>
  );
};

export default Progress;
