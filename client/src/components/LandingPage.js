import React from "react";

import Nav from "../components/Nav";
import Hero from "./Hero";
import Section from "./Section";
import Section2 from "./Section2";
import SampleSection from "./SampleSection";

export default function Landing() {
  return (
    <div className="">
      <Nav/>
      <h1 style={{textAlign:"center"}}>Learning Scrum The Eay Way</h1>
      <Hero/>
      <Section/>
      <Section2/>
      {/* <SampleSection/> */}
    </div>
  );
}


