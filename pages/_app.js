import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { CSSTransition } from 'react-transition-group';
import { MenuContextProvider } from '../store/menu-context';
import { AOSContextProvider } from '../store/animation-context';
import AnimationContext from '../store/animation-context';
import Layout from '../components/layout/layout';
import Progress from '../components/loader-nprogress/progress';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const animCtx = useContext(AnimationContext);

  const [state, setState] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  });

  useEffect(() => {
    const handleStart = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }));
    };

    const handleComplete = () => {
      try {
        setState((prevState) => ({
          ...prevState,
          isRouteChanging: false,
        }));
      } catch (err) {
        console.error('error');
        console.error(error);
      }
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.events]);

  return (
    <MenuContextProvider>
      <AOSContextProvider>
        <Layout>
          <CSSTransition
            mountOnEnter
            unmountOnExit
            in={state.isRouteChanging}
            timeout={animCtx.loadPageDelay}
            classNames="load-page"
          >
            <Progress
              isRouteChanging={state.isRouteChanging}
              key={state.loadingKey}
            />
          </CSSTransition>
          <Component {...pageProps} />
        </Layout>
      </AOSContextProvider>
    </MenuContextProvider>
  );
}

export default MyApp;
