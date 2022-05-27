import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useMediaQuery } from "react-responsive";
import e from "../images/e.jpg";
import w from "../images/w.png";
import pic3 from "../images/pic3.png";
import pic4 from "../images/pic4.png";
 
import pic6 from "../images/pic6.png";
import pic7 from "../images/pic7.png";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const Swipper = () => {
  const issmall = useMediaQuery({ query: "(max-width: 400px)" });
  const issmall2 = useMediaQuery({ query: "(max-width: 900px)" });

  return (
    <>
      <Heading
        style={{
          backgroundColor: "var(--main2)",
          borderRadius: "25px",
          padding: ".6rem",
          width: "fit-content",
          margin: "auto",
          textAlign: "center",
          color: "var(--main)",
         
          fontWeight: "700",
          
        }}
      >
       Their Smile Matters 
      </Heading>
      <Swiper
        style={{
          width: "87%",
          margin: "auto",
         marginTop:'2rem',
   height:'15rem',
          paddingBottom: "1rem",
        }}
        className='swipper'
        centeredSlides={true} 
        centeredSlidesBounds={true}
        spaceBetween={2}
        slidesPerView={issmall ? 1 : issmall2 ? 2 :5}
        autoplay={{
          delay: 2400,
          disableOnInteraction: false,
        }}
      
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        

 
 
        <SwiperSlide
           
        >
          {({ isActive }) => (
            <Card style={{ borderBottom: isActive ? "9px solid var(--main2)" : "" ,borderLeft:isActive ? "9px solid var(--main2)" : "" }}>
            <img
                src={pic3}
                style={{ display: "block"}}
              />
            </Card>
          )}
        </SwiperSlide>




        <SwiperSlide
           
        >
          {({ isActive }) => (
            <Card style={{ borderBottom: isActive ? "9px solid var(--main2)" : "" ,borderLeft:isActive ? "9px solid var(--main2)" : "" }}>
            <img
                src={w}
                style={{ display: "block"}}
              />
            </Card>
          )}
        </SwiperSlide>
     
   
        
        <SwiperSlide
           
        >
         
          {({ isActive }) => (
            <Card style={{ borderBottom: isActive ? "9px solid var(--main2)" : "" ,borderLeft:isActive ? "9px solid var(--main2)" : "" }}>
            <img
                src={pic6}
                style={{ display: "block"}}
              />
            </Card>
          )}
        </SwiperSlide>
        <SwiperSlide
         
        >
          {({ isActive }) => (
            <Card style={{ borderBottom: isActive ? "9px solid var(--main2)" : "" ,borderLeft:isActive ? "9px solid var(--main2)" : "" }}>
            <img
                src={pic7}
                style={{ display: "block"}}
              />
            </Card>
          )}
        </SwiperSlide>

        







        <SwiperSlide
           
        >
          {({ isActive }) => (
            <Card style={{ borderBottom: isActive ? "9px solid var(--main2)" : "" ,borderLeft:isActive ? "9px solid var(--main2)" : "" }}>
            <img
                src={e}
                style={{ display: "block"}}
              />
            </Card>
          )}
        </SwiperSlide>





      </Swiper>
    </>
  );
};

const Card = styled.div`
  z-index:1 !important;
 border-radius:17px;
  display: flex;
  flex-direction: column;
   justify-content:space-around;
   height:15rem;
  overflow:hidden
  @media (max-width:700px){
    height:;
  }
`;
 export const Heading=styled.h4`
font-size:var(--fonttitle);
@medai (max-width:600px){
  font-size:var(--fonttitlesmall);
}

`
