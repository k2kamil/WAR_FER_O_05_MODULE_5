import React from "react";
import ReactDOM from "react-dom";


class StateTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentChapter: "Wprowadzenie do state",
            page: 87
        }
    }

    render() {
        return (
            <header>
                <h3>{this.state.currentChapter}</h3>
                <h4>{this.state.page}</h4>
            </header>
        )
    }
}

class App extends React.Component {
    render() {
        return <StateTest />
    }
}


/**
 * Nie modyfikujcie kodu poniżej
 */
ReactDOM.render(<App />, document.getElementById("app"));

export { StateTest, App };
