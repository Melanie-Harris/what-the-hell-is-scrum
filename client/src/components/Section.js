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
            <span className="section-sub-text">Agile Development Explained</span>
            <br/>
            <span className="section-sub-text">Scrum Explained</span>
            <br/>
            <spa className="section-sub-text"n>Scrum Ceremonies</spa>
            <br/>
            <span className="section-sub-text">Scrum Lifecycle</span>
            <br/>
            <span className="section-sub-text">Scrum Artifacts</span>
            <br/>
            <span className="section-sub-text">Scrum Advice</span>
            <br/>
            <span className="section-sub-text">More</span>
        </Col>
      </Row>
    </section>
  );
}
