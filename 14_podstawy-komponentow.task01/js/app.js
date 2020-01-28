import React from "react";
import ReactDOM from "react-dom";

function LikeBox() {
    return <div>
        <h1>100 likes</h1>
        <button>Lubię to!</button>
    </div>;
}

ReactDOM.render(<LikeBox/>, document.getElementById('app'));

/**
 * Nie modyfikujcie kodu poniżej
 */
export { LikeBox };
