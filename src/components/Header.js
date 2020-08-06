import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Header() {
  return (
    <header>
      <section className="header">
        <img className="hero-img" src={require("../img/confused-man.png")} />
        <span className="hero-text animate__animated animate__rubberBand">
          What The Hell Is <span className="scrum-font"> Scrum?</span>
        </span>
        <span className="hero-sub-text">
          A lesson of agility taught to you by my scrum team
        </span>
      </section>
     
    </header>
  );
}
