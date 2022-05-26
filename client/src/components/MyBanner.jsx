import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Header";
import a from "../images/a.webp";
import Main from "../images/Main.svg";
import gsap from "gsap";
function MyBanner(props) {
  useEffect(()=>{
    var tl = gsap.timeline({
        repeat: 100, 
        repeatDelay:18,
        
      });
     tl.fromTo("#r",   {opacity:.8,scale:.6 ,rotate:-9 , },{duration:1,rotate:0 ,y:10, opacity:1,   scale:1});         


},[])


  return (
    <div>
      <Banner>
        <BannerLeft><h2 className="banneer-title">
            Medical Data for Students and Researchers.
          </h2>
          <img style={{ display: "block", }} src={a} />
          
        </BannerLeft>
        <BannerRight>
          <img  id="r"    src={Main} />
          <Button
            background={"var(--main2)"}
            textcolor={"var(--main)"}
            width={"17rem"}
            height={"2.5rem"}
            style={{ marginTop: "2rem" }}
            onClick={props.openModal}
          >
            Join The Community Now
          </Button>
        </BannerRight>
      </Banner>
    </div>
  );
}

export default MyBanner;
const Banner = styled.div`
  padding-top: 8rem;
  padding-right: 7%;
  padding-left: 7%;
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    padding-top: 7rem;

    flex-direction: column;
    
  }
  @media (max-width: 500px) {
  
    flex-direction: column;
  }
`;
const BannerLeft = styled.div`

 flex:50%;
img{
  width:60%;
  @media (max-width: 800px) {
    text-align: center;
    display:block;
    width:60%;
    margin:auto;
    margin-bottom:3rem;
  }

}
  h2 {
    width: 86%;
    line-height: 2.1rem;
    font-weight: 800;
    letter-spacing: 1px;
    padding-bottom: 2rem;
    color: var(--main);
    font-size: 1.6em;
    @media (max-width:900px){
      width:90%;

    }
    @media (max-width: 800px) {
      text-align: center;
      margin:auto;
    }
  }

 
`;
const BannerRight = styled.div`
flex:50%;
  img {
    margin: auto;
    display: block;
 width:90%;
    
  }
`;
