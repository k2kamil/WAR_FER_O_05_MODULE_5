import React from "react";
import ReactDOM from "react-dom";

// function AddNumbers(props) {
//     const { numberA, numberB } = props;
//     const sum = numberA + numberB;
//     return <div>{sum}</div>;
// }
//
// function App(props) {
//     return <AddNumbers numberA={2} numberB={3} />;
// }

class AddNumbers extends React.Component {
    render() {
        const { numberA, numberB } = this.props;
        const sum = numberA + numberB;
        return(
            <div>{sum}</div>
        );
    };
};

class App extends React.Component {
    render() {
        return (<AddNumbers numberA={10} numberB={3} />);
    }
}

/**
 * Nie zmieniajcie kodu poniżej
 */
ReactDOM.render(<App />, document.getElementById("app"));

export { AddNumbers, App };
