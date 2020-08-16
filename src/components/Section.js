import React from "react";
import { Row, Col } from "react-bootstrap";
import scrum1 from "../img/scrum4.svg";

export default function Section() {
  return (
    <section className="container-fluid section-container">
      <Row className="section-margin-top" sm={12}>
        <Col className="" sm={6}>
        <img src={scrum1} className="d-block w-70 section-img" alt="First slide" /> 
        </Col>
        <Col className="section" sm={6}>
            <span className="section-text">Agile Development</span>
            <br/>
            <span>Agile Development Explained</span>
            <br/>
            <span>Scrum Explained</span>
            <br/>
            <span>Scrum Ceremonies</span>
            <br/>
            <span>Scrum Lifecycle</span>
            <br/>
            <span>Scrum Artifacts</span>
            <br/>
            <span>Scrum Advice</span>
            <br/>
            <span>More</span>
        </Col>
      </Row>
    </section>
  );
}
