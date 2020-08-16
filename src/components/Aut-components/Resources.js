import React from "react";
import { Row, Col } from "react-bootstrap";
import scrum1 from "../../img/product_tour.svg";

export default function Resources() {
  return (
    <section className="container-fluid resource-section">
      <div className="resource-headings ">Scrum</div>
      <Row className="resource-content">
        <Col className="button-margin" md={2} >
          <Row ><button className="button-style3 button-top" type="button">Scrum Videos</button> </Row>
          <Row ><button className="button-style3" type="button">Scrum Blog</button> </Row>
          <Row ><button className="button-style3" type="button">Scrum Guide</button></Row>
        </Col>
        <Col className="avatar-resource" md={8}>
          <img src={scrum1} className="d-block w-100 button-margin" alt="First slide" />
          {/* <img src="https://img.icons8.com/bubbles/550/000000/crowd.png" /> */}
          {/* <img src="https://img.icons8.com/bubbles/50/000000/crowd-2men-2women.png"/> */}
        </Col>
        <Col className="button-margin" md={2}>
          <Row > <button className="button-style3 button-top" type="button">Scrum Q/A</button></Row>
          <Row > <button className="button-style3" type="button">Get Certified</button></Row>
          <Row > <button className="button-style3" type="button">Other Agile Trainings</button></Row>
        </Col>
      </Row>
    </section>
  );
}
