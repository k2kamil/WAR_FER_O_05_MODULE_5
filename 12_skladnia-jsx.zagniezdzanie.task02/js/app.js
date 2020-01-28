import React from "react";
import ReactDOM from "react-dom";
import people from "./data/people";

console.log(people);


let box = [];

// for (let i=0; i < people.length; i++) {
//     console.log(people[i]);
//
//     box.push( <React.Fragment>
//         <div className="person">
//             <img src={people[i].avatar} />
//             <div className="info">
//                 <h1>{people[i].title} {people[i].name} {people[i].surname}</h1>
//                 <p>{ people[i].bio }</p>
//             </div>
//         </div>
//     </React.Fragment>);
// }

box = people.map(el => {
    console.log(el);
    return (
       <React.Fragment>
           <div className="person">
               <img src={el.avatar} />
               <div className="info">
                   <h1>{el.title} {el.name} {el.surname}</h1>
                   <p>{el.bio }</p>
               </div>
           </div>
       </React.Fragment>
   );
});
console.log(box);

ReactDOM.render(box, document.getElementById('app'));