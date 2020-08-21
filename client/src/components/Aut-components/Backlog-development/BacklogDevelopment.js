import React from "react";
import backlogData from "./backlogData";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import learning from "../../../img/learning.svg";

export default function BacklogDevelopment() {
  const backlog = backlogData.map((data) => (
    <div className="learning-sub-container" key={data.id}>
      {/* {data.img} */}
      <Col>
        <Row sm={10}>
          <img
            className="learning-img"
            src={require("../../../img/learning.svg")}
          />
          <Row>
            <Col>
              <h3>{data.name}</h3>
              <p>{data.description}</p>
            </Col>
          </Row>
        </Row>
      </Col>
    </div>
  ));

  return (
    <section>
      <h1>Backlog Development</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/AuthLanding">Lesson Plan</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/BacklogDevelopment">Backlog Development</Link>
          </li>
        </ol>
      </nav>
      <div>{backlog}</div>
    </section>
  );
}
