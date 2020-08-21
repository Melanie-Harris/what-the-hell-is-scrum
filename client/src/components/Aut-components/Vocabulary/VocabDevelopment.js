import React from "react";
import vocabData from "./vocabData";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import learning from "../../../img/learning.svg";

export default function VocabDevelopment() {
  const vocab = vocabData.map((data) => (
    <div className="" key={data.id}>
      {/* {data.img} */}






      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne" aria-expanded="false"
                aria-controls="collapseOne"
              >
                  
                <Col>
                  <Row sm={10}>
                    <img
                    style={{width:"5rem"}}
                      className="learning-im"
                      src={require("../../../img/learning.svg")}
                    />
                    <Row>
                      <Col>
                        <h3>{data.name}</h3>
                      </Col>
                    </Row>
                  </Row>
                </Col>
              </button>
            </h2>
          </div>
          <div
            id="collapseOne"
            className="collapse collapsing"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <Col>
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
      </Col> */}
    </div>
  ));

  return (
    <section>

        
      <h1>Vocabulary Development</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/AuthLanding">Lesson Plan</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/VocabDevelopment">Vocabulary Development</Link>
          </li>
        </ol>
      </nav>
      <div>{vocab}</div>
    </section>
  );
}
