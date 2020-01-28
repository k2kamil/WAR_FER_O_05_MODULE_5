import React from "react";
import ReactDOM from "react-dom";
import products from "./data/products";


class ReceiptHeader extends React.Component {
    render() {
        return (
            <thead>
            <tr>
                <td>Nazwa</td>
                <td>Cena</td>
                <td>Ilość</td>
                <td>cena</td>
            </tr>
            </thead>
        )
    }
}

class ReceiptItem extends React.Component {
    render() {
        const {price, count, name}=this.props.product;
        return (
            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>{count}</td>
                <td>{price*count}</td>
            </tr>
        )
    }
}

class ReceiptItems extends React.Component {
    render() {
        return (
            <tbody>
            {this.props.dataPro.map(el=> {
                return <ReceiptItem product={el} />
            })}
            </tbody>
        )
    }
}

class ReceiptFooter extends React.Component {
    render() {
        const totalPrice = this.props.dataPro2;
        let sum=0;
        totalPrice.forEach(el =>{
           sum+=el.count*el.price;
        });
        return (
            <tfoot>
                <tr>
                    <td>RAZEM</td>
                    <td>-</td>
                    <td>-</td>
                    <td>{sum}</td>
                </tr>
            </tfoot>
        )
    }
}

class Receipt extends React.Component {
    render() {
        return (
            <table>
                <ReceiptHeader/>
                <ReceiptItems dataPro={products}/>
                <ReceiptFooter dataPro2={products}/>

            </table>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <Receipt />
        )
    }
}


/**
 * Nie zmieniajcie kodu poniżej
 */
ReactDOM.render(<App/>, document.getElementById("app"));

export {App, ReceiptFooter, ReceiptItem, ReceiptItems, ReceiptHeader, Receipt};
