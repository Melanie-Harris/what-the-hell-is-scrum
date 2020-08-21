import React, { Component } from "react";
import login2 from "../../../img/login2.svg";

export class Register extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="base-container" ref={this.props.containerRef}>
        <div className="header"> Register</div>
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
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" placeholder="email"/>
              </div>
              <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="text" name="password" placeholder="password"/>
              </div>
          </div>
        </div>
        <footer>
            <button className="btn" type="button">Register</button>
        </footer>
      </section>
    );
  }
}
