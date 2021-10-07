import React, { Fragment, useRef, useContext } from 'react';

import MenuContext from '../../../store/menu-context';

import classes from './mobile-menu.module.scss';

function ToggleButton() {
  const menuCtx = useContext(MenuContext);
  const inpToggle = useRef();

  const eventCheckHandler = (e) => {
    menuCtx.setIsCheckedHandler(e.target.checked);
    console.log(e.target.checked);
  };

  return (
    <Fragment>
      <input
        checked={menuCtx.isChecked}
        onChange={eventCheckHandler}
        ref={inpToggle}
        id="toggle"
        className={classes.toggle}
        type="checkbox"
        name="toggle"
      />
      <label className={classes['toggle__container']} htmlFor="toggle">
        <div
          className={
            menuCtx.isChecked
              ? `${classes['button-toggle']} ${classes.on}`
              : `${classes['button-toggle']}`
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </label>
    </Fragment>
  );
}

export default ToggleButton;
