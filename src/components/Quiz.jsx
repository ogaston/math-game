import React from "react";
import AnswerModal from "./AnswerModal";
import { MathHelper } from "../utils";

class Quiz extends React.Component {
  _isMounted = false;
  _secondsIntervalRef;

  state = {
    problem: "",
    answer: 0,
    modal: "",
    modalShowing: false,
    streaks: 0
  };

  earnLife = () => {
    this.props.onEarnLife();
    this.showModal("success", "STREAK!! You won a life ♥");
    this.setState({
      streaks: 0
    });
  };

  correctAnswer = () => {
    if (this.state.streaks > 2) {
      this.earnLife();
    } else {
      this.showModal("success");
    }

    this._isMounted && this.props.onCorretAnswer();
    this.setState(state => {
      return {
        streaks: state.streaks + 1
      };
    });

    this.nextProblem();
  };

  componentDidMount() {
    this._isMounted = true;
    this.getProblem();
    this.answerInput.focus();
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.lifes < 1) {
      this.props.onEndGame(this.state.points);
      return false;
    }
    return nextProps.lifes > -1;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  wrongAnswer = () => {
    this._isMounted && this.props.onWrongAnswer();
    this.setState({
      streaks: 0
    });
    this.showModal("error", MathHelper.solve(this.state.problem).toString());
    this.nextProblem();
  };

  nextProblem = () => {
    setTimeout(() => {
      this.getProblem();
      this._isMounted &&
        this.setState({
          modalShowing: false
        });
      if (this.props.lifes > 0) this.answerInput.focus();
    }, 2500);
  };

  evaluateProblem = () => {
    if (MathHelper.compare(this.state.problem, this.state.answer)) {
      return this.correctAnswer();
    }
    return this.wrongAnswer();
  };

  keyingUp = ev => {
    if (ev.key === "Enter") {
      this.evaluateProblem();
    }
    const val = ev.target.value;

    this.setState({
      answer: Number(val.match(/((-?)\d+)/g)) // accept just numbers and the minus symbol
    });
  };

  showModal = (type, text) => {
    this.setState({
      modal: <AnswerModal type={type} text={text} />,
      modalShowing: true
    });
  };

  getProblem = () => {
    const newProblem = MathHelper.generateProblem(this.props.points);
    this._isMounted &&
      this.setState({
        problem: newProblem
      });
  };

  render() {
    return (
      <section className="show-up">
        <div>
          {this.state.modalShowing ? (
            this.state.modal
          ) : (
            <div>
              <h1 style={{ fontSize: "3.5em" }}> {this.state.problem} </h1>
              <input
                ref={input => {
                  this.answerInput = input;
                }}
                className="App-input"
                type="number"
                placeholder="Respuesta"
                onKeyUp={this.keyingUp}
              />
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Quiz;
