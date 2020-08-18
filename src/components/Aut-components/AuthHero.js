import React from "react";
import { Row, Col } from "react-bootstrap";
import scrum1 from "../../img/product_tour.svg";
import {Link} from "react-router-dom"

export default function AuthHero() {
  return (
    <section className="container-fluid resource-section">
      
      <Row className="resource-content">
        <Col className="text-margin" md={2} >
          <h1>Lesson</h1>
          {/* <Row >
            <button className="button-style3 button-top" type="button">Scrum Videos</button> 
            
            </Row>
          <Row ><button className="button-style3" type="button">Scrum Blog</button> </Row>
          <Row ><button className="button-style3" type="button">Scrum Guide</button></Row> */}
        </Col>
        <Col className="avatar-resource" md={8}>
          <img src={scrum1} className="d-block w-100 button-margin" alt="Auth Hero Image" />
        </Col>
        <Col className="text-margin" md={2}>
          <h1>Plans</h1>
          {/* <Row > <button className="button-style3 button-top" type="button">Scrum Q/A</button></Row>
          <Row > <button className="button-style3" type="button">Get Certified</button></Row>
          <Row > <button className="button-style3" type="button">Other Agile Trainings</button></Row> */}
        </Col>
      </Row>
    </section>
  );
}
