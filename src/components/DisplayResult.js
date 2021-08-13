import React from "react";
import PropTypes from "prop-types";

const DisplayResult = ({ displayvalue }) => <div className="calculator-screen">{displayvalue}</div>;

DisplayResult.propTypes = {
  displayvalue: PropTypes.string,
};

DisplayResult.defaultProps = {
  displayvalue: "",
};

export default DisplayResult;
