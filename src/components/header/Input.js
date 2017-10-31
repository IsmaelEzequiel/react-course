import React from 'react';

export const Input = (props) => {
  return <input
          type={props.inputType}
          placeholder={props.inputPlaceholder}
          className={props.inputClass}
          />
}
