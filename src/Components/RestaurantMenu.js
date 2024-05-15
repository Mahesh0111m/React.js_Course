import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurant";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu =()=>{

    const [showIndex , setshowIndex] = useState(null);

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo===null) 
        {
            return <Shimmer/>
        };

   const {name , cuisines ,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

   const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);


   const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
   );
//console.log(categories);

    return(
        <div className="text-center">
         <h1 className="font-bold my-5 text-2xl">{name}</h1>
        <p className="font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage}
        </p>
        { categories.map((category , index)=>{
            //controlled component
           return <RestaurantCategory key={category?.card?.card?.title} 
                        data={category?.card?.card}
                        showItems={index === showIndex && true}  
                        setshowIndex={()=> setshowIndex(index)} />;
          
        })}
        

        </div>
    )
}



export default RestaurantMenu;