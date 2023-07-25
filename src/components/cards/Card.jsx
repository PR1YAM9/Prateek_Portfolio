import React from 'react'

const Card = (props) => {
  return (
    <div style={{display:'flex'}}>
      <div className="card-data">
        <p>{props.sno}</p>
        <p>{props.projectTitle}</p>
        <p>{props.location}</p>
        <div>
          <p>{props.about}</p>
        </div>
        {
          props.techStack.map((tag) => {
            return <span>{tag}</span>
          })
        }
      </div>
      <div className="card-img">

      </div>
    </div>
  )
}

export default Card