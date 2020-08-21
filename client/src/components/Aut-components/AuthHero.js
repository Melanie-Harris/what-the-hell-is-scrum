import React from "react";
import { Row, Col } from "react-bootstrap";
import scrum1 from "../../img/product_tour.svg";
import definition from "../../img/definition.svg";
import games from "../../img/games.svg";
import { Link } from "react-router-dom";

export default function AuthHero() {
  return (
    <section>
      <div className="container-fluid hero-container">
        <Row>
          <Col sm={6} className="container-fluid hero-container-subtext">
            <h1>
              Welcome <br />
              "user" <br/>
              {/* to your learning portal */}
            </h1>
            <h2>Let's dive in!</h2>
            <a href="#lessons">
              {" "}
              <i
                style={{ fontSize: "3rem", color: "#d6954b" }}
                class="fas fa-angle-down"
              ></i>
            </a>
          </Col>
          <Col sm={6}>
            <img
              src={scrum1}
              className="d-block w-100 button-margin"
              alt="Auth Hero Image First slide"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
}
