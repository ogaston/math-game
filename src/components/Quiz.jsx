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
        lives: 3,
        modal: "",
        modalShowing: false
    };

    correctAswer = () => {
        this.showModal("Correcto", "sucess");
        this._isMounted && this.props.onCorretAswer()
        this.nextProblem()
    };

    componentDidMount() {
        this._isMounted = true;
        this.generateAnotherProblem();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.lives < 1) {
            this.props.onEndGame(this.state.points)
            return false;
        }
        return nextState.lives > -1;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    wrongAswer = () => {
        this._isMounted && this.props.onWrongAswer();

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
                PUNTOS: {this.props.points} < br />
                VIDAS: {this.props.lives} < br />
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