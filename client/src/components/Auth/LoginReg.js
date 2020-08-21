import React from "react";
import {Link} from "react-router-dom"
import Nav from "../Nav";
import "./auth.css"
// import AuthLanding from "../Aut-components/AuthLanding";
const login = window.login;

export default function LoginReg() {
  return (
    <section >
      <Nav/>
       
      <h2>Authentication in progress, please click login link for now</h2>
     <Link to="/AuthLanding"><h1>Login</h1></Link>
     
        <div className="auth-style-container">
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
        </div>
       
    </section>
  );
}
