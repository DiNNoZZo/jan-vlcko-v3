import React, { useContext, useEffect, useState } from 'react';
import AnimationContext from '../../store/animation-context';
import classes from './loader.module.scss';

function LoadPage({ isFinished, children }) {
  const [isComplete, setIsComplete] = useState(isFinished);
  const animCtx = useContext(AnimationContext);

  return <section className={classes.loading}>{children}</section>;
}

export default LoadPage;
