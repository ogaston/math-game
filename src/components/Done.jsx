import React from 'react';

const buttonRetry = {
    fontSize: "1.5em",
    color: "#61dafb",
    fontFamily: "fantasy",
    cursor: "pointer"
}

class Done extends React.Component {

  render() {
        return (
          <div>
            <h1>FIN DEL JUEGO</h1>
            <hr />
            <h3>PUNTOS FINALES <b>{this.props.points}</b></h3>
            <br/>
            <h3 style={buttonRetry} onClick={this.props.retryGame}>RETRY</h3>
          </div>
        );
    }
}

export default Done;