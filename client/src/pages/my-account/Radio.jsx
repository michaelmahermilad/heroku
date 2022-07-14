import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Message, WhatsApp } from '@mui/icons-material'
import React from 'react'
import './Radio.css'
function Radio() {
  return (
   
      
  <div class="rating-container">
   
    <div class="rating">
      <form className="radio-toolbar">
      <span  className='span55'   style={{marginRight:'.3rem'}}>
        	<input  type="radio" name="rating" className="icon55" id="icon55" value="super-happy" />
<div className='icon5555'  ><WhatsApp    sx={{fontSize:'1.6rem' }}  />
<label   className='label5555'  for="icon55">Call us now</label>
 </div>
 </span>
<span   className='span55'>
<input type="radio" name="rating" className="icon555" id="icon555" value="supe-happy" />
<div    className='icon5555' >
<Message    sx={{fontSize:'1.6rem'}} />
 <label className='label5555' for="icon555">Send Message</label> 
 </div>    
 </span> 
</form>
    </div>
  </div>
 
  )
}

export default Radio