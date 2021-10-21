import React, { createContext, useState, useEffect } from 'react';

const MenuContext = createContext({
  isChecked: false,
  isMobile: false,
  setIsCheckedHandler: () => {},
});

export function MenuContextProvider(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);

  const resizeHandler = () => {
    setWindowWidth(window.innerWidth);
    setIsChecked(false);
  };

  const setIsCheckedHandler = (value) => {
    setIsChecked(value);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, []);
  const isMobile = windowWidth <= 1200;

  return (
    <MenuContext.Provider value={{ isChecked, isMobile, setIsCheckedHandler }}>
      {props.children}
    </MenuContext.Provider>
  );
}

export default MenuContext;
