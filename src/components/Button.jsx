import React from "react";
import PropTypes from "prop-types";

function Button({ children, isClicked }) {
  return (
    <button className="App-link" onClick={isClicked}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  isClicked: PropTypes.func
};

export default Button;
