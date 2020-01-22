import React from "react";
import ReactDOM from "react-dom";

let A = prompt('Podaj liczbę A');
let B = prompt('Podaj liczbę B');
let str = '1' + '2abc';

let x = parseFloat(A);
let y = parseFloat(B);
console.log(A, x);

let sum = x + y;



ReactDOM.render(<h1>{sum}</h1>, document.querySelector('#app'));

