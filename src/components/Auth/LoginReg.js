import React from "react";
import {Link} from "react-router-dom"
// import AuthLanding from "../Aut-components/AuthLanding";


export default function LoginReg() {
  return (
    <section className="">
        <h2>Authentication in progress, please click login link for now</h2>
     <Link to="/AuthLanding"><h1>Login</h1></Link>
    </section>
  );
}
