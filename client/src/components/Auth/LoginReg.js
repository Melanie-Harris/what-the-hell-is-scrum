import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import "./auth.css";
import LoginLanding from "../login-page-components/login/LoginLanding";
import { Row, Col } from "react-bootstrap";
// import AuthLanding from "../Aut-components/AuthLanding";
const login = window.login;

export default function LoginReg() {
  return (
    <section>
      <Nav />
      <h2 style={{textAlign:"center"}}>Backend Authentication in progress, please click Login Button for now</h2>
      {/* <Link to="/AuthLanding">
        <h1>Login</h1>
      </Link> */}
      <Row>
        <Col sm={3}></Col>
        <Col sm={4}>
          {" "}
          <LoginLanding />
        </Col>
        <Col sm={5}></Col>
      </Row>
      {/* <LoginLanding /> */}
      {/* <div className="auth-style-container">
        <Link to="/LoginReg">Sign In | </Link><Link to="/Signup"> Sign Up</Link>
        <br/>
        <img/>
        <input
        placeholder="login"
        />
        <br/>
        <input
        placeholder="password"
        />
        <br/>
        <button>Log In</button>
        <br/>
        <button>Forgot Password</button>
        </div> */}
    </section>
  );
}
