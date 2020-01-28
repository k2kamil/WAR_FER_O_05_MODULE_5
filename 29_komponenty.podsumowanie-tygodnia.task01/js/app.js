import React from "react";
import ReactDOM from "react-dom";

class Button extends React.Component {
    render() {
        return (
            <button>{this.props.text}</button>
        )
    }
}

class Message extends React.Component {
    render() {
        return (
            <>
                <Button text="Zaloguj"/>
                <p>{this.props.messageText}</p>
            </>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <Message messageText='Zarejestruj'/>
        )
    }
}


/**
 * Nie zmieniajcie kodu poniżej
 */
ReactDOM.render(<App />, document.getElementById("app"));

