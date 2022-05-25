import React from "react";
import '../components/Cards.css'
import m from '../images/m.png'
import article1 from '../images/article1.webp'
import l from '../images/l.jfif'
import o from '../images/o.jpg'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

function Cards() {
  return (
    <div   className="grids">
      <div className="outline">
        <div className="image1">
          <img src={o}/>
          <div className="category">
            <p>Research</p>
          </div>
        </div>
        <div className="title">
          <p>Research in Action</p>
        </div>
        <div className="tags">Whatever your research ambitions, we have the breadth and depth to make th  ...</div>
        <div className="info">
         <div style={{display:'flex',alignItems:'center'}}> <CalendarMonthIcon style={{color:'brown',fontSize:'19px',marginRight:'5px'}} /><p>  17/2/1994 2000 4pm  </p>
        </div>  <ReadMoreIcon/>
        </div>
      </div>
   
      <div className="outline">
        <div className="image1">
          <img src={l}/>
          <div className="category">
            <p> Students</p>
          </div>
        </div>
        <div className="title">
          <p>Learn From the Best Learn From the Best  Learn From the Best </p>
        </div>
        <div className="tags">While studying at Duquesne, you’ll enjoy a low (13:1) student-to-faculty ratio, and in sm ...</div>
        <div className="info">
         <div style={{display:'flex',alignItems:'center'}}> <CalendarMonthIcon style={{color:'brown',fontSize:'19px',marginRight:'5px'}} /><p>  17/2/1994 2000 4pm  </p>
        </div>  <ReadMoreIcon/>
        </div>
      </div>
      <div className="outline">
        <div className="image1">
          <img src={article1}/>
          <div className="category">
            <p> Corona Virus</p>
          </div>
        </div>
        <div className="title">
          <p>Latest coronavirus news as of 1pm 16 May.</p>
        </div>
        <div className="tags">Six weeks into the vaccine roll-out for this age group, fewer than one in 10 children ag ...



</div>
<div className="info">
         <div style={{display:'flex',alignItems:'center'}}> <CalendarMonthIcon style={{color:'brown',fontSize:'19px',marginRight:'5px'}} /><p>  17/2/1994 2000 4pm  </p>
        </div>  <ReadMoreIcon/>
        </div> </div>
    </div>
  );
}

export default Cards;
