import React from "react";
import { Row, Col } from "react-bootstrap";
import collab2 from "../img/collab2.svg";

export default function Hero() {
  return (
    <section className="container-fluid hero">
      <Row>
        <Col sm={12}>
          <img
            className=""
            src={collab2}
            className="d-block w-100"
            alt="hero image"
          />
        </Col>
        <Col>
          <Row className="right" sm={12}>
            <button className="button-style" type="button">
              Scrum Training
            </button>
            <button className="button-style" type="button">
            Scrum Videos
            </button>
            <button className="button-style" type="button">
              Scrum Games
            </button>
          </Row>
        </Col>
        {/* <Col style={{border:"1px solid red"}} sm={1}><h1>Scrum</h1></Col> */}
      </Row>
    </section>
  );
}
