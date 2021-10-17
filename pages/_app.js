import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import Layout from '../components/layout/layout';
import { MenuContextProvider } from '../store/menu-context';
import { ErrorContextProvider } from '../store/error-context';
import Progress from '../components/loader-nprogress/progress';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

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
      <ErrorContextProvider>
        <Layout>
          <Progress
            isRouteChanging={state.isRouteChanging}
            key={state.loadingKey}
          />
          <Component {...pageProps} />
        </Layout>
      </ErrorContextProvider>
    </MenuContextProvider>
  );
}

export default MyApp;
