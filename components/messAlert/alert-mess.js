import React, { useState, useRef, useImperativeHandle } from 'react';

const AlertMessage = React.forwardRef((props, ref) => {
  return (
    <div className={`${'alert'} ${`alert--${props.type}`}`}>
      <p>{props.children}</p>
    </div>
  );
});
AlertMessage.displayName = 'AlertMessage';

export default AlertMessage;
