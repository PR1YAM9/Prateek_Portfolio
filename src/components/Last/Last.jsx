import React from 'react'
// import Banner  from "./ScrollingText.jsx";
import "./Last.css";
import flower from '../../images/slider thing.png';


  const items = ['iot', 'Robotics', 'embedded system', 'image Processing', 'Signal Processing', 'Machine learning'];
  


export default function Last() {
  return (
    <div>
      {/* <div><span>and responsibities</span> LEADERSHIP ROLES</div>
      <div>
        <div> <span>&#35;1</span> </div>
        <div></div>
      </div> */}
      
      <div className="container">
        <div className="black-bar"></div>
        <div className="marquee">
          <div className="marquee__inner">
            {items.concat(items).map((item, i) => (
            <React.Fragment key={i}>
              <div className="marquee__item">{item}</div>
              <img src={flower} alt="" className="marquee__image" />
            </React.Fragment>))}
          </div>
        </div>
      </div>


    
    </div>
  )
}



