import React from 'react'
import "./Last.css";
import flower from '../../images/slider thing.png';

const lastSec = () => {

  const items = ['iot', 'Robotics', 'embedded system', 'image Processing', 'Signal Processing', 'Machine learning'];

  const list=[
    {
    id: 1,
    first:'Domain Head',
    second:'&#x40;Robotics and Automation Club, IITH ',
    third: 'June 2023 - Present',
    fourth: 'Responsible for recruiting, training core members, and overseeing projects, finances, and events.'
  },{
  
    id: 2,
    first:'Internship Coordinator',
    second:'&#x40;Office of Career Services, IITH ',
    third: 'June 2023 - Present',
    fourth: 'Facilitating various companies with internship and placement drive.'
  
}];
  


  return (
    <div>
      {list.map((item)=>{
        return(
          <div style={{color:'white'}} key={list.id}>
            <div><span>and responsibities</span> LEADERSHIP ROLES
            </div>
            <div> 
              <span>{list.id}</span> 
              <span>{list.first}</span><span>{list.second}</span>
              <span>{list.third}</span>
              <span>{list.fourth}</span>
            </div>
          </div>
        )
      }
    )}
      
     

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

export default lastSec


