import React from 'react';

export default function AnswerModal({ type }) {

    const modalType = type === "sucess" ? 
        ({ class: "correct-answer", el: <i className="fas fa-check"></i>}) : 
        ({ class: "wrong-answer", el: <i className="fas fa-times-circle"></i>});
    return (
        <div className={`answer  ${modalType.class}`}>
            <h2> {modalType.el} </h2>
        </div>
        );

}
