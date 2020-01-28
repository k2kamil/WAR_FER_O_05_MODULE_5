import React from "react";
import ReactDOM from "react-dom";

function LikeBox(props) {
    return <div>
        <h1>{props.likes}</h1>
        <button>Lubię to!</button>
    </div>;
}

ReactDOM.render(<LikeBox likes="50"/>, document.getElementById('app'));



/**
 * Nie modyfikujcie kodu poniżej
 */
export { LikeBox };
