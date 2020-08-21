import React, { useState } from "react";
// import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AuthNav() {
  // const [isLoggedIn,setIsLoggedIn] = useState(false)
  // let text = isLoggedIn ? "Log out" : "Login / Register"

  // function change(){
  //   setIsLoggedIn(prevState => !prevState)
  // }
  return (
    <div>
<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4" >
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
              <Link to="/">
          <i class="fas fa-sign-in-alt"> Logout </i>	&nbsp;
        </Link>	&nbsp;
        <Link className="icon-size"><i class="fas fa-user-circle"> Dashboard</i></Link>	&nbsp;
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
