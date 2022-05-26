import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useMediaQuery } from "react-responsive";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
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
      <h4
        style={{
          backgroundColor: "var(--main2)",
          borderRadius: "25px",
          padding: ".6rem",
          width: "18rem",
          margin: "auto",
           
          textAlign: "center",
          color: "var(--main)",
          fontSize: "var(--fonttitle)",
          fontWeight: "700",
        }}
      >
       Their Smile Matters 
      </h4>
      <Swiper
        style={{
          width: "87%",
          margin: "auto",
         marginTop:'2rem',
   
          paddingBottom: "2rem",
        }}
        className='swipper'
        centeredSlides={true} 
        centeredSlidesBounds={true}
        spaceBetween={10}
        slidesPerView={issmall ? 1 : issmall2 ? 2 : 3}
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
          style={{
             
            
           
          }}
        >
          {({ isActive }) => (
            <Card style={{ borderBottom: isActive ? "9px solid var(--main2)" : "" ,borderLeft:isActive ? "9px solid var(--main2)" : ""}}>
            <img
                src={pic1}
                style={{ display: "block"}}
              />
            </Card>
          )}
        </SwiperSlide>

        <SwiperSlide
      
          style={{
             
            
           
          }}
        >
          {({ isActive }) => (
            <Card style={{ borderBottom: isActive ? "9px solid var(--main2)" : "" ,borderLeft:isActive ? "9px solid var(--main2)" : ""}}>
            <img
                src={pic2}
                style={{ display: "block"}}
              />
            </Card>
          )}
        </SwiperSlide>
        <SwiperSlide
          style={{
             
            
           
          }}
        >
          {({ isActive }) => (
            <Card style={{ borderBottom: isActive ? "9px solid var(--main2)" : "" ,borderLeft:isActive ? "9px solid var(--main2)" : ""}}>
            <img
                src={pic3}
                style={{ display: "block"}}
              />
            </Card>
          )}
        </SwiperSlide>
      
        <SwiperSlide
          style={{
             
            
           
          }}
        >
          {({ isActive }) => (
            <Card style={{ borderBottom: isActive ? "9px solid var(--main2)" : "" ,borderLeft:isActive ? "9px solid var(--main2)" : ""}}>
            <img
                src={pic4}
                style={{ display: "block"}}
              />
            </Card>
          )}
        </SwiperSlide>
   
        <SwiperSlide
          style={{
             
            
           
          }}
        >
          {({ isActive }) => (
            <Card style={{ borderBottom: isActive ? "9px solid var(--main2)" : "" ,borderLeft:isActive ? "9px solid var(--main2)" : ""}}>
            <img
                src={pic6}
                style={{ display: "block"}}
              />
            </Card>
          )}
        </SwiperSlide>
        <SwiperSlide
          style={{
             
            
           
          }}
        >
          {({ isActive }) => (
            <Card style={{ borderBottom: isActive ? "9px solid var(--main2)" : "" ,borderLeft:isActive ? "9px solid var(--main2)" : ""}}>
            <img
                src={pic7}
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
`;
