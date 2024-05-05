import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";

const Body =()=>{

    const [listofRestaurants,setlistofRestaurants] = useState([]);
    const [filteredRestaurant,setfilteredRestaurant] = useState([]);

    const [searchText,setsearchText] =useState("");

    

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data= await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        setlistofRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if(listofRestaurants.length === 0)
        {
            return <Shimmer/>
        }

    return(
        <div className="body">
            <div className="filter">
                <div className="search-btn">

                    <input type="text" className="search-box" value={searchText}
                    onChange={(e)=>setsearchText(e.target.value)}/>

                    <button onClick={()=>{
                        const filteredList = listofRestaurants.filter(
                            (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                         setfilteredRestaurant(filteredList);

                    }}>Search</button>

                </div>
                <button className="filter-btn" onClick={()=>{
                  const filteredList = listofRestaurants.filter(
                    (res)=>res.info.avgRating > 4
                  );
                  setlistofRestaurants(filteredList);
                }}>Top Reated Restaurants</button>
                </div>
            <div className="res-container">
               {
                filteredRestaurant.map((restaurant)=>{
                    return <RestaurantCard key={restaurant.info.id}  resData={restaurant}/>
                })
               }
            </div>

        </div>
    )
}

export default Body;