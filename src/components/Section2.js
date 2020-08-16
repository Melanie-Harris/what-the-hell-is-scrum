import React from "react";
import { Row, Col } from "react-bootstrap";
import scrum3 from "../img/scrum3.svg";

export default function Section2() {
  return (
    <section className="container-fluid section-container">
      <Row className="section-margin-bottom" sm={12}>
      <Col className="section2" sm={6}>
            <span className="section-text">Scrum Team</span>
            <br/>
            <span>Scrum Team Roles</span>
            <br/>
            <span>Scrum Team Development</span>
            <br/>
            <span>Sprint Backlog Explained</span>
            <br/>
            <span>Scrum Team Advice</span>
            <br/>
            <span>More</span>
            {/* <br/>
            <span>Scrum Advice</span> */}
            {/* <Row ><button className="button-style" type="button">Scrum Guide</button></Row> */}
        </Col>
        <Col className="" sm={6}>
        <img src={scrum3} className="d-block w-70 section-img" alt="First slide" /> 
        </Col>
      </Row>
    </section>
  );
}
