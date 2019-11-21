import React from 'react';
import PropTypes from 'prop-types';
import './index.css'

const Button = ({ onClick, className = '', children }) => (
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>
);

Button.defaultProps = {
  onClick: () => {},
  className: '',
  children: null
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Button;
