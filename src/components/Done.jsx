import React from 'react';

class Done extends React.Component {

    render() {
        return (
          <div>
            <h1>FIN DEL JUEGO</h1>
            <hr />
            <h3>PUNTOS FINALES <b>{this.props.points}</b></h3>
          </div>
        );
    }
}

export default Done;