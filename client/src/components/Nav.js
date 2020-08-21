import React, {useState} from "react";
// import { Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom"

export default function Nav() {
  // const [isLoggedIn,setIsLoggedIn] = useState(false)
  // let text = isLoggedIn ? "Log out" : "Login / Register"

  // function change(){
  //   setIsLoggedIn(prevState => !prevState)
  // }
  return (
    <div> 

      <Link to="/"><div className="resource-headings ">Scrum Enlightened</div></Link>
      <nav className="navbar navbar-expand-sm navbar-light  mb-4" style={{backgroundColor:"RGB(242, 242, 242)"}}>
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
              <Link to="/LoginReg" > <i class="fas fa-sign-in-alt"> Login / Register</i> </Link>	&nbsp;
              </li>
              {/* <li className="nav-item">
              <Link to="/"><i class="fas fa-paper-plane"> Contact</i></Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

// render={() => <LoginReg/>} use render with switch when you will pas a custom hook down