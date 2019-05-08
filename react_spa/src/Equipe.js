import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import { Colab, PEquipe, Amigos } from "./equipe";



const Fullpage = () => (
  <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section" id="section1">
          <div className="headersection">

          <h1 id="section1Header">Quem Somos</h1>
          <div className="nosizecontainer">
          <p >Acreditamos que juntos podemos ir mais longe. Por isso o OAMa é formado por um grupo de profissionais de diversas áreas que colaboram com suas especialidades, sem as quais a execução de nossos projetos e atividades seria impossível. Conheça abaixo quem são as pessoas e instituições que fazem do OAMa uma organização que preza pela pluraridade e interdisciplinariedade.
</p>
          </div>
          </div>
</div>
          <div className="section">
            <h1>Diretores OAMa</h1>
          <div className="dummycontainer">

          <div className="equipeGrid">
          <PEquipe classN="equipeFols" classN2="equipetext" name="Pedro Martins" text="Ecólogo com interesse em estatística e dinâmica de populações de aves. Após concluir mestrado pelo Instituto Nacional de Pesquisas da Amazônia (INPA), Pedro se juntou ao programa de monitoramento de aves de longo prazo do Observatório de Aves de Klamath, nos EUA, no qual foi certificado treinador pelo Conselho Norte-Americano de Anilhamento."/>
          <PEquipe classN="equipeFols" classN2="equipetext" name="Raquel Justo" text="Bióloga com mestrado e ênfase em Biologia Animal, especificamente na área de Ornitologia, pela Universidade Federal Rural do Rio de Janeiro. Trabalhando com aves desde 2007, possui ampla experiência em elaboração, execução e coordenação de estudos de impactos ambientais"  />
          <PEquipe classN="equipeFols" classN2="equipetext" name="Luiza Figueira" text="Bióloga com mestrado em Ecologia pelo Instituto Nacional de Pesquisas da Amazônia (INPA). Trabalha com pesquisa de aves desde 2014, tendo colaborado com diversos projetos, como o Projeto de Dinâmicas Biológicas de Fragmentos Florestais na Amazônia brasileira, o Observatório de Aves da Costa Rica e o Observatório de Aves de Klamath, no Oregon, Estados Unidos."  />
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


          <h1> Conselheiros </h1>
          <div className="restcontainer">

          <div className="colabGrid">

          <Colab classN="colabsFols" name="Jared Wolfe" func="Conselho Científico" link="www.teste.com" />
          <Colab classN="colabsFols" name="Pablo Elizondo" func="Conselho Consultivo" link="www.teste.com" />
          </div>
            </div>
          </div>



      <div className="section">
        <h1> Instituições Amigas </h1>
        <div className="restcontainer">

        <div className="colabGrid">
        <Amigos classN="colabsFols" name="Observatório de Aves do Instituto Butantã" fig="OAU.jpg" link="https://www.facebook.com/observatoriodeavesibu" />
        <Amigos classN="colabsFols" name="Observatório de Aves da Costa Rica" fig="CRBO.jpg" link="https://www.costaricabirds.org" />
        <Amigos classN="colabsFols" name="Observatório de Aves do Klamath" fig="KBO.png" link="https://www.klamathbird.org" />
        <Amigos classN="colabsFols" name="Mata do Sauá" fig="matadosaua.jpg" link="https://www.instagram.com/matadosaua/" />
        <Amigos classN=" colabsFols" name="Silo - Arte e Latitude Rural" fig="SILO.png" link="https://www.silo.org.br" />


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
