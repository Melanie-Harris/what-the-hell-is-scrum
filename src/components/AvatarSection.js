import React from "react";
import { Row, Col } from "react-bootstrap";

export default function AvatarSection() {
  return (
    <section>
        <Row>
            <Col style={{textAlign:"end"}}><img src="https://img.icons8.com/bubbles/450/000000/businesswoman.png" /></Col>
            <Col>chatbox text sample (Hi, I'm Melanie, A certified Scrum Master and Web Developer and this is my scrum team. Below you'll find lessons to help guide you in your path to learning scrum and agile methodologies. Please click on a team member below to learn more about the topic. Happy Scrumming!) <br/>Have questions for me? I can be reached at the following:(social media links here)</Col>
        
        </Row>
      <Row>
        <Col sm={6} style={{ border: "2px solid red" }}>
          <img src="https://img.icons8.com/bubbles/200/000000/businesswoman.png" />
        </Col>
        <Col sm={6} style={{ border: "2px solid red" }}>
          <img src="https://img.icons8.com/bubbles/200/000000/long-brown-curly-hair-lady-with-glasses.png" />
        </Col>
      </Row>
      <Row>
        <Col style={{ border: "2px solid red" }}>
          <img src="https://img.icons8.com/bubbles/200/000000/brown-long-curly-hair-lady.png" />
        </Col>
        <Col style={{ border: "2px solid red" }}>
          <img src="https://img.icons8.com/bubbles/200/000000/long-brunette-hair-lady.png" />
        </Col>
        <Col style={{ border: "2px solid red" }}>
          <img src="https://img.icons8.com/bubbles/200/000000/brown-pigtail-hair-lady.png" />
        </Col>
        <Col style={{ border: "2px solid red" }}>
          <img src="https://img.icons8.com/bubbles/200/000000/business-man-with-beard.png" />
        </Col>
      </Row>
      <Row>
        <Col style={{ border: "2px solid red" }}>
          <img src="https://img.icons8.com/bubbles/200/000000/brown-short-curly-hair-lady.png" />
        </Col>
        <Col style={{ border: "2px solid red" }}>
          <img src="https://img.icons8.com/bubbles/200/000000/blond-short-hair-lady-with-blue-glasses.png" />
        </Col>
        <Col style={{ border: "2px solid red" }}>
          <img src="https://img.icons8.com/bubbles/200/000000/business-man-in-blue-jacket.png" />
        </Col>
      </Row>
    </section>
  );
}
