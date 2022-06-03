import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.svg";
import { faSearch,faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Header/Header.css'
function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 100) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };
useEffect(()=>{
  window.scrollTo(0, 0);



},[])
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);





  return (
    <div    style={{backgroundColor:show? "rgba(12, 33, 19, 0.096)":"white"}} className="NAVBAR">
      <div className="LOGO">
       
        <img  className="IMG" src={logo} />
      </div>


      <div className="INPTCONTAINER">
      
        <input className="INPT" placeholder="Search ..." />
        <span className="ICN">
          <FontAwesomeIcon icon={faSearch} /> 
        </span>
      </div>

      <div className="button">  <FontAwesomeIcon style={{fontSize:'1rem'}}   icon={faBars} /> </div>



      <div className="LNKS">
       
        <Link to='/' style={{color:show?'white':'#8f6420'}}    className="menu">Heart Care</Link>
        <Link to='/'   style={{color:show?'white':'#8f6420'}}    className="menu">Mental Health</Link>
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
