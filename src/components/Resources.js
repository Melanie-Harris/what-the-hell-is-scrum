import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Resources() {
  return (
    <section>
      <Row>
          <Col md={3}>resource tabs: blogs, scrum guide, scrum manifesto</Col>
        <Col md={6}style={{ textAlign: "center",border: "2px solid green" }}>
          <h1>Additional Resources</h1>
          <img src="https://img.icons8.com/bubbles/450/000000/crowd.png"/>
          {/* <img src="https://img.icons8.com/bubbles/50/000000/crowd-2men-2women.png"/> */}
        </Col>
        <Col md={3}>
          resource tabs: get certified, other agile trainings, scrum videos
        </Col>
      </Row>
    </section>
  );
}
