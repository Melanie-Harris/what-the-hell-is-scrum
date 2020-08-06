import React from "react";
// import logo from './logo.svg';
import Footer from "./components/Footer"
import Header from "./components/Header";
import AvatarSection from "./components/AvatarSection";
import Resources from "./components/Resources";

function App() {
  return (
    <div className="container-fluid">
      <Header/>
      
      <AvatarSection/>
      <Resources/>
      <Footer/>
    </div>
  );
}

export default App;
