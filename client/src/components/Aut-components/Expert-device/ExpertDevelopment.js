import React from "react";
import expertData from "./expertData";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import learning from "../../../img/learning.svg";

export default function ExpertDevelopment() {
  const expert = expertData.map((data) => (
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
      <h1>Expert Scrum Advice</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/AuthLanding">Lesson Plan</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/ExpertDevelopment">Expert Advice</Link>
          </li>
        </ol>
      </nav>
      <div>{expert}</div>
    </section>
  );
}
