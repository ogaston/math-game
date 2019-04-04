import React from 'react';

class Quiz extends React.Component {

    _isMounted = false;
    _secondsIntervalRef;

    state = {
        points: 0,
        seconds: 20,
        problem: "",
        aswer: 0,
        level: 1,
        live: 3,
        modal: "",
        modalShowing: false
    };

    correctAswer = () => {
        this._isMounted && this.setState(prevState => {
            return {
                points: prevState.points + prevState.level * 100
            };
        });

        this.showModal("Correcto", "sucess");
        this.nextProblem()

    };

    componentDidMount() {
        this._isMounted = true;
        this.generateAnotherProblem();
        this._secondsIntervalRef = setInterval(() => this.setState(prevState => ({
            seconds: --prevState.seconds
        })), 1000)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if ((this.state.live < 0) || (this.state.seconds < 0)) {
            this.props.endGame(this.state.points)
            return false;
        }
        return nextState.live > -1;
    }

    componentWillUnmount() {
        this._isMounted = false;
        clearInterval(this._secondsIntervalRef)
    }

    wrongAswer = () => {
        this._isMounted && this.setState(prevState => {
            return {
                live: prevState.live - 1
            };
        });

        this.showModal("Mal", "error");
        this.nextProblem()
    };

    nextProblem = () => {
        setTimeout(() => {
            this.generateAnotherProblem()
            this._isMounted && this.setState({
                modalShowing: false
            });
        }, 2500)
    }

    evaluateProblem = () => {

        if (eval(this.state.problem) == this.state.aswer) {
            return this.correctAswer();
        }

        return this.wrongAswer();
    };

    keyingUp = ev => {
        if (ev.key === "Enter") {
            this.evaluateProblem();
        }
        this.setState({
            aswer: ev.target.value
        });
    };

    showModal = (msg, type) => {
        const classType = type === "sucess" ? "correct-aswer" : "wrong-aswer";
        this.setState({
            modal: ( 
            <div className = {classType}>
                <h2> {msg} </h2> 
            </div>
            ),
            modalShowing: true
        });
    };

    getRandomSymbol = () => {
        const symbols = ["+", "-", "/", "*"];
        var min = 0;
        var max = 3;
        var random = Math.floor(Math.random() * (+max - +min) + +min);
        return symbols[random];
    }

    generateAnotherProblem = () => {
        const newProblem = `${(Math.random() * 100).toFixed()} ${this.getRandomSymbol()} ${(Math.random() * 100).toFixed()}`;
        this._isMounted && this.setState({
            problem: newProblem
        });
    };

    render() {
        return ( 
        <section>
            <div>
                PUNTOS: {this.state.points} < br />
                VIDAS: {this.state.live} < br />
                TIEMPO: {this.state.seconds} 
            </div> 
            <div> 
            {this.state.modalShowing ? 
                (
                    this.state.modal
                ) : ( 
                    <div>
                        <h1> {this.state.problem} </h1> 
                        <input 
                            className = "App-input"
                            type = "text"
                            placeholder = "Respuesta"
                            onKeyUp = {
                                this.keyingUp
                            }/> 
                    </div>
                )
            }
            </div> 
        </section>
        );
    }
}

export default Quiz;