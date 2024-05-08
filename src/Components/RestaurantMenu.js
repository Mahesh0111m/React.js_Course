import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurant";

const RestaurantMenu =()=>{

    //const [resInfo,setresInfo] =useState(null);

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo===null) 
        {
            return <Shimmer/>
        };

   const {name , cuisines ,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

   const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   

//console.log(resInfo.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    return(
        <div className="menu">
         <h1>{name}</h1>
        <p>{cuisines.join(",")} - {costForTwoMessage}</p>
        
        <h2>Menu</h2>
        <ul>
            {
                itemCards.map((item)=>{
                    return   <li key={item.card.info.id}> {item.card.info.name}</li>;
                  
                })
            }
        </ul>

        </div>
    )
}



export default RestaurantMenu;