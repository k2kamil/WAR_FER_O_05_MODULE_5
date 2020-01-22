import React from "react";
import ReactDOM from "react-dom";
import Person from "./data/person";

const {title, name, surname, age} = Person;



ReactDOM.render(
    <ul>
        <li>{title}</li>
        <li>{name}</li>
        <li>{surname}</li>
        <li>{age}</li>
    </ul>
, document.querySelector('#app'));

