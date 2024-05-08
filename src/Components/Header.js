import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    const [btnName,setbtnName] = useState("Login");

    const OnlineStatus = useOnlineStatus();

    return(
        <div className="header">
            <div className="logo-container">
                <img  className="logo"  src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        OnlineStatus:{OnlineStatus? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                         <Link to="/about" >About us</Link>
                    </li>
                    <li>
                         <Link to="/Contact" >Contact</Link>
                    </li>
                    <li>
                         <Link to="/grocery" >Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnName === "Login" ? setbtnName("Logout"): setbtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;