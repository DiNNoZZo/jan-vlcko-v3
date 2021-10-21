import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';

const AOSContext = createContext({
  fadeUp: 'fade-up',
  fadeDown: 'fade-down',
  fadeLeft: 'fade-left',
  fadeRight: 'fade-right',
  zoomInDown: 'zoom-in-down',
  aosDelay: 300,
  firstLoadDelay: 300,
  loadPageDelay: 500,
});

export function AOSContextProvider({ children }) {
  const router = useRouter();
  const [aosDelay, setAosDelay] = useState(300);
  useEffect(() => {
    AOS.init({
      throttleDelay: aosDelay,
    });
  }, [router.pathname]);

  const providerValues = {
    fadeUp: 'fade-up',
    fadeDown: 'fade-down',
    fadeLeft: 'fade-left',
    fadeRight: 'fade-right',
    zoomInDown: 'zoom-in-down',
    aosDelay,
    firstLoadDelay: 500,
    loadPageDelay: 500,
  };

  return (
    <AOSContext.Provider value={providerValues}>{children}</AOSContext.Provider>
  );
}

export default AOSContext;
