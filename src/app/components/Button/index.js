import React from 'react';
import { oneOf, oneOfType, node, string, number, func, bool } from 'prop-types';

import { BUTTON_TYPES, BUTTON_TYPE_KEYS } from './constants';

/* eslint-disable react/button-has-type */
function Button({ dataKey, onClick, className, type, disabled, children }) {
  return (
    <button
      type={type}
      onClick={onClick}
      data-key={dataKey}
      disabled={disabled}
      className={className}
      tabIndex={0}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: oneOfType([node, string]).isRequired,
  className: string,
  dataKey: oneOfType([string, number]),
  disabled: bool,
  type: oneOf(BUTTON_TYPE_KEYS),
  onClick: func
};

Button.defaultProps = {
  disabled: false,
  type: BUTTON_TYPES.button
};

export default Button;
