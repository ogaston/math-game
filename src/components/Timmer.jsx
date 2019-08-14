import React from 'react'
import PropTypes from 'prop-types'

class Timmer extends React.Component {

    _secondsIntervalRef;
    
    constructor(props) {
        super(props);
        this.state = {
            seconds: this.props.seconds,
            level: this.props.level
        }
    }

    componentDidMount() {
        this.setState({
          seconds: this.props.seconds
        });
        this._secondsIntervalRef = setInterval(() => this.setState(prevState => ({
            seconds: --prevState.seconds
        })), 1000)
    }


    componentDidUpdate() {
        if (this.props.level !== this.state.level) {

            this.setState(prevState => ({
              level: this.props.level,
              seconds: prevState.seconds + 20
            }));
            
            this.props.setTimeChanged(this.state.seconds);
        }

        if(this.state.seconds < 0) {
            this.props.onEndGame();
        }
    }
    
    componentWillUnmount() {
        clearInterval(this._secondsIntervalRef);
    }

    render() {
        return (
            <span>
                <i className="fas fa-clock"></i> <b>{ this.state.seconds }</b>
            </span>
        )
    }
}

Timmer.propTypes = {
    seconds: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
}

Timmer.defaultProps = {
    level: 0    
}

export default Timmer;