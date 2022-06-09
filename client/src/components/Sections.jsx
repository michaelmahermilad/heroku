import React from 'react'
import styled from 'styled-components'
 import { Heading } from '../components/Swipper.jsx'
import { Section } from '../Sections.js'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion"
function Sections() {
  return (
    <>
        <div   >
          <Heading style={{width:'100%',textAlign:'center', margin:'auto',color:'black',marginTop:'6rem',marginBottom:'2rem'}}>Physical Mental and Virtual Care</Heading>
          <Container>

          
     
   

          {Section.map((i,index)=>{
                  return (<motion.nav  
                    initial={{ opacity: 0,x:200 }}
                    whileInView={{ opacity: 1 , x:0  }}
                    viewport={{ once: true }}
    >
                     <Card ><div className='image'>
<img className='icons' src={i.icon}/>
                     </div>                           


<p>{i.text}</p>
<div className='plus'>
  <button className='btnGreen'>
    Read More
  </button>
<FontAwesomeIcon style={{ color:'#ffffff', backgroundColor:'#11a683',padding:'8px',borderRadius:'50%'}} icon={faPlus}/>
</div>
                     </Card>  </motion.nav>
                  )
              })}
          </Container>
      </div>
      
      
      
      
      </>
    
  )
}

export default Sections

const Container=styled.div`
display:flex;
flex-wrap:wrap;
width:98%;
margin:auto;
 

justify-content:center;
gap:2rem;
@media(max-width:700px){
  width:87%;
}
@media(max-width:500px){
  width:85%;
}

`
export const Card = styled.div`
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,100%,0)),linear-gradient(-257deg,#aaf2e1,#93edf5 50%,#dbebff);
transition: all .2s linear;
  width: 20vw;
  height: 17rem;
  border-radius: 5px;
  background: rgb(23 207 151,.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;
  gap: .8rem;
  box-shadow:.4px 3px 12px #11a68367;
  .image{
    background: #11a6834b;
    width:6rem;
    height:6rem;
    padding: 1rem;
    border-radius: 50%;
  }
  .plus{
    text-align: center;
    height: 2.7rem;
    margin-bottom: 1rem;
    position:relative;
    overflow: hidden;
    width: 8REM;
    .btnGreen{
      width:8rem;
      height: 2.5rem;
      background-color:#11a683;
      border-radius: 25px;
      line-height: 2.5rem;
      border:none;
      outline: none;
      color:white;
      font-weight: 600;
      position: absolute;

      top:2.8rem;
    }

  }
  .icons {
    transition: all .2s linear;
      z-index: -1;
   
     width:80%;
     display:block;
    height: 80%;margin:auto;
  
  }
  .icons:hover{
     
  }
  p {

    transition: all .2s linear;
    color:black;
     font-size: 1.2rem;
  }
  :hover {
    transform: skew(0, -0.001turn);  
    box-shadow:.4px 5px 30px #11a68367;
    
    .plus .btnGreen{
      top:0;
      right:calc(50% - 4rem);
      transition: all .2s linear;
    }
   

    .icons {
        transform:scale(1)
    }
    p {
      color:#13ad7f ;
    }
  }
  margin-top: 2rem;
  @media (max-width: 790px) {
    width: 40vw;
  }
  @media (max-width: 500px) {
    width: 87vw;
  }
`;
