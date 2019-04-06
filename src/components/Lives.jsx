import React from 'react'

export default function Lives({ lives }) {

    var hearts = [];
    for (let i = 0; i < lives; i++) {
        hearts.push(<i key={i} className="fas fa-heart"></i>)
    }
    
    return (
        <span>
            {hearts}
        </span>
    );
}