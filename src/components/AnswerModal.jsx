import React from 'react';
import Colors from '../constant/colors'
import PropTypes from 'prop-types'

function AnswerModal({ type, text }) {

    const modalType = type === "success" ? 
        ({ class: "correct-answer", el: <i className="fas fa-check"></i>}) : 
        ({ class: "wrong-answer", el: <i className="fas fa-times-circle"></i>});
    return (
        <section>
            <div className={`answer  ${modalType.class}`}>
                <h2> {modalType.el} </h2>
            </div>
            <Message type={type} text={text} />
        </section>
        );
}

function Message({ text, type }) {
    return (
        <span>
            {text && (type === "success") && <h4 style={{color: Colors.green }}>{text}</h4> } 
            {text && (type !== "success") && <h4 style={{color: Colors.midGray }}>Answer: <span style={{color: Colors.lightGray }}>{text}</span></h4>}
        </span>
    )
}


AnswerModal.propTypes = {
    type: PropTypes.oneOf(['success', 'error']),
    text: PropTypes.string,
}


export default AnswerModal;