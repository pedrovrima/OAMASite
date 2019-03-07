import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';



const Fullpage = () => (
  <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
          <h1>Projetos</h1>
          <div className="projectGrid">
          <div className="projectFols">P1</div>
          <div className="projectFols">P1</div>
          <div className="projectFols">P1</div>
          <div className="projectFols">P1</div>
          <div className="projectFols">P1</div>
          </div>
          </div>
          <div className="section">
          </div>

          </ReactFullpage.Wrapper>
        );
      }}
    />
  );

  class Projetos extends Component {
  render(){
  return(
      <Fullpage />
  )

  }
  }

  export default Projetos;
