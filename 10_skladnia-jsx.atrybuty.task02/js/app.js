

import React from "react";
import ReactDOM from "react-dom";
const correctAnswers = ["red", "green", "blue"];
const answer = prompt();
let box;
if (correctAnswers.indexOf(answer) === -1) {
    box = <div>Nieprawidłowy kolor.</div>;
} else {
    let style = {
        width: "100px",
        height: "100px",
        border: `5px solid ${answer}`
    };
    box = <div style={style} />;
}
ReactDOM.render(box, document.getElementById("app"));