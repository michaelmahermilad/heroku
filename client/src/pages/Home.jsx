import React from "react";
import Articles from "../components/Articles";
import MyBanner from "../components/MyBanner";

import SimpleDrawer from "../components/SimpleDrawer";
import IconCards from "../components/IconCards/IconCards";
import { Swipper } from "../components/Swipper";
import styled from "styled-components";
import banner2 from "../images/banner2.svg";
import Footer from "../components/Footer";
import AnimaGasp from "./AnimaGasp";
import SupportEngine from "../chat/SupportEngine";
import Sendmail from "../components/Sendmail";
 
function Home({ openModal }) {
  return (
    <div>
      <MyBanner openModal={openModal} />
      <Divider />
      <Quote>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="transparent" />
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
        </svg>
        &nbsp; We Intented this website to serve various medical fields with the
        Knowledge needed to help Patients and save Lives, be one of us ! &nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="transparent" />
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
        </svg>
      </Quote>
      <Divider />
      <SimpleDrawer />
      <Swipper />
      <Divider />
      <IconCards />
      <AnimaGasp />
      <Articles />
      <Divider />
      <Sendmail/>   <Divider />
      <Footer />
   


      <SupportEngine />
    </div>
  );
}

export default Home;
const Divider = styled.div`
  height: 5rem;
  @media(max-width:600px){
    height:3.7rem;

  }
`;
const Quote = styled.div`
  color: var(--main);
  font-size: 1.4rem;
  font-weight: 700;
  width: 50%;
  line-height: 3rem;
  text-align: center;
  margin: auto;
  
  @media (max-width:700px){
    font-size: 1rem;
    width: 80%;
    margin: auto;
    line-height: 3rem;
    text-align: justify;
  }
`;
