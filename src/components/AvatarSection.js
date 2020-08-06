import React from "react";
import { Row, Col } from "react-bootstrap";

export default function AvatarSection() {
  return (
    <section>
      <Row>
        <Col style={{ textAlign: "end" }}>
          <img src="https://img.icons8.com/bubbles/450/000000/businesswoman.png" />
        </Col>
        <Col>
          chatbox text sample (Hi, I'm Melanie, A certified Scrum Master and Web
          Developer and this is my scrum team. Below you'll find lessons to help
          guide you in your path to learning scrum and agile methodologies.
          Please click on a team member below to learn more about the topic.
          Happy Scrumming!) <br />
          Have questions for me? I can be reached at the following:(social media
          links here)
        </Col>
      </Row>
      <Row>
        <Col sm={6} style={{ border: "2px solid red", cursor:"help" }}>
          <Row>
            <img src="https://img.icons8.com/bubbles/200/000000/businesswoman.png" />
            Name: Melanie <br/>
            Role: Scrum Master <br />
            Topics covered:text sample
          </Row>
        </Col>
        <Col sm={6} style={{ border: "2px solid red", cursor:"help" }}>
            <Row>
                <img src="https://img.icons8.com/bubbles/200/000000/long-brown-curly-hair-lady-with-glasses.png" />
                Name: Magdalena<br/>
            Role: Project Owner <br />
            Topics covered:text sample
            </Row>
          
        </Col>
      </Row>
      <Row>
        <Col style={{ border: "2px solid red", cursor:"help" }}>
        <Row> 
            <img src="https://img.icons8.com/bubbles/200/000000/brown-long-curly-hair-lady.png" />
            Name: Areona<br/>
            Role: Scrum Team<br />
            Topics covered:text sample
            </Row>
         
        </Col>
        <Col style={{ border: "2px solid red", cursor:"help" }}>
        <Row>
            <img src="https://img.icons8.com/bubbles/200/000000/long-brunette-hair-lady.png" />
            Name: Victoria <br/>
            Role: Scrum Team <br />
            Topics covered:text sample
            </Row>
          
        </Col>
        <Col style={{ border: "2px solid red", cursor:"help" }}>
        <Row>
            <img src="https://img.icons8.com/bubbles/200/000000/brown-pigtail-hair-lady.png" />
            Name: Adya<br/>
            Role: Scrum Team <br />
            Topics covered:text sample
            </Row>
          
        </Col>
        <Col style={{ border: "2px solid red", cursor:"help" }}>
        <Row>
            <img src="https://img.icons8.com/bubbles/200/000000/business-man-with-beard.png" />
            Name: Robert <br/>
            Role: Scrum Team <br />
            Topics covered:text sample
            </Row>
          
        </Col>
      </Row>
      <Row>
        <Col style={{ border: "2px solid red", cursor:"help" }}>
        <Row>
            <img src="https://img.icons8.com/bubbles/200/000000/brown-short-curly-hair-lady.png" />
            Name: Wimmie<br/>
            Role: CEO (maybe and firm)<br />
            Topics covered:text sample
            </Row>
          
        </Col>
        <Col style={{ border: "2px solid red", cursor:"help" }}>
        <Row>
            <img src="https://img.icons8.com/bubbles/200/000000/blond-short-hair-lady-with-blue-glasses.png" />
            Name: Haili<br/>
            Role: Firm or external sources<br />
            Topics covered:text sample
            </Row>
          
        </Col>
        <Col style={{ border: "2px solid red", cursor:"help" }}>
        <Row>
            <img src="https://img.icons8.com/bubbles/200/000000/business-man-in-blue-jacket.png" />
            Name: Jason <br/>
            Role: Client <br />
            Topics covered:text sample
            </Row>
          
        </Col>
      </Row>
    </section>
  );
}
