import React, { useState, useContext } from 'react';
import AnimationContext from '../../store/animation-context';
import classes from './skill-bars.module.scss';

const data = [
  {
    id: 'frontend',
    progress: 70,
    name: 'Front-end',
  },
  {
    id: 'backend',
    progress: 20,
    name: 'Back-end',
  },
  {
    id: 'react',
    progress: 80,
    name: 'React.js',
  },
  {
    id: 'next',
    progress: 57,
    name: 'Next.js',
  },
];

function SkillBars(props) {
  const [bars, setBars] = useState(data);
  const animCtx = useContext(AnimationContext);
  return (
    <div data-aos={animCtx.fadeLeft} className={classes.bars}>
      {bars.map((bar) => {
        return (
          <div key={bar.id} className={classes.bar}>
            <span className={classes.bar__name}>{bar.name}</span>
            <div className={classes.bar__empty}>
              <div
                className={`${classes.bar__fill} ${
                  classes[`bar__fill--${bar.id}`]
                }`}
                style={{ width: `${bar.progress}%` }}
              ></div>
            </div>
          </div>
        );
      })}
      <div data-aos={animCtx.fadeUp} className={classes.desc__content}>
        <h2 className={classes.title}>Front-end</h2>
        <p>Začiatok</p>
        <span className={classes.year}>2020-NEVER END</span>
        <p className={classes.desc}>
          Vanilla javascript pre pochopenie hlbšieho fungovania. React front-end
          + Next.js. Trochu som nazrel aj za Back-end oponu ;).
        </p>
      </div>
    </div>
  );
}

export default SkillBars;
