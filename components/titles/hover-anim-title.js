import React, { useEffect, useState, useRef } from 'react';
import animation from './animation-title.module.scss';

function AnimationTitle({ timing = 600, children, className }) {
  const [isHovered, setIsHovered] = useState(false);
  const letter = useRef();

  useEffect(() => {
    if (!isHovered) return;
    letter.current.classList.add(animation['rubber-band']);

    const timeOutId = window.setTimeout(() => {
      setIsHovered(false);
      letter.current.classList.remove(animation['rubber-band']);
    }, timing);

    return () => {
      window.clearTimeout(timeOutId);
    };
  }, [isHovered, timing]);

  const hoveredHandler = () => {
    setIsHovered(true);
  };

  return (
    <span ref={letter} onMouseEnter={hoveredHandler} className={className}>
      {children}
    </span>
  );
}

export default AnimationTitle;
