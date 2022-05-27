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
      <Divider />
      <Divider />
      <Divider />

  <IconCards />
  <Divider />
  <Divider />
  <Divider />

      <Divider />
      <SimpleDrawer />
      <Divider />
      <Swipper />
      <Divider />

      <Divider />
      <Divider />
      <Divider />
      <Articles />         <Divider />
      <Divider />
     <AnimaGasp />      
     
      <Sendmail/> 
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider />

      <Footer />
   


      <SupportEngine />
    </div>
  );
}

export default Home;
const Divider = styled.div`
  height: 1rem;
  @media(max-width:600px){
    height:2rem;

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
  font-family:Cursive;

  @media (max-width:700px){
    font-size: 1rem;
    width: 80%;
    margin: auto;
    line-height: 3rem;
    text-align: justify;
  }
`;
