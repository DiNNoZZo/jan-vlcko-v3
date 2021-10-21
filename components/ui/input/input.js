import React from 'react';

const Input = ({
  styles,
  type,
  name,
  placeholder,
  onChange,
  onBlur,
  value,
}) => (
  <input
    className={styles}
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
  />
);

export default Input;
