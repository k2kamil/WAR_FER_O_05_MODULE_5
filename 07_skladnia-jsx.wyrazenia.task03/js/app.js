import React from "react";
import ReactDOM from "react-dom";

let a = parseFloat(prompt('Podaj liczbę A'));

let b = parseFloat(prompt('Podaj liczbę B'));

let c = prompt('Podaj znak matematyczny +/-/* lub /');

let result;

switch(c) {
    case '+':
        result = <h1>{a+b}</h1>;
        break;
    case '-':
        result = <h1>{a-b}</h1>;
        break;
    case '*':
        result = <h1>{a*b}</h1>;
        break;
    case '/':
        result = <h1>{a/b}</h1>;
        break;
}

ReactDOM.render(<h1>{result}</h1>, document.getElementById('app'));


