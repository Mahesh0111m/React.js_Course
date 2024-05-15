import { MENU_URl } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantMenu =(resId)=>{

    const [resInfo,setresInfo] = useState(null);

useEffect(()=>{
    fetchMenu();
},[]);

const fetchMenu = async ()=>{
    const data= await fetch(
       MENU_URl +resId
    );
    

    const json = await data.json();
    
    setresInfo(json.data);
    
}; 

    return resInfo;
};

export default useRestaurantMenu;