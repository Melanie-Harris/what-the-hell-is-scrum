import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Summary() {
  return (
    <section style={{border:"1px solid pink", padding:"20px 0px", textAlign:"center"}}>
      <span >Most Important To Remember</span>
      <Row >
          <Col>
          <img src="https://img.icons8.com/ios/50/000000/parallel-tasks.png"/><br/>
          Team Structure<br/>
          hgkgkhgk
          </Col>
          <Col>
          {/* <img src="https://img.icons8.com/ios/50/000000/easy-to-find.png"/> */}
          <img src="https://img.icons8.com/wired/64/000000/waypoint-map.png"/><br/>
          Scrum Timeline<br/>
          hgkgkhgk
          </Col>
          <Col>
          <img src="https://img.icons8.com/dotty/80/000000/expand-influence.png"/> <br/>
          Impact, Why Scrum?<br/>
          hgkgkhgk
          </Col>
      </Row>
     
    </section>
  );
}
