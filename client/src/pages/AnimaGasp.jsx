import gsap from 'gsap';
import React, { useEffect } from 'react'
import Y from '../images/Y.png'
import children from '../images/children.png'
import { Block } from '@mui/icons-material';
function AnimaGasp() {
    useEffect(()=>{
        var tl = gsap.timeline({
            repeat: 100, 
            repeatDelay:5,
            
          });
         tl.fromTo("#logo2",   {opacity:.1,scale:.8 },{duration:3, y:10, opacity:1,   scale:1});         


    },[])
  return (
    <div style={{marginTop:'4rem',position:'relative',padding:0,height:'10rem',marginBottom:'4rem'}}>
 <img style={{position:'absolute' ,height:'100%',width:'50%',right:'25%',left:'25%'  }} id="logo2" src={children}/> 
        
        </div>
  )
}

export default AnimaGasp