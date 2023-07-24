import React from 'react'
import "./Last.css";
import flower from '../../images/slider thing.png';

const Last = () => {

  const items = ['iot', 'Robotics', 'embedded system', 'image Processing', 'Signal Processing', 'Machine learning'];

  const list=[
    {
    id: 1,
    first:'Domain Head',
    second:'@Robotics and Automation Club, IITH ',
    third: 'June 2023 - Present',
    fourth: 'Responsible for recruiting, training core members, and overseeing projects, finances, and events.'
  },{
  
    id: 2,
    first:'Internship Coordinator',
    second:'@Office of Career Services, IITH ',
    third: 'June 2023 - Present',
    fourth: 'Facilitating various companies with internship and placement drive.'
  
}];
  


  return (
    <div>
      <div className='head'>LEADERSHIP ROLES<span className='respon'>and <br /> responsibilities</span> 
      </div>
      {list.map((list)=>{
        return(
          <div className='outer' key={list.id}>
            
              <div className='hashDiv'><span className='id'>#{list.id}</span></div>

              <div className='rest'>
                <div>
                <span className='first'>{list.first} </span><span className='second'>{list.second} <br /> </span>
                </div>
                <div><span className='third'>{list.third} <br /> </span></div>
                <div><span className='fourth'>{list.fourth}</span></div>
                
                
                
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

export default Last