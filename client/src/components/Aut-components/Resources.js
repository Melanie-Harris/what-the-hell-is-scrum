import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Resources() {
  return (
    <section className="container resources-container">
      <h1>Additional Resources
      
        </h1>
      <Row>
        <Col sm={4} className="summary-col">
          {/* <i class="fas fa-sitemap"></i> */}
          <img src="../"/>
          <h2>Title here</h2>
          <br />
          <span className="summary-sub-text"> 
          card here <br/>
          </span>
        </Col>
        <Col  sm={4} className="summary-col">
        <img src="../"/>
          <h2>Title here</h2>
          <br />
          <span className="summary-sub-text"> 
          card here <br/>
          </span>
        </Col>
        <Col  sm={4} className="summary-col">
        <img src="../"/>
          <h2>Title here</h2>
          <br />
          <span className="summary-sub-text"> 
          card here <br/>
          </span>
        </Col>
      </Row>
    </section>
  );
}
