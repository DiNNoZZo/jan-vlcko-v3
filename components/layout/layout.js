import React, { useContext } from 'react';

import MenuContext from '../../store/menu-context';

import MainMenu from './main-menu/main-menu';
import MobileMenu from '../layout/mobile-menu/mobile-menu';
import classes from './layout.module.scss';

function Layout(props) {
  const menuCtx = useContext(MenuContext);

  return (
    <div className={classes.page__content}>
      {menuCtx.isActiveMenu ? <MobileMenu /> : <MainMenu />}
      <main className={classes.main__content}>{props.children}</main>
    </div>
  );
}

export default Layout;
