import React from "react";
import {Switch, Route} from "react-router-dom"
// import Nav from "./components/Nav";
import LoginReg from "./components/Auth/LoginReg";
import LandingPage from "./components/LandingPage";
import AuthLanding from "./components/Aut-components/AuthLanding";
import Footer from "./components/Footer"
import AgileDevelopment from "./components/Aut-components/Agile-development/AgileDevelopment";
import ScrumDevelopment from "./components/Aut-components/Scrum-development/ScrumDevelopment";
import TeamDevelopment from "./components/Aut-components/Scrum-team/TeamDevelopment";
import BacklogDevelopment from "./components/Aut-components/Backlog-development/BacklogDevelopment";
import ExpertDevelopment from "./components/Aut-components/Expert-device/ExpertDevelopment";
import VocabDevelopment from "./components/Aut-components/Vocabulary/VocabDevelopment";
import ScrumGame from "./components/Aut-components/Game/ScrumGame";
import Signup from "./components/Auth/Signup";

// import Notice from "./components/Notice";
// import {Example} from "./components/not used/Slider"


function App() {
  return (
    <div className="">
      {/* <Notice/> */}
      {/* <Nav/> */}

     <Switch>
        <Route exact path="/"> <LandingPage/> </Route>
        <Route path="/LoginReg"> <LoginReg/> </Route>
        <Route path="/Signup"> <Signup/> </Route>
        <Route exact path="/AuthLanding"> <AuthLanding/> </Route>
        <Route   path="/AgileDevelopment"> <AgileDevelopment/> </Route>
        <Route   path="/ScrumDevelopment"> <ScrumDevelopment/> </Route>
        <Route   path="/TeamDevelopment"> <TeamDevelopment/> </Route>
        <Route   path="/BacklogDevelopment"> <BacklogDevelopment/> </Route>
        <Route   path="/ExpertDevelopment"> <ExpertDevelopment/> </Route>
        <Route   path="/VocabDevelopment"> <VocabDevelopment/> </Route>
        <Route   path="/ScrumGame"> <ScrumGame/> </Route>
      </Switch>

      <Footer/>
    </div>
  );
}

export default App;

   {/* <Route exact path="/LoginReg" render={()=> <LoginReg/>}></Route> */}
        {/* <Route exact path="/LoginReg" component={LoginReg} /> */}