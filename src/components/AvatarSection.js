import React from "react";
import { Row, Col } from "react-bootstrap";

export default function AvatarSection() {
  return (
    <section className="container-fluid p-5 a-section-main">
      <Row>
        <Col style={{ textAlign: "end" }}>
          <img src="https://img.icons8.com/bubbles/450/000000/businesswoman.png" />
        </Col>
        <Col>
          

          <div class="chat-bubble tri-right left-in">
            <div class="chat-text">
              <p>
              chatbox text sample (Hi, I'm Melanie, A certified Scrum Master and Web
          Developer and this is my scrum team. Below you'll find lessons to help
          guide you in your path to learning scrum and agile methodologies.
          Please click on a team member below to learn more about the topic.
          Happy Scrumming!) <br />
          Have questions for me? I can be reached at the following:(social media
          links here)
              </p>
            </div>
          </div>


        </Col>
      </Row>
      <Row>
        <Col sm={6} className="avatar-box0">
          <Row >
            <img src="https://img.icons8.com/bubbles/200/000000/businesswoman.png" />
            <span className="avatar-bio-text pt-3">Melanie<br/>
           <span className="bold "> Scrum Master</span>  <br />
            <button className="button-style2" type="button">Responsibilities of a Scrum Master</button>
            
            </span>
          </Row>
        </Col>
        <Col sm={6} className="avatar-box0">
          <Row>
            <img src="https://img.icons8.com/bubbles/200/000000/long-brown-curly-hair-lady-with-glasses.png" />
            <span className="avatar-bio-text pt-3">
              Magdalena<br/>
            <span className="bold"> Project Owner</span>
            <br />
            <button className="button-style2" type="button">Responsibilities of a Product Owner</button>
            
            </span>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="avatar-box" sm={3}>
          <Row>
            <img src="https://img.icons8.com/bubbles/200/000000/brown-long-curly-hair-lady.png" />
            <span>Areona<br/>
            <span className="bold">Scrum Team Member</span><br/>
            <button className="button-style2" type="button">Scrum Team Defined</button>
            </span>
          </Row>
        </Col>
        <Col sm={3} className="avatar-box">
          <Row>
            <img src="https://img.icons8.com/bubbles/200/000000/long-brunette-hair-lady.png" />
            <span>Victoria<br/>
            <span className="bold">Scrum Team Member<br/></span>
            <button className="button-style2" type="button">Advice For Team Formation</button>
            
            </span>
          </Row>
        </Col>
        <Col sm={3} className="avatar-box">
          <Row>
            <img src="https://img.icons8.com/bubbles/200/000000/brown-pigtail-hair-lady.png" />
            <span>Adya<br />
              <span className="bold">Scrum Team Member</span><br/>
              <button className="button-style2" type="button">Important Scrum Definitions</button>
            </span>
          </Row>
        </Col>
        <Col sm={3} className="avatar-box">
          <Row>
            <img src="https://img.icons8.com/bubbles/200/000000/business-man-with-beard.png" />
           <span>Robert<br />
           <span className="bold"> Scrum Team Member</span>  <br/>
            <button className="button-style2" type="button">Interactive Scrum Games</button>
            </span>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col sm={4} className="avatar-box2">
          <Row>
            <img src="https://img.icons8.com/bubbles/200/000000/brown-short-curly-hair-lady.png" />
            <span>Wimmie<br />
            <span className="bold"> CEO (maybe and firm)</span>
            <br />
            <button className="button-style2" type="button">Topic covered here</button>
            
            </span>
          </Row>
        </Col>
        <Col sm={4} className="avatar-box2">
          <Row>
            <img src="https://img.icons8.com/bubbles/200/000000/blond-short-hair-lady-with-blue-glasses.png" />
            <span>Haili<br />
            <span className="bold">Firm or external sources </span>
            <br />
            <button className="button-style2" type="button">Topic covered here</button>
            </span>
          </Row>
        </Col>
        <Col sm={4} className="avatar-box2">
          <Row>
            <img src="https://img.icons8.com/bubbles/200/000000/business-man-in-blue-jacket.png" />
            <span>Jason<br />
            <span className="bold"> Client</span> 
            <br />
            <button className="button-style2" type="button">Topic covered here</button>
            </span>
          </Row>
        </Col>
      </Row>
    </section>
  );
}
