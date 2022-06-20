import React from "react";
import Articles from "../components/Articles";
import MyBanner from "../components/MyBanner";

import SimpleDrawer from "../components/SimpleDrawer";
import IconCards from "../components/IconCards/IconCards";
import { Swipper } from "../components/Swipper";
import styled from "styled-components";
 import AnimaGasp from "./AnimaGasp";
import SupportEngine from "../chat/SupportEngine";
import Sendmail from "../components/Sendmail";

function Home({ openModal }) {
  return (
    <div>
      <MyBanner openModal={openModal} />
      <Divider height="5rem"/>
      <IconCards/>
      <Divider height="5rem"/>
      <SimpleDrawer />
      <Divider height="5rem"/>
      <Swipper/>
      <Divider height="5rem"/>
      <Articles/>
      <Divider height="5rem"/>
      <AnimaGasp/>
      <Divider height="5rem"/>
      <Sendmail/>
      <Quote> </Quote>
      <SupportEngine/>
    </div>
  );
}

export default Home;
export const Divider = styled.div`
  height: ${(props) => props.height};
  @media (max-width: 600px) {
    height: 4rem;
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
  font-family: Cursive;

  @media (max-width: 700px) {
    font-size: 1rem;
    width: 80%;
    margin: auto;
    line-height: 3rem;
    text-align: justify;
  }
`;
