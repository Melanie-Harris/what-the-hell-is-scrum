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
      <Link to="/"><div className="resource-headings ">Scrum</div></Link>
    <nav className="container-fluid nav">
   
  <Link to="/LoginReg" > <i class="fas fa-sign-in-alt"> Login / Register</i> </Link>
      {/* <Link >Home</Link> */}
     
      <Link to="/"><i class="fas fa-paper-plane"> Contact</i></Link>

      {/* <h1 style={{textAlign:"center", marginBottom:"-3rem", marginLeft:"30rem"}}>Scrum</h1> */}
    </nav>
    </div>
  );
}

// render={() => <LoginReg/>} use render with switch when you will pas a custom hook down