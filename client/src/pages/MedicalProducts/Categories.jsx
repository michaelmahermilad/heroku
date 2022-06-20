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
          <Link to="">
            <p>Products</p>
          </Link>
          <Link to="">
            <p>Specials</p>
          </Link>
          <Link to="">
            <p>FAQS</p>
          </Link>
          <div className="divaa">
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
        <Link to="">
          <p>Products</p>
        </Link>
        <Link to="">
          <p>Specials</p>
        </Link>
        <Link to="">
          <p>FAQS</p>
        </Link>
        <Link to="">
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
        <p>Call us: +0911237878</p>
      </Div3>
    </Container>
  );
}

export default Categories;
const Container = styled.div`


  display: flex;
  align-items: center;
  height: 4rem;
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
    height: 0rem;
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
  top: 4.7rem;
  opacity: 0;
  z-index: 9;
  background-color: #ffffff;
  padding-top: 1rem;
  width: 12rem;
  transition: all .2s linear;
  .divaa {
    display: flex;
    align-items: center;
    height: 2.4rem;
    width: 12rem;
    background-color: #1fa47c;

    padding: 1rem;
     
    p {
      padding: 0.5rem 1rem;
      height: 0rem;
      :hover {
      color: #ffffff;
    }
    }
  }
  p {
    padding: 0.5rem 1.9rem;
    height: 0rem;
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
  p {
    height: 0rem;
  }
`;
const Div3 = styled.div`
  height: 4rem;

  display: flex;
  align-items: center;
  p {
    height: 0rem;
  }
  position: absolute;
  right: 3rem;
  > * {
    margin-right: 1rem;
  }
  padding-left: 2rem;
  border-left: 1px solid #e5e5e5;
`;
