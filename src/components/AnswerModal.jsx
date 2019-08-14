import React from 'react';
import Colors from '../constant/colors'

export default function AnswerModal({ type, text }) {

    const modalType = type === "sucess" ? 
        ({ class: "correct-answer", el: <i className="fas fa-check"></i>}) : 
        ({ class: "wrong-answer", el: <i className="fas fa-times-circle"></i>});
    return (
        <section>
            <div className={`answer  ${modalType.class}`}>
                <h2> {modalType.el} </h2>
            </div>
            <span>
                {text && (type === "sucess") && <h4 style={{color: Colors.green }}>{text}</h4> } 
                {text && (type !== "sucess") && <h4 style={{color: Colors.midGray }}>Answer: <span style={{color: Colors.lightGray }}>{text}</span></h4>}
            </span>
        </section>
        );

}
