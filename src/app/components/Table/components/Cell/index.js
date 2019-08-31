import React from 'react';
import { string } from 'prop-types';

function Cell({ className, children }) {
  return <div className={`row middle ${className}`}>{children}</div>;
}

Cell.propTypes = {
  className: string
};

Cell.defaultProps = {
  className: ''
};

export default Cell;
