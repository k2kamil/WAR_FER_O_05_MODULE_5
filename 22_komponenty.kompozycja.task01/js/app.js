import React from "react";
import ReactDOM from "react-dom";
class ShopList extends React.Component {
    render() {
        const {items} = this.props;
        return (
            <div className="shoplist">
                {items.map( element => {
                    return <ShopItemHeader title={element.title} image={element.image} />
                } )}
            </div>
        )
    }
}
class ShopItemHeader extends React.Component {
    render() {
        return (
            <div>
                <h1> {this.props.title}</h1>
                <img src={this.props.image} />
            </div>
        )
    }
}
class App extends React.Component {
    render() {
        let myArray = [
            {
                title: "Mysz komputerowa",
                image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg"
            },
            {
                title: "Klawiatura",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png"
            },
            {
                title: "Laptop programisty",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg"
            }
        ];
        return (
            <ShopList items={myArray} />
        )
    }
}
/**
 * Nie modyfikujcie kodu poniżej
 */
ReactDOM.render(<App />, document.getElementById("app"));
export { ShopItemHeader, ShopList, App };

