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
 {/*  const issmall = useMediaQuery({ query: "(max-width: 700px)" });
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
      ? (ref1?.current.style.display = "block")
      : (ref1?.current.style.display = "none");
    block2
      ? (ref2?.current.style.display = "block")
      : (ref2?.current.style.display = "none");
    block3
      ? (ref3?.current.style.display = "block")
      : (ref3?.current.style.display = "none");
  }, []);
  useEffect(() => {
    block1
      ? (ref1?.current.style.display = "block")
      : (ref1?.current.style.display = "none");
    block2
      ? (ref2?.current.style.display = "block")
      : (ref2?.current.style.display = "none");
    block3
      ? (ref3?.current.style.display = "block")
      : (ref3?.current.style.display = "none");
  }, [!block1, !block2, !block3]);*/}
  return (
    <>
      <Container>
        <FooterMain>
          <Flex>
        
              <h4  >Discover</h4>

              <div  >
            
                  <a href="#">Researches</a>
           
           
                  <a href="#">Lectures</a>
           
            
                  <a href="#">Surgeries</a>
             
              
                  <a href="#">Training</a>
           
              </div>
        
          </Flex>
{/*
          <Flex>
        
              <h4 onClick={() => setBlock2(!block2)}>Fields</h4>

              <div ref={ref2}>
                    <a href="#">Heart</a>
               
               
                  <a href="#">Lungs</a>
             
              
                  <a href="#">Kidney</a>
              
              
                  <a href="#">Bones</a>
               
              
              
              </div>
         
          </Flex>
          <Flex>
            
              <h4 onClick={() => setBlock3(!block3)}>About us </h4>

              <div ref={ref3}>
                 
                  <a href="#">Site map</a>
                
              
                  <a href="#">Location</a>
             
                  <a href="#">FAQS</a>
          
              </div>
          
          </Flex>*/}

          <FlexSocial>
            <h4>Social media</h4>
            <div style={{ display: "flex", gap: "12px" }}>
              <FontAwesomeIcon
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: "#4968ad",
                }}
                icon={faFacebook}
              />
              <FontAwesomeIcon
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: "#0a66c2",
                }}
                icon={faLinkedin}
              />
              <FontAwesomeIcon
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: " #1da1f2",
                }}
                icon={faTwitter}
              />
              <FontAwesomeIcon
                style={{ fontSize: "1.5rem", color: "red", cursor: "pointer" }}
                icon={faYoutube}
              />
            </div>
            <p>Get email offers and the latest news from our team.</p>
         
          </FlexSocial>
        </FooterMain>
      </Container>{" "}
      <div
        style={{
          display: "flex",
          position: "relative",
         
          width: "100%",

          justifyContent: "space-around",
        }}
      > <img alt="" src={logo} />
           <a
              href="/signup"
              style={{
                color: "white",
                backgroundColor: "var(--main)",
                border: "none",
                outline: "none",
                width:'7rem',
                textAlign:'center',
                lineHeight:'2rem',
                cursor: "pointer",
                height:'2rem',
                textDecoration: "none",
              }}
            >
              Sign up
            </a>
       
      </div>
    </>
  );
}

export default Footer;

const FooterMain = styled.div`
 display:flex;
 justify-content: space-around;
 width:100%;
  
 flex-wrap:wrap;


`;
const Flex = styled.ul`
  flex :50%; 
  width:fit-content;
 margin:auto;
   padding:0;
  margin:0;
  h4{
    width:fit-content;
    margin:auto;
  }
  div{
   width:fit-content;
 margin:auto;
    a{
      display:block;
       margin:auto;
      
      font-weight:600;
      font-size:1rem;
      text-decoration:none;
      color:brown;
      :hover{
        text-decoration:underline;
      }
    }
  }
  @media (max-width:800px){
      flex:50%;
  }
`;
const Container = styled.div`
 
  border-top:2px solid var(--main);
  padding-top:2rem;
`;
const FlexSocial = styled.div`
  display: flex;
  flex:50%;
  
  justify-content:space-around;
  align-items:center;
  p{
    text-align:center;
  }
  flex-direction: column;
  > * {
    margin-bottom: 2rem;
  }
  :last-child {
    margin-bottom: 1rem;
  }

  @media (max-width: 700px) {
    align-items: center;
  }
`;
