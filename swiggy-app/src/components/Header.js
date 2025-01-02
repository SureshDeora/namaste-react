import { useContext, useState } from "react";
import {LOGO_URL} from "../utils/constants"
import {Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnName, setBtnName] = useState("Login")
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  // console.log(loggedInUser)
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li> Status: {onlineStatus == true ? "🟢" : "🔴"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <button className="login-btn" onClick={() => {
              // setBtnName(btnName === "Login" ? "Logout" : "Login");
              btnName === "Login"? setBtnName("Logout") : setBtnName("Login");
            }}>{btnName}</button>
            {/* <li>{loggedInUser}</li> */}
          </ul>
        </div>
      </div>
    )
  }
  export default Header;