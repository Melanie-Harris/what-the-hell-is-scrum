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
      <Hero/>
      <Section/>
      <Section2/>
      {/* <SampleSection/> */}
    </div>
  );
}


