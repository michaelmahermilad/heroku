import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../images/logo.svg";

import { useMediaQuery } from "react-responsive";

function Footer() {
  const issmall = useMediaQuery({ query: "(max-width: 700px)" });
  const [block1, setBlock1] = useState(true);
  const [block2, setBlock2] = useState(true);
  const [block3, setBlock3] = useState(true);
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  useEffect(() => {
    if (issmall) {
      setBlock1(false);
      setBlock2(false);
      setBlock3(false);
    }
    block1
      ? (ref1.current.style.display = "block")
      : (ref1.current.style.display = "none");
    block2
      ? (ref2.current.style.display = "block")
      : (ref2.current.style.display = "none");
    block3
      ? (ref3.current.style.display = "block")
      : (ref3.current.style.display = "none");
  }, []);
  useEffect(() => {
    block1
      ? (ref1.current.style.display = "block")
      : (ref1.current.style.display = "none");
    block2
      ? (ref2.current.style.display = "block")
      : (ref2.current.style.display = "none");
    block3
      ? (ref3.current.style.display = "block")
      : (ref3.current.style.display = "none");
  }, [!block1, !block2, !block3]);
  return (
    <>
      <Container>
        <FooterMain>
          <Flex>
            <li>
              <h4 onClick={() => setBlock1(!block1)}>Discover</h4>

              <ul ref={ref1}>
                <li>
                  <a href="#">Researches</a>
                </li>
                <li>
                  <a href="#">Lectures</a>
                </li>
                <li>
                  <a href="#">Surgeries</a>
                </li>
                <li>
                  <a href="#">Training</a>
                </li>
              </ul>
            </li>
          </Flex>

          <Flex>
            <li>
              <h4 onClick={() => setBlock2(!block2)}>Fields</h4>

              <ul ref={ref2}>
                <li>
                  <a href="#">Heart</a>
                </li>
                <li>
                  <a href="#">Lungs</a>
                </li>
                <li>
                  <a href="#">Kidney</a>
                </li>
                <li>
                  <a href="#">Bones</a>
                </li>
                <li>
                  <a href="#">Sight</a>
                </li>
              </ul>
            </li>
          </Flex>
          <Flex>
            <li>
              <h4 onClick={() => setBlock3(!block3)}>About us </h4>

              <ul ref={ref3}>
                <li>
                  <a href="#">Site map</a>
                </li>
                <li>
                  <a href="#">Location</a>
                </li>
                <li>
                  <a href="#">FAQS</a>
                </li>
              </ul>
            </li>
          </Flex>

          <Flex>
            <h4>Social media</h4>
            <div style={{ display: "flex", gap: "12px" }}>
              <FontAwesomeIcon
                style={{ fontSize: "1.5rem", color: "#4968ad" }}
                icon={faFacebook}
              />
              <FontAwesomeIcon
                style={{ fontSize: "1.5rem", color: "grey" }}
                icon={faLinkedin}
              />
              <FontAwesomeIcon
                style={{ fontSize: "1.5rem", color: "#49a1eb" }}
                icon={faTwitter}
              />
              <FontAwesomeIcon
                style={{ fontSize: "1.5rem", color: "#eb3223" }}
                icon={faYoutube}
              />
            </div>
            <p>Get email offers and the latest news from our team.</p>
            <button
              style={{
                color: "white",
                backgroundColor: "brown",
                border: "none",
                outline: "none",
                width: "90%",
                padding: "5px",
              }}
            >
              Sign up
            </button>
          </Flex>
        </FooterMain>
      </Container>{" "}
      <div
        style={{
          display: "flex",
          position: "relative",
marginBottom:'2rem',
          width: "100%",

          justifyContent: "space-around",
        }}
      >
        <img src={logo} />
      </div>
    </>
  );
}

export default Footer;
const FooterMain = styled.div`
  display: flex;
  flex-wrap: nowrap;
  min-height: 16rem;

  gap: 1rem;
  align-items: start;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Flex = styled.ul`
flex:1;
display:flex;
justify-content:start;
flex-direction: column;
gap:1rem;
list-style:none;
position: relative;
  ul{
    list-style:none;
    
  }
h4{
  margin-bottom:1rem;
}
  p {
    font-size: 12px;
  }
:last-child{
  display:flex;
  flex-direction:column;
  gap:1rem;
  @media(max-width:700px){
    align-items:center;
     margin-bottom:2rem;  
    
  }
}
    li {
          a{
            display:block;
          
          line-height:1.5rem;
  color: brown;
        text-decoration: none;
    font-weight: 600;
    font-size:12px; 
     :hover { 
       border-radius:6px;
      text-decoration: underline;
    }

    @media (max-width:700px){
      
        display:block;
        width:100%;
        margin:auto;
        text-align:center;
      
    }
       } 
   
  
  

  
`;
const Container = styled.div`
  width: 88%;
  margin: auto;
  border-top: 3px solid brown;
  padding-top: 3rem;
`;
