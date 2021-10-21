import React, { useContext } from 'react';
import Link from 'next/link';

import MenuContext from '../../../store/menu-context';

import classes from './main-menu-nav.module.scss';

function MainMenuNav({ onCloseMenu }) {
  const menuCtx = useContext(MenuContext);

  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__list}>
        <li className={classes.nav__item}>
          <Link href="/about">
            <a className={classes.nav__link} onClick={onCloseMenu}>
              O Mne
            </a>
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link href="/skills">
            <a className={classes.nav__link} onClick={onCloseMenu}>
              Skúsenosti
            </a>
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link href="/portfolio">
            <a className={classes.nav__link} onClick={onCloseMenu}>
              Projekty
            </a>
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link href="/blog">
            <a className={classes.nav__link} onClick={onCloseMenu}>
              Blog
            </a>
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link href="/contact">
            <a className={classes.nav__link} onClick={onCloseMenu}>
              Kontakt
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainMenuNav;
