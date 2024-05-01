import React from "react";
import ReactDOM from "react-dom/client";


const Heading = ()=> { return <h1 className="head">
            <Tilte/>
             Hello World from Functional comp
                </h1>}
                     

const Tilte = ()=>{
    return (
        <h1>M</h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);