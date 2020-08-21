import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Header() {
  return (
    <footer className="footer container-fluid">
      <Row>
        <Col className="container" sm={4}>
          <span className="footer-subtext">About Us</span>
          <br />
          <span>
          Mission<br/>
          {/* Pricing: free! */}
          </span>
        </Col>
        <Col sm={4}>
          <span className="footer-subtext"> Resources</span><br/>
          Become A Sponsor<br/>
          Signup

        </Col>
        <Col sm={4}>
          <span className="footer-subtext">Contact Us</span><br/>
          <i class="fas fa-envelope-square"></i>
        </Col>
      </Row>

      <div>
        <hr style={{height:"1px", backgroundColor:"white", width:"60rem"}}/>
        <i class="fas fa-envelope-square"></i>
        <i class="fab fa-linkedin"></i>
        <i class="fab fa-twitter-square"></i>
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-google-plus-square"></i>
        <i class="fab fa-youtube-square"></i>
      </div>
    </footer>
  );
}
