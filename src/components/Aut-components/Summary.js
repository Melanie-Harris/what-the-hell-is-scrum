import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Summary() {
  return (
    <section className=" summary-container">
      <h1>Most Important To Remember 
        {/* <img src="https://img.icons8.com/bubbles/60/000000/businesswoman.png" /> */}
        </h1>
      <Row>
        <Col sm={4} className="summary-col">
          {/* <i class="fas fa-sitemap"></i> */}
          <img src="https://img.icons8.com/bubbles/130/000000/module.png"/>
          {/* <img className="icon-attributes" src="https://img.icons8.com/ios/80/000000/parallel-tasks.png"/><br/> */}
          <h2>Team Structure</h2>
          <br />
          <span className="summary-sub-text"> 
          Roles <br/>
          Team Size <br/>
          Team Formation<br/>
          Do's and Dont's

          </span>
        </Col>
        <Col  sm={4} className="summary-col">
          {/* <i class="fas fa-stream"></i> */}
          <img src="https://img.icons8.com/bubbles/130/000000/align-right.png"/>
          {/* <img src="https://img.icons8.com/bubbles/50/000000/timeline-week.png"/> */}
          {/* <img className="icon-attributes"  src="https://img.icons8.com/wired/94/000000/waypoint-map.png"/><br/> */}
          <h2>Scrum Timeline</h2>
          <br />
          <span className="summary-sub-text">
          *Product Backlog<br/>  
          Sprint Planning Meeting<br/>
          *Sprint Backlog <br/>
          Daily Scrum<br/>
          Sprint Review <br/>
          Sprint Retrospective<br/>

          </span>
        </Col>
        <Col  sm={4} className="summary-col">
          {/* <i class="fas fa-user-check"></i> */}
          {/* <i class="fas fa-chalkboard-teacher"></i> */}
          <img src="https://img.icons8.com/bubbles/130/000000/omnichannel.png"/>
          {/* <img className="icon-attributes"  src="https://img.icons8.com/dotty/100/000000/expand-influence.png"/> <br/> */}
          <h2>Impact, Why Scrum?</h2>
          <br/>
          <span className="summary-sub-text">
          Scrum Defined<br />
          Agile vs Waterfall<br />
          Benefits of Scrum<br />
          Who Uses Scrum<br />
          </span>
        </Col>
      </Row>
    </section>
  );
}
