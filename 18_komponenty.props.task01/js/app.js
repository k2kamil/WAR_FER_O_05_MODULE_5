import React from "react";
import ReactDOM from "react-dom";

class Sum extends React.Component {
    render() {
        const {numbers} = this.props;
        return (
            <h1>{numbers.reduce(function(a, b) {
                return a + b;
            })} </h1>
        )
    }
}


ReactDOM.render(<Sum numbers={[1, 2, 3, 4, 5, 6, 7]} />, document.getElementById("app"));
