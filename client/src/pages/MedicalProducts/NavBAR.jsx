import React, { useState } from 'react'
import Com from './images/Com.svg'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown  } from "@fortawesome/free-solid-svg-icons";

function NavBAR() {
    const src = Com
 const [zoom,setZoom]=useState(
    {
        backgroundImage: `url(${src})`,
        backgroundPosition: '0% 0%' 
    }
 )
   
      const handleMouseMove = e => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
    setZoom({...zoom, backgroundPosition: `${x}% ${y}%` })
      }
      const handle = e => {
      
    setZoom( {
        backgroundImage: `url(${src})`,
        backgroundPosition: '0% 0%' 
    })
      }
    
    

  return (<>




          <div style={{width:'100%',height:'2rem',backgroundColor:'#1FA47C'}}></div>

 
    <Container>
  
   
    <figure onMouseMove={(e)=>handleMouseMove(e)} onMouseLeave={(e)=>handle(e)} style={zoom}>
            <Image className='img' src={src}     /> 

        </figure>

      
         <SearchBar>
            <Input  placeholder='Search'/>
            
            <FontAwesomeIcon   style={{fontSize:'1rem',marginLeft:'9px',color:'#1FA47C'}} icon={faSearch}/>
         </SearchBar>
          <ShoppingCart>
                       <FontAwesomeIcon  style={{ backgroundColor:'#1FA47C',padding:'.6rem',borderRadius:'4px',color:'white', cursor:'pointer',fontSize:'1rem'}} icon={faCartShopping}/>

             <Price> 

           <p>LE.190B</p>
                
            <FontAwesomeIcon  style={{cursor:'pointer',fontSize:'.8rem',color:'green'}}    icon={faAngleDown }/>

            </Price></ShoppingCart>
           
         
    </Container> </>
  )
}

export default NavBAR
const Container =styled.div`
figure {
  width:fit-content;
  background-repeat: no-repeat;
}

figure:hover .img {
  opacity:0;
}

.img {
  display: block;
  width: 100%;
  pointer-events: none;
}


background-color: #ffffff;
height:190px;
width:100%;
display: flex;
flex-direction: row;
align-items: center;
padding:30px;
border-bottom: 1px solid #e5e5e5;
 @media (max-width:800px){
    flex-direction: column;height: fit-content;
    >*{
        margin-bottom: 1.5rem;
        
    }
}
`
const Image=styled.img`
    


`
const SearchBar=styled.div`
width:16rem;   
height:2.6rem;
background-color: #776c6c14;
border-radius: 5px;
left: calc(100% - 50%);
position: absolute;
@media (max-width:800px){
   width:90%;
   position: relative;
   left: auto;
   margin: auto;
   margin-bottom: 2rem;
}
`
const Input=styled.input`
    height: 100%;
    width:86%;
    background-color:transparent;
border-radius: 5px;
outline: none;
padding-left: 1rem;
border: none;
@media (max-width:800px){
  

}

`
const ShoppingCart=styled.div`
    display: flex;
  align-items: center;
left: calc(100% - 16%);
position: absolute;
@media (max-width:800px){
  position:relative;
  left:auto;
  width:fit-content;
  margin:auto;
}


`
const Price=styled.div`
       display: flex;
       align-items: center;
       p{
       height:.0rem
       }
      >*{
        margin-left: 1rem;
    } 
 
 
 
 
 



`


 
