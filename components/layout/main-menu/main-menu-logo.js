import Link from 'next/link';

import JLogo from '../../j-logo/j-logo';
import classes from './main-menu-logo.module.scss';

function HeaderLogo() {
  return (
    <div className={classes.header__logo}>
      <Link href="/" passHref>
        <div className={classes.logo__area}>
          <div className={classes.logo}>
            <JLogo />
          </div>
          <div className={classes.logo__name}>Ján</div>
        </div>
      </Link>
      <div className={classes.header__desc}>Web Developer</div>
    </div>
  );
}

export default HeaderLogo;
