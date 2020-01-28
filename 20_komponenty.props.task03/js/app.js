import React from "react";
import ReactDOM from "react-dom";

const menu = [
    {
        url: "/",
        text: "Strona główna"
    },
    {
        url: "/blog",
        text: "Blog"
    },
    {
        url: "/cennik",
        text: "Cennik"
    },
    {
        url: "/kontakt",
        text: "Kontakt"
    }
];

class Menu extends React.Component {
    render() {
        return (
        <ul>
            {menu.map(el => <li><a href={el.url}>{el.text}</a></li>)}
        </ul>

        )}
}


ReactDOM.render(<Menu menu={menu} />, document.getElementById("app"));




/**
 * Nie modyfikujcie kodu poniżej
 */
export { Menu };
