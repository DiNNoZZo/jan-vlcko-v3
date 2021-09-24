import Link from 'next/link';

import classes from './main-menu-nav.module.scss';

function HeaderNav() {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__list}>
        <li className={classes.nav__item}>
          <Link href="/about">
            <a className={classes.nav__link}>O Mne</a>
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link href="/skills">
            <a className={classes.nav__link}>Skúsenosti</a>
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link href="/portfolio">
            <a className={classes.nav__link}>Projekty</a>
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link href="/blog">
            <a className={classes.nav__link}>Blog</a>
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link href="/contact">
            <a className={classes.nav__link}>Kontakt</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
