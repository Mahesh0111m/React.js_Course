import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    const [btnName,setbtnName] = useState("Login");

    const OnlineStatus = useOnlineStatus();

    return(
        <div className="flex justify-between bg-pink-100 shadow-md ">
            <div className="logo-container">
                <img  className="w-32"  src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        OnlineStatus:{OnlineStatus? "🟢" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/" >Home</Link>
                    </li>
                    <li className="px-4">
                         <Link to="/about" >About us</Link>
                    </li>
                    <li className="px-4">
                         <Link to="/Contact" >Contact</Link>
                    </li>
                    <li className="px-4">
                         <Link to="/grocery" >Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={()=>{
                        btnName === "Login" ? setbtnName("Logout"): setbtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;