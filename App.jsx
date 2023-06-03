// import React from "react";
// import Heading from "./Heading";
// import Para from "./Para";
// import List from "./List";

// function App(){
//     return(
//         <>
//         <Heading/> Hello
//         <Para/>
//         <List/>
//         <Heading/>
//         </>
//     );
// }

// export default App; 

// --------------MOdule export and import-------------------------
// const youtube = "jaigurudev";
// const name = "aditya";

// function Xyz() {
//     let name = "asd";
//     return name;
// };
// function Abd() {
//     return (<h1>jai gurudev</h1>);
// }
// export default youtube;
// export { name, Xyz, Abd }; 

// --------------------- Challenge  to make a calculator --------------------------------

// import React from "react";

// function Sum(x, y) {
//     return x + y
// };
// function Sub(x, y) {
//     return x - y;
// }
// function Mult(x, y) {
//     return x * y
// }
// function Div(x, y) {
//     let div = x/y;
//     return div.toFixed(2)
// }

// export default Sum;
// export { Sub, Mult, Div };

// ----------------------------- Netflix and amazon------------------

import React from "react";
import Netflix from "./Netflix";
import Amazon from './Amazon';

let a = prompt("Enter ' netflix ' or ' amazon '")
// const Favs = () => {
//     if (a == 'amazon') {
//         return <Amazon />
//     }
//     else if (a == 'netflix') {
//         return <Netflix />
//     }
// }
// const Favs = () => {
//     return ((a == 'amazon') ? <Amazon />: <Netflix />)
// }
const App = () => {
    return (
        <>
            <h2 className='heading_style'>Enjoy the webseries</h2>
            {(a == 'amazon') ? <Amazon />: <Netflix />}
        </>
    )
}

export default App;
// {Sdata.map((val) => {
//     return (
//         <Cards
//             key={val.id}
//             imgsrc={val.imgsrc}
//             link={val.links}
//             sname={val.sname}
//             title={val.title}
//         />
//     )
// })};