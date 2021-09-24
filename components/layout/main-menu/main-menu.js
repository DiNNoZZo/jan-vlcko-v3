import React from 'react';

import MainMenuLogo from './main-menu-logo';
import MainMenuNav from './main-menu-nav';
import MainMenuFooter from './main-menu-footer';
import classes from './main-menu.module.scss';

function MainMenu() {
  return (
    <menu className={classes.main__menu}>
      <MainMenuLogo />

      <MainMenuNav />

      <MainMenuFooter />
    </menu>
  );
}

export default MainMenu;
