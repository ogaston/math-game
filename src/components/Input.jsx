import React from "react";

export default function Input({ type, text, onInputChange }) {
    return (
        <input 
            type={ type || "text" } 
            className="App-input App-input--sm" 
            placeholder={text} 
            onChange={onInputChange}
        />
    )
}