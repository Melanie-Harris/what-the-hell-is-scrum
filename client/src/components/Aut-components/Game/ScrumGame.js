import React from "react";

// import {Row,Col} from "react-bootstrap"
import { Link } from "react-router-dom";
// import learning from "../../../img/learning.svg";

export default function ScrumGame() {
  return (
    <section>
      <h1>Memory Game</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/AuthLanding">Lesson Plan</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/ScrumGame">Game</Link>
          </li>
        </ol>
      </nav>
    </section>
  );
}
