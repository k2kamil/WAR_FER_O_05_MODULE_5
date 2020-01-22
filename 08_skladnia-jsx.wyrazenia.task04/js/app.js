import React from "react";
import ReactDOM from "react-dom";
import Animals from "./data/animals";



ReactDOM.render(<section>Ilość zwierząt {Animals.length}:
    {Animals.join(', ')}</section>, document.getElementById('app'));

