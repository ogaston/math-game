import React from "react";

export default function Button({ children, isClicked }) {
    return (
        <button
            className="App-link"
            onClick={isClicked}
        >
            {children}
        </button>
    )
}