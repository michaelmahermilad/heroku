import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
function Footer() {
  return (<>
    <div       className='footerGrid' style={{width:'97vw',margin:'auto', paddingLeft:'2rem',display:'grid'}}>
        <div style={{}} >
          <h4  >About Medical Projects</h4>
          <div  style={{height:'3px',width:'8rem',backgroundColor:'green',marginBottom:'1rem'}}   ></div>
       <div style={{color: "#575757" , textAlign:'justify',lineHeight:'1.5rem'}}>
          Medical Projects is the leading Number 1 Medical Solutions in th near future
With a product portfolio of over 25 different innovative solutions that fit every Hospital Need for pure healthy and safe Medical  Services, Project has been stablished  in 2022
Our site is also proud to be extending its trusted products across 6 Export countries throughout North Africa, GCC and the Far East.
</div>
      
      

        </div>
        <div>
        <h4   >Categories</h4>
          <div   style={{height:'3px',width:'8rem',backgroundColor:'green',marginBottom:'1rem'}}    ></div>
          <Link to='/'>   <p>Surgries</p></Link><Link to='/'> <p> Heart Care</p></Link> <Link to='/'><p> Mental Care</p> </Link><Link to='/'><p>Medical Devices</p> </Link> 
        </div>
        <div>
        <h4  >Site Map</h4>
          <div     style={{height:'3px',width:'8rem',backgroundColor:'green',marginBottom:'1rem'}}  ></div>
          <Link to='/'> <p>Main Page </p> </Link><Link to='/'>  <p> Landing Page</p></Link> <Link to='/'><p>Articles</p> </Link> 
        </div>

    </div><div style={{textAlign:'center',fontSize:'11px',paddingBottom:'.2rem'}}>
    Copyright © 2022 M.M All Rights Reserved.    </div></>
  )
}

export default Footer