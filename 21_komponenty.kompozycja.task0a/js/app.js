import React from "react";
import ReactDOM from "react-dom";



class ShopItemHeader extends React.Component {
    render() {
        console.log(this.props);
        const { title, img } = this.props;
        return (
            <div>
                <h1>{title}</h1>
                <img src={this.props.img}/>
            </div>
        )
    }
}

class ShopItemDescription extends React.Component {
    render() {
        return (
            <article>
                <p>{this.props.desc}</p>
            </article>
        )
    }
}

class ShopItemPricing extends React.Component {
    render() {
        return (
            <div>
                Cena: {this.props.price} zł
                <button>Kup!</button>
            </div>
        )
    }
}

class ShopItem extends React.Component {
    render() {
        console.log(this.props.item);
        const { title, image, description, price } = this.props.item;
        return (
            <div>
                <ShopItemHeader title={this.props.item.title} img={this.props.item.image}/>
                <ShopItemDescription desc={this.props.item.description}/>
                <ShopItemPricing price={this.props.item.price}/>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        let item = {
            title: "MacBook Pro",
            image: "https://bit.ly/2EEtduD",
            description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
            price: 9999
        };
        return <ShopItem item={item}/>
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
