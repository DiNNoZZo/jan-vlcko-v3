import React, { useEffect } from 'react';

import animation from '../components/titles/animation-title.module.scss';

function useTitleHoverAnim({ letter, isHovered, timing }) {
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
}

export default useTitleHoverAnim;
