import   React from 'react';
  import { useState } from 'react';
import { Rate } from 'antd';
import h from './images/h.PNG'
import './Product.css'
import 'antd/dist/antd.css';
function ProductCard(  ) {
const [rating,setRating]=useState();
console.log(rating);
function a(value){
    setRating(value)
}
  return (
    <>
    <div  style={{ margin:'auto',marginBottom:'2rem'}}   class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={h} alt="Avatar" style={{width:'100%', borderRadius: '12px',  height:'200px'}}/>
    </div>
    <div class="flip-card-back">
      <h5   style={{color:'whitesmoke'}}>Hydraulic Surgical Operating Room Table
</h5> 
      <h6 style={{color:'whitesmoke',fontWeight:'700', backgroundColor:'#0000ff1a', width:'fit-content',margin:'auto' ,borderRadius:'6px',padding:'4px'}} >Le 9999.99</h6> 
     
        <Rate allowHalf style={{color:'gold',margin:'auto',  fontSize:'1rem'}} onChange={a} defaultValue={5}  />
        <span style={{ color:'white'}}>In Stock</span>
      <span style={ { color:'white'}}  >Free shipping</span>
    </div>
  </div>
</div>


    
    </>
  );
}

export default ProductCard;
