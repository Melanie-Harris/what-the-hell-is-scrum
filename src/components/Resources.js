import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Resources() {
  return (
    <section className="container resource-section">
      <Row >
        <Col className="button-margin" md={3} >
          <Row ><button className="button-style" type="button">Scrum Videos</button> </Row>
          <Row ><button className="button-style" type="button">Scrum Blog</button> </Row>
          <Row ><button className="button-style" type="button">Scrum Guide</button></Row>
        </Col>
        <Col className="avatar-resource" md={6}>
          <h1>Additional Resources</h1>
          <img src="https://img.icons8.com/bubbles/550/000000/crowd.png" />
          {/* <img src="https://img.icons8.com/bubbles/50/000000/crowd-2men-2women.png"/> */}
        </Col>
        <Col className="button-margin" md={3}>
          <Row > <button className="button-style" type="button">Scrum Q/A</button></Row>
          <Row > <button className="button-style" type="button">Get Certified</button></Row>
          <Row > <button className="button-style" type="button">Other Agile Trainings</button></Row>
        </Col>
      </Row>
    </section>
  );
}
