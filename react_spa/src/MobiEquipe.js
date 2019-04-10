import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import { Colab, MOBIPEquipe } from "./equipe";



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
<div className="MOBIdummy">
          <div className="MOBIequipeGrid">
      <MOBIPEquipe classN2="MOBIequipetext" classN="MOBIequipeFols" name="Pedro Martins" text="Ecólogo com interesse em estatística e dinâmica de populações de aves. Após concluir mestrado pelo Instituto Nacional de Pesquisas da Amazônia (INPA), Pedro se juntou ao programa de monitoramento de aves de longo prazo do Observatório de Aves de Klamath, nos EUA, no qual foi certificado treinador pelo Conselho Norte-Americano de Anilhamento."  />
          <MOBIPEquipe classN2="MOBIequipetext" classN="MOBIequipeFols" name="Raquel Justo" text="Bióloga com mestrado e ênfase em Biologia Animal, especificamente na área de Ornitologia, pela Universidade Federal Rural do Rio de Janeiro. Trabalhando com aves desde 2007, possui ampla experiência em elaboração, execução e coordenação de estudos de impactos ambientais"  />
          <MOBIPEquipe classN2="MOBIequipetext" classN="MOBIequipeFols" name="Luiza Figueira" text="Bióloga com mestrado em Ecologia pelo Instituto Nacional de Pesquisas da Amazônia (INPA). Trabalha com pesquisa de aves desde 2014, tendo colaborado com diversos projetos, como o Projeto de Dinâmicas Biológicas de Fragmentos Florestais na Amazônia brasileira, o Observatório de Aves da Costa Rica e o Observatório de Aves de Klamath, no Oregon, Estados Unidos."  />
            </div>
</div>
          </div>

          <div className="section">


          <h1> Colaboradores </h1>
          <div className="MOBIrestcontainer">
          <div className="MOBIcolabGrid">

          <div><Colab  classN="MOBIcolabsFols" name="Renata Miwa" func="Designer" link="www.teste.com" /></div>
          <div><Colab classN="MOBIcolabsFols" name="Julia Rodrigues" func="Fotógrafa" link="www.teste.com" /></div>
          <div><Colab classN="MOBIcolabsFols" name="Simone Coimbra" func="Estilista" link="www.teste.com" /></div>
          <div><Colab classN="MOBIcolabsFols" name="Joaquim Mendonça" func="Consultor Botânico" link="www.teste.com" /></div>
          <div><Colab classN="MOBIcolabsFols" name="Dirlene Martins" func="Revisora de Português" link="www.teste.com" /></div>
          <div><Colab classN="MOBIcolabsFols" name="Ellen Campbell" func="Revisora de Inglễs" link="www.teste.com" /></div>
          <div><Colab classN="MOBIcolabsFols" name="Eduardo Schultz" func="Ornitólogo e Fotógrafo" link="www.teste.com" /></div>
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

class MobiEquipe extends Component {
render(){
return(
    <Fullpage />
)

}
}

export default MobiEquipe;
