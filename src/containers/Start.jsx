import React from 'react';
import logo from "../logo.svg";

class Start extends React.Component {

    state = {
        player: "player"
    }

    setNameOfPlayer = (event) => {
        this.setState({ player: event.target.value })
    }

    clicked = () => {
        sessionStorage.setItem("onlinePlayer", this.state.player)
        this.props.startPressed();
    }

    render (){
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <input 
                    type="text" 
                    className="App-input App-input--sm" 
                    placeholder="Ingrese su nombre" 
                    onChange={this.setNameOfPlayer}
                />
                <p>
                    Presione para iniciar el juego
                </p>
                <button
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={this.clicked}
                >
                    Empezar
                </button>
            </div>
        )
    }
}
export default Start;