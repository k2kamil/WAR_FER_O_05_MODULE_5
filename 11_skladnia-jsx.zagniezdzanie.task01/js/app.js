import React from "react";
import ReactDOM from "react-dom";
import person from "./data/person";

const {title, name, surname, age} = person;
let box;
box = <React.Fragment>
    <h1>{title} {name} {surname}</h1>
    <span>{age}</span>
</React.Fragment>



ReactDOM.render(box, document.getElementById('app'));