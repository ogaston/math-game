import React from 'react';
import TableScore from "./TableScore";

const style = {
  buttonRetry : {
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
    margin: "0.1em auto 3em",
  },
  divider : {
    height: 0,
    border: "0.5px solid #61dafb",
  }
}

class Done extends React.Component {

  render() {
    const { divider, buttonRetry, otherButton } = style;
        return (
          <div>
            <h1>FIN DEL JUEGO</h1>
            <hr style={divider} />
            <h3>PUNTOS FINALES <b>{this.props.points}</b></h3>
            <br/>
            <h3 style={buttonRetry} onClick={this.props.retryGame}>RETRY</h3>
            <h5 style={otherButton} onClick={this.props.onReStartGame}>Another player</h5>
            <TableScore { ...this.props } />
          </div>
        );
    }
}

export default Done;