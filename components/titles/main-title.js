import React, { Fragment } from 'react';

import JLogo from '../j-logo/j-logo';
import classes from './main-title.module.scss';

function MainTitle() {
  return (
    <Fragment>
      <h1 className={`title blast-anim ${classes['title--primary']}`}>
        <span className="blast">A</span>
        <span className="blast">h</span>
        <span className="blast">o</span>
        <span className="blast">j</span>
        <span className="blast">,</span>
        <br />
        <span className="blast">s</span>
        <span className="blast">o</span>
        <span className="blast">m </span>
        <div className={`${classes['title-j']}`}>
          <JLogo title={true} />
        </div>
        <span className="blast">á</span>
        <span className="blast">n</span>
        <span className="blast">,</span>
        <br />
        <span className="blast">W</span>
        <span className="blast">e</span>
        <span className="blast">b </span>
        <span className="blast">D</span>
        <span className="blast">e</span>
        <span className="blast">v</span>
        <span className="blast">e</span>
        <span className="blast">l</span>
        <span className="blast">o</span>
        <span className="blast">p</span>
        <span className="blast">e</span>
        <span className="blast">r</span>
      </h1>
    </Fragment>
  );
}

export default MainTitle;
