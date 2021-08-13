import React from 'react';
import PropTypes from "prop-types";
const CalculatorButton = ({ value, clickEventListener }) => {
    const className =`${value === '0' ? 'zero' : ''} ${value === "÷" || value === 'x' || value === '-' || value === '+' || value === '=' ? 'operator' : ''}`;
    return (
    <button type="button" className={className} value={value} onClick={clickEventListener}>{value}</button>
    )
  }

  CalculatorButton.propTypes = {
  value: PropTypes.string,
  clickEventListener: PropTypes.func
};


export default CalculatorButton