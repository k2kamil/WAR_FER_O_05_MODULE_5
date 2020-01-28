import React from "react";
import ReactDOM from "react-dom";

function ChatHeader () {
    return (
        <header>
            <h1>Chat prywatny</h1>
        </header>
    )
}

function ChatMessage (props) {
    return (
        <li>Wpis z chatu {props.number}</li>
    )
}

function ChatMessages () {
    return (
        <div>
            <ul>
                <ChatMessage number={1} />
                <ChatMessage number={2} />
                <ChatMessage number={3} />
            </ul>
        </div>
    )
}

function NewChatMessages () {
    return (
        <footer>
            <input type="text" />
            <button>Wyślij</button>
        </footer>
    )
}


function Chat(props) {
    return (
        <div className="chat">
            <ChatHeader />
            <ChatMessages />
            <NewChatMessages />
        </div>
    );
}

function App(props) {
    return <Chat />;
}




/**
 * Nie modyfikujcie kodu poniżej
 */
ReactDOM.render(<App />, document.getElementById("app"));

export { Chat, App };
