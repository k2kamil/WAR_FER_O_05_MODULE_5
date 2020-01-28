import React from "react";
import ReactDOM from "react-dom";

function CardName({imię, nazwisko}) {
    return <h1>{imię} {nazwisko}</h1>
}

function CardJobTitle ({stanowisko}) {
    return <h1>{stanowisko}</h1>
}

function CardEmail ({email}) {
    return <a href={`mailto:${email}`}>{email}</a>
}

function CardNumer({numerTelefonu}) {
    return <a href={numerTelefonu}>{numerTelefonu}</a>
}


function CardGenerator ({imię, nazwisko, stanowisko, email, numerTelefonu}) {
    return (
        <>
        <CardName imię={imię} nazwisko={nazwisko} />
        <CardJobTitle stanowisko={stanowisko}/>
        <div>
        <CardEmail email={email} />
        </div>
        <div>
        <CardNumer numerTelefonu={numerTelefonu} />
        </div>
        </>
    )
}


function App () {
    return <CardGenerator numerTelefonu={727283828} stanowisko='inżynier' imię='Jan' nazwisko='Kowalski' email='przykladowy@maill.com' />
}



/**
 * Nie zmieniajcie kodu poniżej
 */
ReactDOM.render(<App />, document.getElementById("app"));

