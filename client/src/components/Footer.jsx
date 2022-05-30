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

function Footer() {
  {
    /*  const issmall = useMediaQuery({ query: "(max-width: 700px)" });
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
  }, [!block1, !block2, !block3]);*/
  }
  return (
    <>
     
        <FooterMain>
          <FlexSocial>
            <h4 style={{ color:'brown',  fontSize: '18.5px',fontweight:'800'}}>Social media</h4>
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
    
      <div style={{ width:'100%',display:'flex',marginBottom:'3rem',justifyContent:'space-around'}}>
 
        <div style={{flex:'50%'}}  >
        <img style={{display:'block',maxWidth:'9rem',margin:'auto'}}  alt=""  src={logo}  /></div>
        <div style={{flex:'50%'}}   ><a href="/signup" className="buttonfooter"  style={{display:'block',maxWidth:'9rem',margin:'auto' ,textAlign:'center',textDecoration:'none',borderRadius:'23px'}}  >
          Sign up
        </a></div>
      </div>
    </>
  );
}

export default Footer;

const FooterMain = styled.div`


`;
const Flex = styled.ul``;
const Container = styled.div`


`;
const FlexSocial = styled.div`
  display: flex;
  flex: 50%;

  justify-content: space-around;
  align-items: center;
  p {
    text-align: center;
    font-size: 18.5px;
    max-width:80%;
    margin:auto;
  }

  @media (max-width:700px){
    p{
      font-size:.8rem;
    }
  }
  flex-direction: column;
  > * {
    margin-bottom: 2rem;
  }
  :last-child {
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  @media (max-width: 700px) {
    align-items: center;
  }
`;
