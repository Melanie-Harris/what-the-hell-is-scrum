import React from "react";
import {Link, Switch, Route} from "react-router-dom"
import { Row, Col } from "react-bootstrap";
import collab2 from "../img/collab2.svg";
import LoginReg from "./Auth/LoginReg";

export default function Hero() {
  return (
    <section className="container-fluid hero">
      <Row>
        <Col sm={12}>
          <img
            className=""
            src={collab2}
            className="d-block w-100"
            alt="hero image"
          />
        </Col>
        <Col>
          <Row className="right" sm={11}>
            
            <button className="button-style landing-hero-text" type="button">
              <Link to="/LoginReg"><span className="landing-hero-text">Scrum Training</span></Link>
            </button>
            <button className="button-style" type="button">
            <Link to="/LoginReg"><span className="landing-hero-text">Scrum Videos</span></Link>
            </button>
            <button className="button-style" type="button">
              <Link to="/LoginReg"><span className="landing-hero-text">Scrum Games</span></Link>
            </button>
          </Row>
        </Col>
        {/* <Col style={{border:"1px solid red"}} sm={1}><h1>Scrum</h1></Col> */}
      </Row>
      <Switch>
        <Route><Route  path="/LoginReg" render={() => <LoginReg/>} /></Route>
        
      </Switch>
    </section>
  );
}
