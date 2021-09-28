import React from 'react';

const Input = (props) => {
  return (
    <input
      className={props.styles}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onBlur={props.onBlur}
      value={props.value}
    />
  );
};

Input.displayName = 'Input';

export default Input;
