import React from "react";
// import { Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom"

export default function Nav() {
  return (
    <div>
    <nav className="container-fluid nav">
      <Link to="/LoginReg" > <i class="fas fa-sign-in-alt"> Login / Register</i> </Link>
      <Link to="/">Home</Link>
      <Link to="/">Contact</Link>

      
      {/* <h1 style={{textAlign:"center", marginBottom:"-3rem", marginLeft:"30rem"}}>Scrum</h1> */}
    </nav>
    </div>
  );
}

// render={() => <LoginReg/>} use render with switch when you will pas a custom hook down