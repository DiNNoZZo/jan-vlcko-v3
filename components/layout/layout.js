import { Fragment } from 'react';

import MainMenu from './main-menu/main-menu';
import classes from './layout.module.scss';

function Layout(props) {
  return (
    <div className={classes.page__content}>
      <MainMenu />
      <main className={classes.main__content}>{props.children}</main>
    </div>
  );
}

export default Layout;
