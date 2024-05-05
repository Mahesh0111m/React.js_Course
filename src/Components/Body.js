import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body =()=>{

    const [listofRestaurants,setlistofRestaurants] = useState(resList);

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                  const filteredList = listofRestaurants.filter(
                    (res)=>res.info.avgRating > 4
                  );
                  setlistofRestaurants(filteredList);
                }}>Top Reated Restaurants</button>
                </div>
            <div className="res-container">
               {
                listofRestaurants.map((restaurant)=>{
                    return <RestaurantCard key={restaurant.info.id}  resData={restaurant}/>
                })
               }
            </div>

        </div>
    )
}

export default Body;