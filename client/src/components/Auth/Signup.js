import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Nav from "../Nav";
import "./auth.css";
// import AuthLanding from "../Aut-components/AuthLanding";

export default function Signup() {
  return (
    <section>
      <Nav />
      <div className="auth-style-container">
        <Link to="/loginreg"> Sign In | </Link>
        <Link to="/signup"> Sign Up</Link>
        <br />
        <img />
        <input placeholder="login" />
        <br />
        <input placeholder="password" />
        <br />
        <button className="">Log In</button>
        <br />
        <button className="">Forgot Password</button>
      </div>
      <h2>Authentication in progress, please click login link for now</h2>
      <Link to="/AuthLanding">
        <h1>Login</h1>
      </Link>
    </section>
  );
}
