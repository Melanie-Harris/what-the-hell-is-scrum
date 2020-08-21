import React, { useState } from "react";
import agileData from "./agileData";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import learning from "../../../img/learning.svg";

export default function AgileDevelopment() {
  const [hovered, setHovered] = useState(false);
  console.log(hovered);

  const heartIcon = hovered && (
    <i className="ri-heart-line favorite">completed</i>
  );
  const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>;

  // function toggleFavorite(id){
  //     const updatedArr = agileData.map( data =>{
  //         if (data.id === id){
  //             console.log(id)
  //                 console.log(!data.isBookMarked)
  //             return{
  //                 ...data, isBookMarked: !isBookMarked
  //             }
  //             return data
  //         }
  //     })
  // }

  const agile = agileData.map((data) => (
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
              <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <h3>{data.name}</h3>
                <p>{data.description}</p>

                {heartIcon}
                {cartIcon}
              </div>
            </Col>
          </Row>
        </Row>
      </Col>
    </div>
  ));

  return (
    <section>
      <h1>Agile Development</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/AuthLanding">Lesson Plan</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/AgileDevelopment">Agile Development</Link>
          </li>
        </ol>
      </nav>

      <div>{agile}</div>
    </section>
  );
}
