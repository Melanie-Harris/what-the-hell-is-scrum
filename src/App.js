import React from "react";
// import logo from './logo.svg';
import Footer from "./components/Footer"
import Header from "./components/Header";
import AvatarSection from "./components/AvatarSection";
import Resources from "./components/Resources";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="">
      <Header/>
      <AvatarSection/>
      <Summary/>
      <Resources/>
      <Footer/>
    </div>
  );
}

export default App;
