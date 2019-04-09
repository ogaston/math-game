import React from 'react';
import AnswerModal from './AnswerModal';

class Quiz extends React.Component {

    _isMounted = false;
    _secondsIntervalRef;

    state = {
        problem: "",
        answer: 0,
        modal: "",
        modalShowing: false
    };

    correctAnswer = () => {
        this.showModal("sucess");
        this._isMounted && this.props.onCorretAnswer()
        this.nextProblem()
    };

    componentDidMount() {
        this._isMounted = true;
        this.generateAnotherProblem();
        this.answerInput.focus();
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.lives < 1) {
            this.props.onEndGame(this.state.points)
            return false;
        }
        return nextProps.lives > -1;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    wrongAnswer = () => {
        this._isMounted && this.props.onWrongAnswer();

        this.showModal("error");
        this.nextProblem()
    };

    nextProblem = () => {
        setTimeout(() => {
            this.generateAnotherProblem()
            this._isMounted && this.setState({
                modalShowing: false
            });
            if (this.props.lives > 0) this.answerInput.focus();
        }, 2500)
    }

    evaluateProblem = () => {

        // eslint-disable-next-line no-eval
        if (eval(this.state.problem) === +this.state.answer) {
            return this.correctAnswer();
        }

        return this.wrongAnswer();
    };

    keyingUp = ev => {
        if (ev.key === "Enter") {
            this.evaluateProblem();
        }
        this.setState({
            answer: ev.target.value
        });
    };

    showModal = (type) => {
        this.setState({
            modal: ( <AnswerModal type={type} />),
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
            {this.state.modalShowing ? 
                (
                    this.state.modal
                ) : ( 
                    <div>
                        <h1 style={{ fontSize: "3.5em"}}> {this.state.problem} </h1> 
                        <input 
                            ref={(input) => { this.answerInput = input; }}
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