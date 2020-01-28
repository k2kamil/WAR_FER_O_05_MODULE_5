import React from "react";
import ReactDOM from "react-dom";

// function AddNumbers({numberA, numberB}) {
//     return (
//         <h1>{numberA + numberB}</h1>
//     )
// };

class AddNumbers extends React.Component {
    render () {
        let {numberA, numberB} = this.props;
        return (

            <h1>{numberA + numberB}</h1>
        );
    }
}



ReactDOM.render(<AddNumbers numberA={10} numberB={40} />, document.getElementById("app"));
