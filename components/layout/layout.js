import React, { useContext } from 'react';

import MenuContext from '../../store/menu-context';

import MainMenu from '../menu/main-menu/main-menu';
import MobileMenu from '../menu/mobile-menu/mobile-menu';
import classes from './layout.module.scss';

function Layout({ children }) {
  const { isMobile } = useContext(MenuContext);

  return (
    <div className={classes.page__content}>
      {isMobile ? <MobileMenu /> : <MainMenu />}
      <main className={classes.main__content}>{children}</main>
    </div>
  );
}

export default Layout;
