import React from "react";
import Card from "../cards/Card.jsx";
import data from "../cards/data.js";
import "./Project.css";
import photo from "../../images/Group 5.png";
const Project = () => {
  return (
    <div>
      {/* <div style={{textAlign:'center'}}>
        <p id='project-head'>PROJECTS</p>
        <span className='subtext-project'>Recent</span>
      </div> */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={photo} alt="" />
      </div>

      {data.map((item) => {
        return (
          <div key={item.id} style={{display:'flex',justifyContent:'center' ,margin:'35px 0px'}}>
            <Card  {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default Project;
