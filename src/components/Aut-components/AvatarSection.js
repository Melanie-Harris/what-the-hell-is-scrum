import React from "react";
import { Row, Col } from "react-bootstrap";
import development from "../../img/development.svg";
import team from "../../img/team.svg";
import games from "../../img/games.svg";
import definition from "../../img/definition.svg";
import backlog_list from "../../img/backlog_list.svg";
import advice from "../../img/advice.svg";
import iterate from "../../img/iterate.svg";
// import Typist from "react-typist";
// import scrum1 from "../../img/product_tour.svg";

export default function AvatarSection() {
  return (
    <section>
      <section className="container p-5 a-section-main">
        <Row className="containe">
          <h1>lesson plans</h1>
          {/* <img src={scrum1} className="d-block w-100" alt="First slide" /> */}
        </Row>
        <Col sm={12} className="avatar-box2">
            <Row>
            <img
                src={iterate}
                className="d-block w-50 button-margin"
                alt="First slide"
              />
              {/* <img src="https://img.icons8.com/bubbles/200/000000/business-man-in-blue-jacket.png" /> */}
              <span>
                {/* Jason
                <br />
                <span className="bold"> Client</span>
                <br /> */}
                <button className="button-style2" type="button">
                  Agile Development Explained
                </button>
              </span>
            </Row>
          </Col>
        <Row>
          <Col sm={6} className="avatar-box0">
            <Row>
              <img
                src={development}
                className="d-block w-50 button-margin"
                alt="First slide"
              />
              {/* <img src="https://img.icons8.com/bubbles/200/000000/businesswoman.png" /> */}
              <span className="avatar-bio-text pt-3">
                <br />
                {/* Melanie
                <br /> */}
                {/* <span className="bold "> Scrum Master</span> <br /> */}
                <button className="button-style2" type="button">
                  {/* Responsibilities of a Scrum Master */}
                  {/* Agile Development */}
                  Scrum Development
                </button>
              </span>
            </Row>
          </Col>
          <Col sm={6} className="avatar-box0">
            <Row>
              <img
                src={team}
                className="d-block w-50 button-margin"
                alt="First slide"
              />
              {/* <img src="https://img.icons8.com/bubbles/200/000000/long-brown-curly-hair-lady-with-glasses.png" /> */}
              <span className="avatar-bio-text pt-3">
                {/* Magdalena
                <br />
                <span className="bold"> Project Owner</span> */}
                {/* <br /> */}
                <button className="button-style2" type="button">
                  {/* Responsibilities of a Product Owner */} Scrum Team
                </button>
              </span>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="avatar-box" sm={3}>
            <Row>
              <img
                src={backlog_list}
                className="d-block w-50 button-margin"
                alt="First slide"
              />
              {/* <img src="https://img.icons8.com/bubbles/200/000000/brown-long-curly-hair-lady.png" /> */}
              <span>
                {/* Areona
                <br />
                <span className="bold">Scrum Team Member</span> */}
                <br />
                <button className="button-style2" type="button">
                  Managing Backlogs
                </button>
              </span>
            </Row>
          </Col>
          <Col sm={3} className="avatar-box">
            <Row>
              <img
                src={advice}
                className="d-block w-50 button-margin"
                alt="First slide"
              />
              {/* <img src="https://img.icons8.com/bubbles/200/000000/long-brunette-hair-lady.png" /> */}
              <span>
                {/* Victoria
                <br /> */}
                {/* <span className="bold">
                  Scrum Team Member
                  <br />
                </span> */}
                <button className="button-style2" type="button">
                  Advice From The Experts
                </button>
              </span>
            </Row>
          </Col>
          <Col sm={3} className="avatar-box">
            <Row>
              <img
                src={definition}
                className="d-block w-70 button-margin"
                alt="First slide"
              />
              {/* <img src="https://img.icons8.com/bubbles/200/000000/brown-pigtail-hair-lady.png" /> */}
              {/* <img src="https://img.icons8.com/bubbles/200/000000/brown-short-curly-hair-lady.png" /> */}
              <span>
                {/* Adya
                <br />
                <span className="bold">Scrum Team Member</span> */}
                <br />
                <button className="button-style2" type="button">
                  Scrum Vocabulary
                </button>
              </span>
            </Row>
          </Col>
          <Col sm={3} className="avatar-box">
            <Row>
              <img
                src={games}
                className="d-block w-70 button-margin"
                alt="First slide"
              />
              {/* <img src="https://img.icons8.com/bubbles/200/000000/business-man-with-beard.png" /> */}
              <span>
                {/* Robert
                <br />
                <span className="bold"> Scrum Team Member</span> <br /> */}
                <button className="button-style2" type="button">
                  Interactive Scrum Games
                </button>
              </span>
            </Row>
          </Col>
        </Row>
        <Row>
          {/* <Col sm={4} className="avatar-box2">
            <Row>
              <img src="https://img.icons8.com/bubbles/200/000000/brown-short-curly-hair-lady.png" />
              <img src="https://img.icons8.com/bubbles/210/000000/client-company.png" />
              <span>
                Happy Work Place
                <br />
                <span className="bold"> Company</span>
                <br />
                <button className="button-style2" type="button">
                  Firm impact on Scrum
                </button>
              </span>
            </Row>
          </Col> */}
          {/* <Col sm={4} className="avatar-box2">
            <Row>
              <img src="https://img.icons8.com/bubbles/200/000000/blond-short-hair-lady-with-blue-glasses.png" />
              <span>
                Haili
                <br />
                <span className="bold">External Sources </span>
                <br />
                <button className="button-style2" type="button">
                  Other Agile Methodologies
                </button>
              </span>
            </Row>
          </Col> */}
          
        </Row>
      </section>
    </section>
  );
}

{
  /* <Col style={{ textAlign: "end" }}>
          <img src="https://img.icons8.com/bubbles/450/000000/businesswoman.png" />
        </Col> */
}
{
  /* <Col>
        &#10004;
        ✅
        
        <Typist.Backspace count={15} delay={200} />
        
      

          <div className="chat-bubble tri-right left-in">
            <div className="chat-text"> 
              <p>
              <span className="bold">Hi, I'm Melanie, A certified Scrum Master and Web
          Developer and this is my scrum team. </span> <Typist>   <p/>Below you'll find lessons to help
          guide you on your path to learning scrum and agile methodologies.
          Please click on a team member below to learn more about the topic.
          Happy Scrumming! <p />
          Have questions for me? I can be reached at the following:(social media
          links here)</Typist>
              </p>
            </div>
          </div>

        </Col> */
}
