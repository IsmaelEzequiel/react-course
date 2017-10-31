import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, placeholder, inputClass }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={inputClass}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  inputClass: PropTypes.string
}

export default Input;
