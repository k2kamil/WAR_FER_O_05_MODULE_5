import React from "react";
import ReactDOM from "react-dom";


/**
 * Nie modyfikujcie kodu poniżej
 */
function App() {
  return (
    <div>
      <h1>Test okna modalnego</h1>
      <Modal heading="Zapisz się do newslettera" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));

export { App, Modal };
