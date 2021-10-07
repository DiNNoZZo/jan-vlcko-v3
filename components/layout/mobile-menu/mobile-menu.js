import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import MenuContext from '../../../store/menu-context';

import MainMenuLogo from '../main-menu/main-menu-logo';
import MainMenuNav from '../main-menu/main-menu-nav';
import MainMenuFooter from '../main-menu/main-menu-footer';
import ToggleButton from './toggle-menu';
import useMounted from '../../../hooks/use-mounted';

import classes from './mobile-menu.module.scss';

function MobileMenu(props) {
  const menuCtx = useContext(MenuContext);
  const mounted = useMounted();
  const menu = useRef();

  const closeMenu = () => {
    menuCtx.setIsCheckedHandler(false);
    console.log('change');
    console.log(menuCtx.isChecked);
  };

  useEffect(() => {
    if (menuCtx.isChecked) {
      return (menu.current.style.transform = 'translateX(0)');
    }
    menu.current.style.transform = 'translateX(-100%)';
  }, [menuCtx.isChecked]);

  return (
    <menu ref={menu} className={classes.main__menu}>
      <MainMenuLogo onCloseMenu={closeMenu} />
      <MainMenuNav onCloseMenu={closeMenu} />
      <MainMenuFooter />
      {mounted &&
        ReactDOM.createPortal(
          <ToggleButton onCloseMenu={closeMenu} />,
          document.getElementById('nav-btn')
        )}
    </menu>
  );
}

export default MobileMenu;
