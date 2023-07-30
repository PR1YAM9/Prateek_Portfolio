import React from 'react'
import "./Card.css";
import github from "../../images/Vector.png";

const Card = (props) => {
 

  const mystyle={
    display:'flex',
  
  }
  const mystyle2={
    backgroundColor:props.backgroundColor,
  }
  const sno={
    color:props.snoColor,
  }
  const title={
    color:props.projectTitleColor,
    // margin:'4px 0px',
    // fontSize:'20px',
    // fontWeight:'bold',

   
  }
  const location={
    color:props.locationColor,
  }
  const about={
    color:props.aboutColor,
    // marginTop:'30px',
    // marginBottom:'20px',
    // width:'400px'
  }
  const tech={
    color:props.techColor,
    borderColor:props.border,
    // border:'1px solid',
    // borderRadius:'9px',
  
    // marginRight:'5px',
  
    // paddingBottom:'3px',
    // paddingLeft:'4px',
    // paddingRight:'4px',
  }
  // const imgStyle={
  //   width: '100%',
  //   objectFit:'fill',
  //   objectPosition:'center',
  //   position: 'relative',
  //   zIndex: '2',
  //   right: '13%',
  //   top: '7%'
  // }
  
  return (
    <div style={mystyle} key={props.id} className='P-card'>
      <div className="card-data card" style={mystyle2}>
        <p style={sno}>{props.sno}</p>
        <p style={title} className='card-title'>{props.projectTitle}</p>
        <p style={location}>{props.location}</p>
        <div style={about} className='card-about'>
          <p>{props.about}</p>
        </div>
        <div style={{margin:'6px 0px'}}>
        {
          props.techStack.map((tag) => {
            return <span style={tech} className='tech'>{tag} </span>
          })
        }
       
        </div>
        {
          props.github && (
            <div>
              <img src={github}/>
            </div>
          )
        }
      </div>
      <div className="card-img">
      <img src={props.img}  alt="" />
      </div>
    </div>
  )
}

export default Card