import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import { Colab, PEquipe } from "./equipe";



const Fullpage = () => (
  <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>

          <div className="section">
          <h1>Equipe OAMa</h1>
          <div className="dummycontainer">

          <div className="equipeGrid">
          <PEquipe name="Pedro Martins" text="Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto "  />
          <PEquipe name="Raquel Justo" text=""  />
          <PEquipe name="Luiza Figueira" text=""  />
            </div>

          </div>
          </div>

          <div className="section">


          <h1> Colaboradores </h1>
          <div className="restcontainer">
          <div className="colabGrid">

          <Colab name="Renata Miwa" func="Designer" link="www.teste.com" />
          <Colab name="Julia Rodrigues" func="Fotógrafa" link="www.teste.com" />
          <Colab name="Simone Coimbra" func="Estilista" link="www.teste.com" />
          <Colab name="Joaquim Mendonça" func="Consultor Botânico" link="www.teste.com" />
          <Colab name="Dirlene Martins" func="Revisora de Português" link="www.teste.com" />
          <Colab name="Ellen Campbell" func="Revisora de Inglễs" link="www.teste.com" />
          <Colab name="Eduardo Schultz" func="Ornitólogo e Fotógrafo" link="www.teste.com" />
          </div>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

class Equipe extends Component {
render(){
return(
    <Fullpage />
)

}
}

export default Equipe;
