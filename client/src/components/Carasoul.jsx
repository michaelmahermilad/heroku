import React from 'react'
import './Carasoul.css'
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from 'styled-components'
function Carasoul() {
  return (
    <div>
     <Swiper
    style={{
       
      }}
      className='swippercard'
      centeredSlides={true}
      centeredSlidesBounds={true}
      slidesPerView={ 1}
      autoplay={{
        delay: 2400,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
        navigation={true} >
  
        <SwiperSlide>
            <Div>
                <IMAGE src='https://health.wyo.gov/wp-content/uploads/2017/05/older-doctor-46950_300x.jpg'/>
                <NAME>
                Prof . Amgad tawfiq
                </NAME>
                <WORK>
                  Lungs and special cases Department
                </WORK>
            </Div>
        </SwiperSlide>
        <SwiperSlide>
            <Div>
                <IMAGE src='https://health.wyo.gov/wp-content/uploads/2017/05/older-doctor-46950_300x.jpg'/>
                <NAME>
                Dr . Nancy talat
                </NAME>
                <WORK>
                  Heart and blood balance Related specialist
                </WORK>
            </Div>
        </SwiperSlide>
        <SwiperSlide>
            <Div>
                <IMAGE src='https://health.wyo.gov/wp-content/uploads/2017/05/older-doctor-46950_300x.jpg'/>
                <NAME>
                Dr . John tomas
                </NAME>
                <WORK>
                   Severe Eyes vision cases expert
                </WORK>
            </Div>
        </SwiperSlide>
        <SwiperSlide>
            <Div>
                <IMAGE src='https://health.wyo.gov/wp-content/uploads/2017/05/older-doctor-46950_300x.jpg'/>
                <NAME>
                Dr .Laila helmy
                </NAME>
                <WORK>
                  Chidren weight related problems researcher.
                </WORK>
            </Div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carasoul


const Div = styled.div`
margin-top: 3rem;
    height:150px;
    width:100%;
    border-radius: 40px;
    padding : 3.6rem;
    background:  rgb(255,180,0 );
background:  radial-gradient(circle, rgba(255,180,0,0.18194873880895768) 34%, rgba(9,121,22,0.28443321085864715) 92%);    
    img{
      
        display: block;
        border-radius: 50%;
        width:100px;
        height:100px;
        left: calc(50% - 50px);
      border:2px solid white;
       
      
    }
 @media screen and (max-width:700px) {
   padding: 5rem;
   
 }
    

     
    

`
const IMAGE =styled.img`
  top:0rem;
  z-index: 999;
  position: absolute;
  
`
const NAME =styled.h6`
     color: #4b0909ad;
    width:200px;
    font-weight: 900;
    margin-left :calc( 50% - 100px);
    font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    
    text-align: center;
    font-size: small;
`
const WORK=styled.h6`

    color: #332d2d7b; 
    width: 170px;
    text-align: center;
      margin:auto;
      margin-left: calc(50% - 85px);
    margin-top: 1rem;
    font-weight: 800;
`

