import React, { useState, useEffect, useRef, Fragment } from 'react';
import ReactDOM from 'react-dom';
import AlertMessage from './alert-mess';

function Alert(props) {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setShowAlert(true);
    const timeOut = window.setTimeout(hideAlert, +props.time * 1000);
    return () => {
      clearTimeout(timeOut);
    };
  });

  const hideAlert = () => {
    setShowAlert(false);
    console.log('set false');
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          {showAlert && (
            <AlertMessage type={props.type} showAlert={showAlert}>
              {props.children}
            </AlertMessage>
          )}
        </Fragment>,
        document.getElementById('alerts')
      )}
    </Fragment>
  );
}

export default Alert;
