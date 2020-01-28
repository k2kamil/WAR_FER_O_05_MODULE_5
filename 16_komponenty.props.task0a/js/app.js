import React from "react";
import ReactDOM from "react-dom";

function Hello1 ({name, surname}) {

    return <h1>Hello, {name} {surname}</h1>;
}

class Hello extends React.Component {

    render() {
        const {name, surname} = this.props; // deestrukturyzacja
        return (
            <h1>Hello, {name}{surname}</h1>
        );
    };
};



ReactDOM.render(<Hello1 name="Jan" surname="Kowski" />, document.getElementById("app"));
