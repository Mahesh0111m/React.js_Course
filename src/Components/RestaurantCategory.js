import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory = ({data , showItems ,setshowIndex})=>{
   //const [showItems, setshowItems] = useState(false);

   const handleClick = ()=>{
   setshowIndex();
   }
   
    return(
        <div>
            {/**Header */}
           <div className="w-6/12 mx-auto my-4 bg-gray-90 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick} >
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})
            </span>
            <span>🔽</span>
            </div>
             {/**Accordian Body */}

           { showItems && <ItemList items={data.itemCards} /> }
           </div>

          
           
        </div>
    )
};

export default RestaurantCategory;