import React from "react";
import PropTypes from "prop-types";

const DisplayResult = ({ displayValue }) => <div className="calculator-screen">{displayValue}</div>;

DisplayResult.propTypes = {
  displayValue: PropTypes.string,
};

DisplayResult.defaultProps = {
  displayValue: "",
};

export default DisplayResult;
