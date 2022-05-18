import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, click }) => (
  <button type="button" onClick={click}>{text}</button>
);

Button.defaultProps = {
  click: onClick,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

export default Button;
