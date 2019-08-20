import React from "react";

export default function Input({ type, text, onInputChange }) {
    return (
        <>
            <label for="textId" hidden>{"Text"}</label>
            <input 
                id="textId"
                type={ type || "text" } 
                className="App-input App-input--sm" 
                placeholder={text} 
                onChange={onInputChange}
            />
        </>
    )
}