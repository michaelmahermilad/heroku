import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBars, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
function Categories() {
  return (
    <Container>
      <Div1>
        <Link to=""></Link>
        <p>Categories</p>
        <HoverDiv className="div">
          <Link  to="">
            <p>Products</p>
          </Link>
          <Link   to="">
            <p>Specials</p>
          </Link>
          <Link    to="">
            <p>FAQS</p>
          </Link>
          <div    className="divaa">
            <p>ALL Products</p>
          </div>
        </HoverDiv>
        <FontAwesomeIcon
          style={{
            backgroundColor: "#1FA47C",
            padding: ".6rem",
            borderRadius: "4px",
            color: "white",
            cursor: "pointer",
            fontSize: "1rem",
          }}
          icon={faBars}
        />
      </Div1>
      <Div2>
        <Link to="">
          <FontAwesomeIcon
            style={{
              backgroundColor: "#1FA47C",
              padding: ".6rem",
              borderRadius: "4px",
              color: "white",
              cursor: "pointer",
              fontSize: "1rem",
            }}
            icon={faHome}
          />
        </Link>
        <Link className="disappear"  to="">
          <p>Products</p>
        </Link>
        <Link  className="disappear" to="">
          <p>Specials</p>
        </Link>
        <Link  className="disappear" to="">
          <p>FAQS</p>
        </Link>
        <Link className="disappear"  to="">
          <p>Contact us</p>
        </Link>
      </Div2>
      <Div3>
        <FontAwesomeIcon
          style={{
            backgroundColor: "#1FA47C",
            padding: ".6rem",
            borderRadius: "4px",
            color: "white",
            cursor: "pointer",
            fontSize: "1rem",
          }}
          icon={faPhone}
        />
        <p  className="disappear"    >Call us: +0911237878</p>
      </Div3>
    </Container>
  );
}

export default Categories;
const Container = styled.div`


  display: flex;
  align-items: center;
  height: 4rem;
  @media (max-width:950px){
    .disappear{
  display:none;
}
  }


`;
const Div1 = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 4rem;
  width: 12rem;
  background-color: #1fa47c;
  margin-left: 2rem;
  border-top-left-radius: 6px;
  padding: 1rem;
  justify-content: space-around;
  margin-right: 2rem;
  p {
    height: 4rem;
    line-height: 4rem;
  padding: 0;
  margin: 0;
    color: white;
  }
  :hover {
  
    .div {
        opacity:1;
       top: 4rem;
    }
  }

`;
const HoverDiv = styled.div`
  border: 1px solid #e5e5e5;
  height: fit-content;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 4rem;
  opacity: 0;
  z-index: 9;
  background-color: #ffffff;
  left: 0;
  width: 12rem;
  transition: all .2s linear;
  .divaa {
    display: flex;
    align-items: center;
    height: 2rem;
    width: 12rem;
    background-color: #1fa47c;

     
    p {
      padding: 0rem 1rem;
      
      margin:0;
    height: 0rem;
    line-height: 0;
      :hover {
      color: #ffffff;
    }
    }
  }
  a{
      text-decoration: none;
  }
  p {
    padding: 0rem 1rem;
    height: 2rem;
    line-height: 2rem;

    color: black;
    :hover {
      color: #1fa47c;
    }
  }
`;
const Div2 = styled.div`
  display: flex;
  height: 4rem;
  width: 20rem;
  justify-content: space-between;
  align-items: center;
  a{
    text-decoration: none;
  }
  p {
    height: 4rem;
    margin:0;
    padding: 0;
    line-height: 4rem;
    color:green;
 
     :hover{
color:gray;
    }
  }
`;
const Div3 = styled.div`
  height: 4rem;

  display: flex;
  align-items: center;
  p {
    height: 4rem;
    margin:0;
    padding: 0;
    line-height: 4rem;
    color:green;
  }
  position: absolute;
  right: 3rem;
  > * {
    margin-right: 1rem;
  }
  padding-left: 2rem;
  border-left: 1px solid #e5e5e5;
`;
