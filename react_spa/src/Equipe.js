import React, { Component } from "react";
import ReactFullpage from '@fullpage/react-fullpage';

class Equipe extends Component {

render(){
  return(
          <ReactFullpage.Wrapper>
            <div className="section">
              <p>Section 1 (welcome to fullpage.js)</p>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>
            <div className="section">
              <p>Section 2</p>
            </div>
          </ReactFullpage.Wrapper>
        )
}
}

export default Equipe;
