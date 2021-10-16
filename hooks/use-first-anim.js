import { useEffect, useState, useRef } from 'react';

import animation from '../components/titles/animation-title.module.scss';
////////////////////////////////
// Open animation for the Titles

function useOnScreen(options) {
  const [delay, setDelay] = useState(1000);
  const ref = useRef();

  useEffect(() => {
    const arrElements = Array.from(ref.current.children);
    let timerAdd, timerRemove;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      arrElements.forEach((element, i) => {
        timerAdd = window.setTimeout(() => {
          element.classList.add(animation['first-load']);
          element.style.opacity = 1;

          timerRemove = window.setTimeout(() => {
            element.classList.remove(animation['first-load']);
          }, delay + i * 50);
        }, delay + i * 100);
      });

      observer.unobserve(entry.target);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      window.clearTimeout(timerAdd);
      window.clearTimeout(timerRemove);
    };
  }, [ref, options, delay]);

  return [ref];
}

export default useOnScreen;
