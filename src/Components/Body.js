import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body =()=>{

    const [listofRestaurants,setlistofRestaurants] = useState([]);
    const [filteredRestaurant,setfilteredRestaurant] = useState([]);

    const [searchText,setsearchText] =useState("");
    const OnlineStatus = useOnlineStatus();

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    

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

    if(OnlineStatus===false){
        return (<h1>
            Looks like you are offline please check your internet connection
            </h1>
            );
    }
    

    if(listofRestaurants.length === 0)
        {
            return <Shimmer/>;
        }


    return(
        <div className="body">
            <div className="filter flex">
                <div className="search-btn m-4 p-4">

                    <input  type="text" className="border border-solid border-black" value={searchText}
                    onChange={(e)=>setsearchText(e.target.value)}/>

                    <button className="px-4 py-2 bg-blue-100 m-4 rounded-full"
                    onClick={()=>{
                        const filteredList = listofRestaurants.filter(
                            (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                         setfilteredRestaurant(filteredList);

                    }}>Search</button>

                </div>
                <div className="search-btn m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-green-100 rounded-full" onClick={()=>{
                  const filteredList = listofRestaurants.filter(
                    (res)=>res.info.avgRating > 4
                  );
                  setlistofRestaurants(filteredList);
                }}>Top Reated Restaurants</button>
                </div>
                </div>
            <div className="flex flex-wrap">
               {
                filteredRestaurant.map((restaurant)=>{
                    return <Link key={restaurant.info.id}
                     to={"/restaurants/" + restaurant.info.id}>

                     {/**if restaurant is promoted we will add promoted label */}

                     {restaurant.info.availability.opened ? (<RestaurantCardPromoted resData={restaurant}/>): <RestaurantCard  resData={restaurant}/> }
                     </Link>
                })
               }
            </div>

        </div>
    )
}

export default Body;