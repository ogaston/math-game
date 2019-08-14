import React from "react";
import PropTypes from 'prop-types'

class Beginning extends React.Component {
  state = {
    msg: 3
  };
  intervalRef;

  componentDidMount() {
    this.intervalRef = setInterval(() => this.setState(this.handleCount), 1000);
  }

  handleCount = prevState => {
    if (prevState.msg === 1) {
      return { msg: "GO" };
    }

    if (prevState.msg === "GO") {
      return { msg: undefined };
    }
    return { msg: prevState.msg - 1 };
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.msg === undefined) {
      clearInterval(this.intervalRef);
      this.props.isComplete();
      return false;
    }
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.intervalRef);
  }

  render() {
    return (
      <div>
        <h3>GET READY...</h3>
        <h1>{this.state.msg}</h1>
      </div>
    );
  }
}


Beginning.propTypes = {
  isComplete: PropTypes.func.isRequired,
}

export default Beginning;
