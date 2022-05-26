import React from 'react'
import styled from 'styled-components'
import { ArrayofSections } from '../../WebsiteSections.js'
 
 import IconCard from './IconCard'

function IconCards() {
  return (
    <>
        <div  style={{ }}>
          <h3 style={{width:'12rem',textAlign:'center', margin:'auto',color:'var(--main)',fontSize:'1.15rem'}}>Researchs Fields</h3>
          <Container>
              {ArrayofSections.map((i,index)=>{
                  return (
                     <IconCard key={index} Text={i.text} Icon={i.icon}/> 
                  )
              })}
          </Container>
      </div>
      
      
      
      
      </>
    
  )
}

export default IconCards

const Container=styled.div`
display:flex;
flex-wrap:wrap;
width:87%;
margin:auto;
 

justify-content:space-between;
@media(max-width:700px){
  width:87%;
}
@media(max-width:500px){
  width:85%;
}

`