import Link from 'next/link';

import JLogo from '../../j-logo/j-logo';
import classes from './main-menu-logo.module.scss';

function HeaderLogo({ onCloseMenu }) {
  return (
    <div className={classes.header__logo}>
      <Link href={'/'} passHref>
        <a onClick={onCloseMenu}>
          <div className={classes.logo__area}>
            <div className={classes.logo}>
              <JLogo />
            </div>
            <div className={classes.logo__name}>Ján</div>
          </div>
        </a>
      </Link>
      <div className={classes.header__desc}>Web Developer</div>
    </div>
  );
}

export default HeaderLogo;
