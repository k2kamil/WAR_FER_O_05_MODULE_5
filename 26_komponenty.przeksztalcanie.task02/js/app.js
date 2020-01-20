import React from "react";
import ReactDOM from "react-dom";


function CurrencyConverter(props) {
    const { fromCurr, toCurr, fromVal, convRate } = props;
    const toVal = fromVal * convRate;
    return (
        <div>
            <strong>{fromVal.toFixed(2)}</strong> {fromCurr} =&gt; <strong>{toVal.toFixed(2)}</strong> {toCurr}
        </div>
    );
}

function App(props) {
    return (
        <>
            <CurrencyConverter fromCurr="PLN" toCurr="EUR" fromVal={250} convRate={0.25} />
            <CurrencyConverter fromCurr="EUR" toCurr="EUR" fromVal={120} convRate={4} />
            <CurrencyConverter fromCurr="USD" toCurr="EUR" fromVal={1000} convRate={0.94} />
        </>
    );
}


/**
 * Nie zmieniajcie kodu poniżej
 */
ReactDOM.render(<App />, document.getElementById("app"));

export { CurrencyConverter, App };
