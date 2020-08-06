import React from "react";
// import logo from './logo.svg';
import Footer from "./components/Footer"
import Header from "./components/Header";
import AvatarSection from "./components/AvatarSection";

function App() {
  return (
    <div className="container-fluid">
      <Header/>
      
      <AvatarSection/>
      <Footer/>
    </div>
  );
}

export default App;
