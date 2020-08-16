import React from "react";
import Footer from "./components/Footer"
import AvatarSection from "./components/Aut-components/AvatarSection";
import Resources from "./components/Aut-components/Resources";
import Summary from "./components/Aut-components/Summary";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Section from "./components/Section";
import Section2 from "./components/Section2";
// import Notice from "./components/Notice";
// import {Example} from "./components/not used/Slider"
import SampleSection from "./components/SampleSection";

function App() {
  return (
    <div className="">
      {/* <Notice/> */}
      <Nav/>
      <Hero/>
      <Section/>
      <Section2/>
      <SampleSection/>
      <br/>
      <Footer/>

      <hr/>
      <h1>After Authentication Display</h1>

      <Resources/>
      <AvatarSection/>
      <Summary/>
      
      
    </div>
  );
}

export default App;
