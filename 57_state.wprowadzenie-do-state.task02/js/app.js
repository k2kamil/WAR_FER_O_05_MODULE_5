import React from "react";
import ReactDOM from "react-dom";

class ProductsList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            products: ["banana", "orange", "apple", "peach"]
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.products.map(el=>  <li> {el} </li>)}

                </ul>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return <ProductsList />
    }
}


/**
 * Nie modyfikujcie kodu poniżej
 */
ReactDOM.render(<App />, document.getElementById("app"));

export { ProductsList, App };
