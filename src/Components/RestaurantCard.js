import { RES_URL } from "../utils/constants";

const RestaurantCard =(props)=>{
    const {resData} = props;
    const {name,cuisines,avgRating, costForTwo, cloudinaryImageId} = resData.info;
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >

            <img className="rounded-lg" alt="res-logo" src={RES_URL + cloudinaryImageId}/>

          <h3 className="font-bold py-4 text-lg">{name}</h3>
          <h4>{cuisines[0]}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{costForTwo}</h4>
            
        </div>
    )
};

//higher order component

export const withPromotedLabel = (RestaurantCard) =>{
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-full">Open</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;