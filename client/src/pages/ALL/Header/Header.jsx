import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.svg";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Header/Header.css'
function Header() {
  return (
    <div className="NAVBAR">
      <div className="LOGO">
       
        <img  className="IMG" src={logo} />
      </div>
      <div className="INPTCONTAINER">
      
        <input className="INPT" placeholder="What do you want to search for?" />
        <span className="ICN">
          <FontAwesomeIcon icon={faSearch} /> 
        </span>
      </div>
      <div className="LNKS">
       
        <Link to='/' className="menu">Heart Care</Link>
        <Link to='/'   className="menu">Mental Health</Link>
      </div>
      <div  className="AUTH">
        <Link   to='/'  className="LINK">
          <button className="auth">SIGN UP</button>
        </Link>
        <Link  to='/'  className="LINK">
          <button className="auth">SIGN IN</button>
        </Link>
      </div>
    </div>
  )
}

export default Header
