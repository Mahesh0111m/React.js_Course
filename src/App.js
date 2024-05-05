import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";


//console.log(resList.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info);


const AppLayout = ()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);