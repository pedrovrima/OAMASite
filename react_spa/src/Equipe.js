import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import { Colab, PEquipe } from "./equipe";



const Fullpage = () => (
  <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section" id="section1">
          <div className="headersection">

          <h1 id="section1Header">Quem Somos</h1>
          <div className="nosizecontainer">
          <p >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a</p>
          </div>
          </div>
</div>
          <div className="section">
            <h1>Equipe OAMa</h1>
          <div className="dummycontainer">

          <div className="equipeGrid">
          <PEquipe classN="equipeGrid" classN2="equipetext" name="Pedro Martins" text="Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto "  />
          <PEquipe classN="equipeGrid" classN2="equipetext" name="Raquel Justo" text=""  />
          <PEquipe classN="equipeGrid" classN2="equipetext" name="Luiza Figueira" text=""  />
            </div>

          </div>
          </div>

          <div className="section">


          <h1> Colaboradores </h1>
          <div className="restcontainer">

          <div className="colabGrid">

          <Colab classN="colabsFols" name="Renata Miwa" func="Designer" link="www.teste.com" />
          <Colab classN="colabsFols" name="Julia Rodrigues" func="Fotógrafa" link="www.teste.com" />
          <Colab classN="colabsFols" name="Simone Coimbra" func="Estilista" link="www.teste.com" />
          <Colab classN="colabsFols" name="Joaquim Mendonça" func="Consultor Botânico" link="www.teste.com" />
          <Colab classN="colabsFols" name="Dirlene Martins" func="Revisora de Português" link="www.teste.com" />
          <Colab classN="colabsFols" name="Ellen Campbell" func="Revisora de Inglễs" link="www.teste.com" />
          <Colab classN="colabsFols" name="Eduardo Schultz" func="Ornitólogo e Fotógrafo" link="www.teste.com" />
          </div>
            </div>
          </div>

          <div className="section">
          <h1> Comitê Científico </h1>

          </div>


      <div className="section">
        <h1> Parceiros </h1>

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
