import React, { useState, useEffect, useContext, Fragment } from 'react';

import ErrorContext from '../../store/error-context';

import ReactDOM from 'react-dom';
import AlertMessage from './alert-mess';

function Alert({ time, type, children }) {
  const errorCtx = useContext(ErrorContext);
  const [showAlert, setShowAlert] = useState(errorCtx.showAlert);

  useEffect(() => {
    errorCtx.showAlertMess(true);
    const timeOut = window.setTimeout(() => {
      errorCtx.showAlertMess(false);
    }, +time * 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [time, errorCtx]);

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          {errorCtx.showAlert && (
            <AlertMessage type={type}>{children}</AlertMessage>
          )}
        </Fragment>,
        document.getElementById('alerts')
      )}
    </Fragment>
  );
}

export default Alert;
