import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import {OpenGrid, GridMaker, Sum} from './openGrid'

const projs = [{name: "Currículos de Interpretação", fig: "",},
              {name: "Biodiversidade", fig: "",},
              {name: "História Natural", fig: "",},
              {name: "Mudanças Climáticas", fig: "",},
              {name: "Demografia", fig: "",}];




const Fullpage = () => (
  <ReactFullpage
  render={({ state, fullpageApi }) => {


      return (

        <ReactFullpage.Wrapper>
          <div className="section">
          <h1>Projetos</h1>
          <div className={"projectGrid"} id= "teste">

        <GridMaker classN="projectGrid" items={projs}/>
        </div>
  </div>

          </ReactFullpage.Wrapper>
        );
      }}
    />
  );

  class Projetos extends Component {
constructor(props) {
    super(props)
    this.state = { isClosed: true}
    this.GridMaker = this.GridMaker.bind(this);
}


GridMaker = GridMaker


  render(){
  return(
      <Fullpage />
  )

  }
  }

  export default Projetos;
