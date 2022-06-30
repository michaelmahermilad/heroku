import React, { useEffect, useState } from "react";
import Com from "./images/Com.svg";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import AutoCompleteSearch from "../../components/Autocomplete/AutoComplete";
import AutoSearch from "../../components/Autocomplete/myauto";
import { setRef } from "@mui/material";
import { FlexSocial } from "../../components/Footer";
 import {
  faFacebook,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
function NavBAR({ funct ,pro,setR }) {
  const src = Com;
  const [zoom, setZoom] = useState({
    backgroundImage: `url(${src})`,
    backgroundPosition: "0% 0%",
  });
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoom({ ...zoom, backgroundPosition: `${x}% ${y}%` });
  };
  const handle = (e) => {
    setZoom({
      backgroundImage: `url(${src})`,
      backgroundPosition: "0% 0%",
    });
  };
 
  const key = (e) => {
   
      funct(e.target.value);
      setR('start')

    
  };

  return (
    <>
 
 
            <div style={{ display: "flex" ,backgroundColor:"#1FA47C", width:'100vw',display:'flex',height:'1.5rem',alignItems:'center',justifyContent:'center', margin:'0px  auto 4px auto'}}>
              <FontAwesomeIcon
                style={{
                  fontSize: "1rem",
                  cursor: "pointer",
                  color: "#ffffff",
                  marginRight:'1rem'
                }}
                icon={faFacebook}
              />
              <FontAwesomeIcon
                style={{
                  fontSize: "1rem",
                  cursor: "pointer",
                  color: "#ffffff", marginRight:'1rem'
                }}
                icon={faLinkedin}
              />
              <FontAwesomeIcon
                style={{
                  fontSize: "1rem",
                  cursor: "pointer",
                  color: " #ffffff", marginRight:'1rem'
                }}
                icon={faTwitter}
              />
              <FontAwesomeIcon
                style={{ fontSize: "1rem", color: "white", cursor: "pointer" ,marginRight:'1rem' }}
                icon={faYoutube}
              />
            </div>   
 
        
 
         
     
   
      <Container>
        <Image src={src} />
<AutoSearch    keyE={key}  funct={funct}/>
       
        <ShoppingCart>
          <FontAwesomeIcon
            style={{
              backgroundColor: "#1FA47C",
              padding: ".6rem",
              borderRadius: "4px",
              color: "white",
              cursor: "pointer",
              fontSize: "1rem",
            }}
            icon={faCartShopping}
          />

          <Price>
            <p>LE.190B</p>

            <FontAwesomeIcon
              style={{ cursor: "pointer", fontSize: ".8rem", color: "green" }}
              icon={faAngleDown}
            />
          </Price>
        </ShoppingCart>
      </Container>{" "}
    </>
  );
}

export default NavBAR;
const Container = styled.div`
  a {
    text-decoration: none;
  }
  figure {
    width: fit-content;
    background-repeat: no-repeat;
  }

  figure:hover .img {
    opacity: 0;
  }

  .img {
    display: block;
    width: 100%;
    pointer-events: none;
  }

  background-color: #ffffff;
  height: 180px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px;
  border-bottom: 1px solid #e5e5e5;
  @media (max-width: 950px) {
    flex-direction: column;
    height: fit-content;
    > * {
      margin-bottom: 1.5rem;
    }
  }
`;
const Image = styled.img`
  width: 19rem;
  @media (max-width: 950px) {
    width: 80vw;
  }
`;
 export const SearchBar = styled.div`
  width: 20rem;
  height: 2.6rem;
  background-color: #776c6c14;
  border-radius: 8px;
  left: calc(100% - 50%);
  position: absolute;
  transition: all .2s linear;
 
 
 
  ul{
    padding-left: 0;
     display:none;
    margin-top: .1rem;
   z-index: -99;

    

  }

  .active{
    background-color: #e4e4e4;
  }
  :hover{
    ul{
      display: block;
    }
  }
  
  ul :not(:last-child) {
  border-bottom: 1px solid #e1e1e1;
  padding: 2px 0px;

  }

  @media (max-width: 950px) {
    width: 90%;
    position: relative;
    left: auto;
    margin: auto;
    z-index: 999999;
    margin-bottom: 2rem;

  }
`;
  export const Input = styled.input`
  height: 100%;
  width: 87%;
  z-index: 999;
  background-color: inherit;
  border-radius: 5px;
  outline: none;
  padding-left: 1rem;
  border: none;
  @media (max-width: 800px) {
 width:85%;
  }
`;
const ShoppingCart = styled.div`
  display: flex;
  align-items: center;
  left: calc(100% - 16%);
  position: absolute;
  @media (max-width: 950px) {
    position: relative;
    left: auto;
    width: fit-content;
    margin: auto;
  }
`;
const Price = styled.div`
  display: flex;
  align-items: center;
 
  p {
    font-weight: 700;
    height: .7rem;

    color:black;
  }
  > * {
    margin-left: 1rem;
  }
`;
