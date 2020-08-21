import React from "react";
import LessonPlan from "./LessonPlan";
import AuthHero from "./AuthHero";
import Summary from "./Summary";
import "./Agile-development/agile.css"
import AuthNav from "./AuthNav";
import scrum1 from "../../img/product_tour.svg";
import Resources from "./Resources";

export default function AuthLanding() {
  return (
    <div className=""> 
    
      <div className="resource-headings ">Scrum Lesson Plan</div>
      <AuthNav/>
      {/* <img style={{width:"500px"}}src={scrum1} className="d-block  button-margin" alt="First slide" /> */}
      <h1></h1>
      <AuthHero/>
      <LessonPlan/>
      <Resources/>
      {/* <Summary/> */}
      
    </div>
  );
}


