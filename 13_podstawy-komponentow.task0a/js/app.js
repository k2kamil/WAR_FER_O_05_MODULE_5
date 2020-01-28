import React from "react";
import ReactDOM from "react-dom";

// function SearchFunc (){
//    return <form>
//         <input type="text" />
//         <button>Wyszukaj</button>
//     </form>;
// };



class SearchClass extends React.Component {
    render() {
        return (<form>
            <input type="text" />
            <button>Wyszukaj</button>
        </form>);
    }
}

ReactDOM.render(<SearchClass/>, document.getElementById('app'));
