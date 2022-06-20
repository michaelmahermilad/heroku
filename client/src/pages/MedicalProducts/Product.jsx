import React from "react";
import { useState } from "react";
import styled from "styled-components";
import h from "./images/h.PNG";
import h1 from "./images/h1.PNG";
import ReactPlayer from "react-player";
import bed from "./bed.mp4";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
   import {
    faFacebook,
    faYoutube,
    faTwitter,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping, faNetworkWired, faWeightHanging } from "@fortawesome/free-solid-svg-icons";
function Product() {
    
  const [qty,setQty]=useState(1) 
 

function increment(e) {
  e.preventDefault()
setQty(qty+1);
}

function decrement(e) {
  e.preventDefault()
  setQty(  qty > 0? qty-1 : 0);
}








  const [image, setImage] = useState(h);

  const [zoom, setZoom] = useState({
    backgroundImage: `url(${image})`,
    backgroundPosition: "0% 0%",
  });

  const handleMouseMove = (e) => {
    const { left, bottom, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 90;
    const y = ((e.pageY - bottom) / height) * 50;
    setZoom({ backgroundImage: `url(${image})`, backgroundPosition: `${x}% ${y}%` });
  };
  const handle = (e) => {
    setZoom({
      backgroundImage: `url(${image})`,
      backgroundPosition: "0% 0%",
    });
  };

  return (
    <Container>
      <ProductImage>
        <Div1>
          <ImageSmall onClick={(e) => setImage(e.target.src)} src={h} /> 
          <ImageSmall onClick={(e) => setImage(e.target.src)} src={h1} />
        </Div1>
        <Div2>
          <ReactPlayer controls   width={'100%'} height={'100%'} className='video111'  url={bed} />
          <figure
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={(e) => handle(e)}
            style={zoom}
          >
            <Image className="img" src={image} />

          </figure>            <Image className="img" src={h1} />

        </Div2>
      </ProductImage>
      <Info>

        <Link to='/'><p>Hydraulic Surgical Operating Room Table  </p>

        </Link>

        <div>
        <div class="btn_wrap">
        <span className='span'>Share</span>
        <div class="container">
                      
             
           



          <Link className='link' to="/">
            <span>
            <FontAwesomeIcon
                   className="i"
                icon={faFacebook}
              />            </span>
          </Link >
          <Link className='link' to="/">
            <span>
            <FontAwesomeIcon
                className="i"
                icon={faLinkedin}
              />
            </span>
          </Link >
          <Link className='link' to="/">
            <span>
            <FontAwesomeIcon
                  className="i"
                icon={faTwitter}
              />
            </span>
          </Link >
          <Link className='link' to="/">
            <span>
              
            <FontAwesomeIcon
                 className="i"
                icon={faYoutube}
              />
            </span>
          </Link >   
         
        </div>
    </div>


<a href="https://dribbble.com/YancyMin" class="dr-url" target="_blank"><img class="dr" src="https://cdn.dribbble.com/assets/logo-footer-hd-a05db77841b4b27c0bf23ec1378e97c988190dfe7d26e32e1faea7269f9e001b.png" alt=""/></a>



        </div>
        <table>
          <tr >
               <th  scope="row" >

               Type:
               </th>
      <td >
      Operating Table
      </td> 
          </tr>
          <tr>
        <th scope="row">Certification:</th>
        <td>CE, ISO13485</td>
        </tr>
      
   
    
  
</table>
<p className="price">LE 9999.00   </p>
<div className="qty">
<div>
    
      <div className="quantity-input">
        <button className="quantity-input__modifier quantity-input__modifier--left" onClick={(e)=>decrement(e)}>
          &mdash;
        </button>
        <input className="quantity-input__screen" type="text" value={qty} readonly />
        <button className="quantity-input__modifier quantity-input__modifier--right" onClick={(e)=>increment(e)}>
          &#xff0b;
        </button>  
      </div>       

      </div>
      <FontAwesomeIcon style={{marginLeft:'2rem', backgroundColor:'#1FA47C',padding:'.6rem',borderRadius:'4px',color:'white', cursor:'pointer',fontSize:'1rem'}} icon={faWeightHanging}/>
</div>
      </Info>
    </Container>
  );
}

export default Product;
const Container = styled.div`
  display: flex;
  padding: 3rem 3rem;
  width: 100%;
  height: fit-content;
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 0;
  }
`;
const Info = styled.div`
padding: 2rem 3rem;

.qty{
  margin-top: 2rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  .quantity-input {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 3px;
  width: fit-content;


}
.quantity-input:focus {
  background: red;
}

.quantity-input__modifier,
.quantity-input__screen {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  outline: none;
}

.quantity-input__modifier {
  padding: 0.7rem;
  width: 3rem;
  font-size: 1.5rem;
  background: #f3f3f3;
  color: #888;
  border: 0 solid #dbdbdb;
  text-align: center;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
  cursor: pointer;
}
.quantity-input__modifier:hover {
  background: #dadada;
  color: #555555;
}
.quantity-input__modifier--left {
  border-radius: 3px 0 0 3px;
}
.quantity-input__modifier--right {
  border-radius: 0 3px 3px 0;
}

.quantity-input__screen {
  width: 4rem;
  padding: 0.7rem;
  font-size: 1.5rem;
  border: 0;
  border-top: 0 solid #dbdbdb;
  border-bottom: 0 solid #dbdbdb;
  text-align: center;
}

 






}
.price{
  font-size: 50px;
    font-weight: 600!important;
    margin:1rem 0;
    padding: 2rem  0;
    border-top: 1px solid  #EEEEED ;
    border-bottom: 1px solid  #EEEEED ;
    color: #5580c0;
}
table{
  
  border-collapse: collapse;
  margin-top:1rem;
}
td,
th {
    border: 1px solid #EEEEED;
    padding: 10px;
}

td {
    text-align: center;
}

  flex: 50%;
p{
  font-size: 19px;
    font-weight: 500!important;

}
  .i {
    opacity: 0;
    font-size: 28px;
    color: #1F1E1E;
    will-change: transform;
    -webkit-transform: scale(.1);
            transform: scale(.1);
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
}

.btn_wrap {

    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    overflow: hidden;
    cursor: pointer;
    width: 210px;
    height: 50px;
    background-color: #EEEEED;
    border-radius: 50px;
    padding: 0 18px;
    will-change: transform;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}

.btn_wrap:hover {
    /* transition-delay: .4s; */
    -webkit-transform: scale(1.1);
            transform: scale(1.1)
}

.span {
    position: absolute;
    z-index: 99;
    width: 210px;
    height: 52px;
    border-radius: 80px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    text-align: center;
    line-height: 50px;
    letter-spacing: 2px;
    color: #EEEEED;
    background-color:  #1fa47c;
    padding: 0 18px;
    -webkit-transition: all 1.2s ease;
    transition: all 1.2s ease;
}

.container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
        justify-content: space-around;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    width: 200px;
    height: 42px;
    border-radius: 80px;
}

.container .i:nth-of-type(1) {
            -webkit-transition-delay: 1.1s;
                    transition-delay: 1.1s;
}

.container .i:nth-of-type(2) {
            -webkit-transition-delay: .9s;
                    transition-delay: .9s;
}

.container span:nth-of-type(3) {
            -webkit-transition-delay: 16s;
                    transition-delay: 16s;
}

.container span:nth-of-type(4) {
            -webkit-transition-delay: .4s;
                    transition-delay: .4s;
}

.btn_wrap:hover span {
    -webkit-transition-delay: .25s;
            transition-delay: .25s;
    -webkit-transform: translateX(-280px);
            transform: translateX(-280px)
}

.btn_wrap:hover .i {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1);
}


.dr {
position: absolute;
  bottom: 16px; 
  right: 16px;
  width:100px;
}


`;
const ProductImage = styled.div`
  flex: 50%;
  display: flex;
`;
const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 70px;
  padding-top: 5rem;
  > * {
    margin-bottom: 1.6rem;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
const Div2 = styled.div`
  margin-left: 2rem;
 

  width: 300px;
  >*{
    border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  overflow: hidden;
}
  height: 200px;
  figure {
    width: 300px;
    border: 1px solid #e5e5e5;
    height: 200px;
    background-repeat: no-repeat;
    position: relative;
    ::after{
      position: absolute;
      content:'';
      height:11px;
      top:0;
      right:0;
      width: 100%;
      background-color: #3884c2;
      z-index: 6;
    }
    
    margin-top: 1rem;



  }

  figure:hover .img {
    opacity: 0;
  }

  .img {
   
    display: block;

    width: 300px;
    height: 200px;
    pointer-events: none; 
  }
   >*:last-child{
display: none;
border: 1px solid #e5e5e5;
margin-top: 1rem;
} 
  @media (max-width: 800px) {
    width: 95vw;
    >*:last-child{
display: block;
} 
    padding:4rem 0;
margin-left: 0%;
margin: auto;
>*{
  margin-bottom: 2rem;
}
    height: fit-content;
    figure {
      width: 100%;
    
      height: fit-content;
      background-repeat: no-repeat;
      margin: auto;
      height: 200px;
    }

    figure:hover .img {
      opacity: 1;
    }

    .img {
    
      display: block;
      width: 100%;
      height: fit-content;
      pointer-events: none;
      height: 200px;
    }
  }
  .video111{
    position: relative;
    ::after{
      position: absolute;
      content:'';
      height:11px;
      top:0;
      right:0;
      width: 100%;
      background-color: #3884c2;
      z-index: 6;
    }
  }

`;
const Image = styled.img`
  width: 300px;
  height: fit-content;
  
  @media (max-width: 800px) {
    width: 100%;
    height: 200px;
  
  }
`;
const ImageSmall = styled.img`
  display: block;
  width: 70px;
  height: 70px;
  cursor: pointer;
  border: 1px solid #e5e5e5;
  @media (max-width: 800px) {
    display: none;
  }
`;
