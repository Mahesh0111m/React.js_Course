import { RES_URL } from "../utils/constants";

const RestaurantCard =(props)=>{
    const {resData} = props;
    const {name,cuisines,avgRating, costForTwo, cloudinaryImageId} = resData.info;
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src={RES_URL + cloudinaryImageId}/>
          <h3>{name}</h3>
          <h4>{cuisines[0]}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{costForTwo}</h4>
            
        </div>
    )
}

export default RestaurantCard;