import React, {useState} from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import development from "../../img/development.svg";
import team from "../../img/team.svg";
import games from "../../img/games.svg";
import definition from "../../img/definition.svg";
import backlog_list from "../../img/backlog_list.svg";
import advice from "../../img/advice.svg";
import iterate from "../../img/iterate.svg";
// import Typist from "react-typist";
// import scrum1 from "../../img/product_tour.svg";

export default function AvatarSection({className}) {
  

  return (
    <section>
{/* ===============Carousel */}
<div>
{/* <div id="carouselExampleIndicators" className="carousel slide container-fluid" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block" src={definition} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="..." alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div> */}</div>
{/* ===============End Carousel */}

{/* ===============Lesson Plan */}
      <section className="container p-5 a-section-main">
        <Row className="containe" id="lessons">
          {/* <h1>lesson plans</h1> */}
        </Row>
        <Col sm={12} className="avatar-box2">
          <Row >
         
            <img
            style={{width:"13rem"}}
              src={iterate}
              className="d-block  button-margin"
              alt="First slide"
            />
            <span>
              <Link to="/AgileDevelopment">
                <button style={{marginTop:"7rem", marginLeft:"1rem"}}  className="button-style2" type="button">
                  Agile Development Explained
                </button>
              </Link>
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

              <span className="avatar-bio-text pt-3">
                
                <Link to="/ScrumDevelopment">
                  <button style={{marginTop:"1rem", marginLeft:"1rem"}} className="button-style2" type="button">
                    Scrum Development
                  </button>
                </Link>
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

              <span className="avatar-bio-text pt-3">
                <Link to="/TeamDevelopment">
                  <button style={{marginTop:"1.5rem", marginLeft:"1rem"}} className="button-style2" type="button">
                    Scrum Team
                  </button>
                </Link>
              </span>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="avatar-box" sm={3}>
            <Row>
              <img
                src={backlog_list}
                style={{width:"12rem"}}
                className="d-block button-margin"
                alt="First slide"
              />

              <span>
                
                <Link to="/BacklogDevelopment">
                  <button style={{marginTop:"1.4rem"}}
                  className="button-style2" 
                  type="button">
                    Managing Backlogs
                  </button>
                </Link>
              </span>
            </Row>
          </Col>
          <Col sm={3} className="avatar-box">
            <Row>
              <img
                src={advice}
                style={{width:"10rem"}}
                className="d-block button-margin"
                alt="First slide"
              />

              <span>
                <Link to="/ExpertDevelopment">
                  <button style={{marginTop:".8rem"}} className="button-style2" type="button">
                    Expert Scrum Advice
                  </button>
                </Link>
              </span>
            </Row>
          </Col>
          <Col sm={3} className="avatar-box">
            <Row>
              <img
                src={definition}
                style={{width:"10rem"}}
                className="d-block  button-margin"
                alt="First slide"
              />

              <span>
              
                <Link to="/VocabDevelopment">
                  <button style={{marginTop:".8rem"}} className="button-style2" type="button">
                    Scrum Vocabulary
                  </button>
                </Link>
              </span>
            </Row>
          </Col>
          <Col sm={3} className="avatar-box">
            <Row>
              <img
                src={games}
                style={{width:"12rem"}}
                className="d-block button-margin"
                alt="First slide"
              />

              <span>
                <Link to="/ScrumGame">
                  <button style={{marginTop:".8rem"}} className="button-style2" type="button">
                    Scrum Memory Cards
                  </button>
                </Link>
              </span>
            </Row>
          </Col>
        </Row>
        <Row></Row>
      </section>
      
    </section>
  );
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
