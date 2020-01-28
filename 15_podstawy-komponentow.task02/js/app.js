import React from "react";
import ReactDOM from "react-dom";



class Menu extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href="#">Strona główna</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Cennik</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
            </div>
        );
    };
};

ReactDOM.render(<Menu/>, document.getElementById('app'));


/**
 * Nie modyfikujcie kodu poniżej
 */
export { Menu };
