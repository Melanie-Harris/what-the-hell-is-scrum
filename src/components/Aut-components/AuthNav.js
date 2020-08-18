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
      <nav className="container-fluid nav">
        <Link to="/">
          <i class="fas fa-sign-in-alt"> Logout</i>
        </Link>
        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/">Contact</Link> */}
        <Link className="icon-size"><i class="fas fa-user-circle"></i></Link>

        {/* <h1 style={{textAlign:"center", marginBottom:"-3rem", marginLeft:"30rem"}}>Scrum</h1> */}
      </nav>
    </div>
  );
}

// render={() => <LoginReg/>} use render with switch when you will pas a custom hook down
