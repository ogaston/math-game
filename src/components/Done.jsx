import React from "react";
import PropTypes from 'prop-types'

const style = {
  buttonRetry: {
    fontSize: "1.5em",
    color: "#61dafb",
    fontFamily: "fantasy",
    cursor: "pointer"
  },
  otherButton: {
    color: "white",
    fontFamily: "fantasy",
    cursor: "pointer",
    fontSize: "1em",
    margin: "0.1em auto 3em"
  },
  divider: {
    height: 0,
    border: "0.5px solid #61dafb"
  },
  poinstStyle: {
    color: "#61dafb",
    fontWeight: "bold"
  }
};

class Done extends React.Component {
  render() {
    const { divider, buttonRetry, otherButton, poinstStyle } = style;
    return (
      <div>
        <h1>GAME OVER</h1>
        <hr style={divider} />
        <h3>
          FINAL SCORE <b style={poinstStyle}>{this.props.points}</b>
        </h3>
        <br />
        <h3 style={buttonRetry} onClick={this.props.retryGame}>
          RETRY
        </h3>
        <h5 style={otherButton} onClick={this.props.onReStartGame}>
          Another player
        </h5>
        {this.children}
      </div>
    );
  }
}

Done.propTypes = {
  points: PropTypes.number.isRequired,
  retryGame: PropTypes.func.isRequired,
  onReStartGame: PropTypes.func.isRequired
}

export default Done;
