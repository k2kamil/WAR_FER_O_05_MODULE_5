import React from "react";
import ReactDOM from "react-dom";


class Header extends React.Component {
    render() {
        const { logo, searchPlaceholder } = this.props;

        return (
            <header>
                <a href="#">{logo}</a>
                <form>
                    <input placeholder={searchPlaceholder} name="s" />
                    <button>Search</button>
                </form>
            </header>
        );
    }
}

class App extends React.Component {
    render() {
        return <Header logo="Your company!" searchPlaceholder="Type some words..." />;
    }
}

ReactDOM.render(<App />, document.getElementById("app"));




/**
 * Nie modyfikujcie kodu poniżej
 */
export { Header, App };
