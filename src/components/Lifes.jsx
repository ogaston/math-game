import React from 'react'
import Colors from '../constant/colors';

export default function lifes({ lifes }) {

    var hearts = [];
    for (let i = 0; i < lifes; i++) {
        hearts.push(<i key={i} style={{marginLeft: "0.1em"}} className="fas fa-heart"></i>)
    }
    
    return (
        <span style={{color: Colors.red}}>
            {hearts}
        </span>
    );
}