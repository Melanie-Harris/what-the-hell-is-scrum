import React from "react";
import {Switch, Route} from "react-router-dom"
import Nav from "./components/Nav";
import LoginReg from "./components/Auth/LoginReg";
import LandingPage from "./components/LandingPage";
import AuthLanding from "./components/Aut-components/AuthLanding";
import Footer from "./components/Footer"
// import Notice from "./components/Notice";
// import {Example} from "./components/not used/Slider"


function App() {
  return (
    <div className="">
      {/* <Notice/> */}
      <Nav/>

     <Switch>
        <Route exact path="/"> <LandingPage/> </Route>
        <Route path="/LoginReg"> <LoginReg/> </Route>
        <Route exact path="/AuthLanding"> <AuthLanding/> </Route>
      </Switch>

      <Footer/>
    </div>
  );
}

export default App;

   {/* <Route exact path="/LoginReg" render={()=> <LoginReg/>}></Route> */}
        {/* <Route exact path="/LoginReg" component={LoginReg} /> */}