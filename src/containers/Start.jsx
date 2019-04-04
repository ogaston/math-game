import React from 'react';
import logo from "../logo.svg";

function Start({ startPressed }){
    return (
    <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Presione para iniciar el juego
        </p>
        <button
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            onClick={startPressed}
        >
            Empezar
        </button>
    </div>
    )
}

export default Start;