import React from "react";


class Notice extends React.Component {
  render() {
    return (
      <div class="">
        {/* <logo class="logo">
            <i class="fas fa-mug-hot"></i>
            Tea Haven
          </logo> */}
        <div class="notice" style={{zIndex:"999", textAlign:"center", color: "black"}}>
          <span>
          All things &nbsp;
          
          <a href="#" class="" style={{color:"#d6954b"}}>
            Scrum
          </a></span>
          
        </div>
      </div>
    );
  }
}

export default Notice;