import React, { Component } from "react";
import {Link} from "react-router-dom"
import login2 from "../../../img/login2.svg";
import "./styles.scss";

export class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="base-container" ref={this.props.containerRef}>
        <div className="header"> Login</div>
        <div className="content">
          <div className="image">
            <img src={login2} />
          </div>
          <div className="form">
              <div className="form-group">
                  <label htmlFor="user">Username</label>
                  <input type="text" name="username" placeholder="username"/>
              </div>
              <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="text" name="password" placeholder="password"/>
              </div>
          </div>
        </div>
        <footer>
          <Link to="/AuthLanding">
            <button className="btn" type="button">Login</button>
          </Link>
        </footer>
      </section>
    );
  }
}
