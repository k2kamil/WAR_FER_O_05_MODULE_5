import React from "react";
import ReactDOM from "react-dom";

let age = prompt('Podaj swój rok urodzenia');
let ageParse = parseFloat(age);

let actualDate =  new Date().getFullYear();



ReactDOM.render(<h1>Twój wiek to: {actualDate - ageParse}</h1>, document.querySelector('#app'));


