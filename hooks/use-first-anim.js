import { useEffect, useState, useRef, useContext } from 'react';
import AnimationContext from '../store/animation-context';
import animation from '../components/titles/animation-title.module.scss';
////////////////////////////////
// Open animation for the Titles

function useOnScreen(options) {
  const animCtx = useContext(AnimationContext);
  const [delay, setDelay] = useState(animCtx.firstLoadDelay);
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
          }, delay + i * 150);
        }, delay + i * 100);
      });

      observer.unobserve(entry.target);
    }, options);

    if (ref.current.firstChild.style.opacity == 0) {
      observer.observe(ref.current);
    }

    return () => {
      window.clearTimeout(timerAdd);
      window.clearTimeout(timerRemove);
    };
  }, [ref, options]);

  return [ref];
}

export default useOnScreen;
