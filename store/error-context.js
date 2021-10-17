import React, { createContext, useState, useEffect } from 'react';

const ErrorContext = createContext({
  showAlert: false,
  showAlertMess: () => {},
});

export function ErrorContextProvider({ children }) {
  const [showAler, setShowAlert] = useState(false);

  const showAlertMess = () => {
    setShowAlert(true);
  };

  return (
    <ErrorContext.Provider
      value={{
        showAler,
        showAlertMess,
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
}

export default ErrorContext;
