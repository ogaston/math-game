import React from 'react';

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
                <div className="App-brandname">
                    <i className="fas fa-graduation-cap"></i> 
                    <br/>    
                    <h3>Do You Know</h3>     
                    <h1>Math?</h1>
                </div>
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                <input 
                    type="text" 
                    className="App-input App-input--sm" 
                    placeholder="Insert your name" 
                    onChange={this.setNameOfPlayer}
                />
                <p>
                    Press to start the game
                </p>
                <button
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={this.clicked}
                >
                    Start
                </button>
            </div>
        )
    }
}
export default Start;