import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import { Colab, MOBIPEquipe, Amigos } from "./equipe";



class MobiEquipe extends Component {
  render() {
    return (
      <div className="mobisections">
          <div className="mobiheadersection">

          <h1 id="section1Header">Quem Somos</h1>
          <div className="nosizecontainer">
          <p >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a</p>
          </div>
          </div>

<div className="MOBIdummy">
<h1 className="MobipageTit">Equipe OAMa</h1>
          <div className="MOBIequipeGrid">
          <MOBIPEquipe classN2="MOBIequipetext" classN="MOBIequipeFols" name="Raquel Justo" text="Bióloga com mestrado e ênfase em Biologia Animal, especificamente na área de Ornitologia, pela Universidade Federal Rural do Rio de Janeiro. Trabalhando com aves desde 2007, possui ampla experiência em elaboração, execução e coordenação de estudos de impactos ambientais"  />
          <MOBIPEquipe classN2="MOBIequipetext" classN="MOBIequipeFols" name="Luiza Figueira" text="Bióloga com mestrado em Ecologia pelo Instituto Nacional de Pesquisas da Amazônia. Trabalha com pesquisa de aves desde 2014, tendo colaborado com diversos projetos, como os Observatórios de Aves da Costa Rica e de Klamath, no Oregon, Estados Unidos."  />
          <MOBIPEquipe classN2="MOBIequipetext" classN="MOBIequipeFols" name="Pedro Martins" text="Ecólogo com interesse em estatística e dinâmica de populações de aves. Após concluir seu mestrado, Pedro se juntou ao programa de monitoramento de aves do Observatório de Aves de Klamath, nos EUA, onde foi certificado pelo Conselho Norte-Americano de Anilhamento."  />
            </div>
            </div>


          <div className="MOBIdummy">

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


          <div className="MOBIdummy">

          <h1> Conselheiros </h1>
          <div className="MOBIrestcontainer">

          <div className="MOBIcolabGrid">

          <Colab classN="MOBIcolabsFols" name="Jared Wolfe" func="Conselho Científico" link="www.teste.com" />
          <Colab classN="MOBIcolabsFols" name="Pablo Elizondo" func="Conselho Consultivo" link="www.teste.com" />
          </div>
            </div>
          </div>


          <div className="MOBIdummy">

            <h1> Instituições Amigas </h1>


            <div className="MOBIrestcontainer">
            <div className="MOBIamigosGrid">

            <Amigos classN="MOBIcolabsFols" name="Observatório de Aves do Instituto Butantã" fig="OAU.jpg" link="https://www.facebook.com/observatoriodeavesibu" />
            <Amigos classN="MOBIcolabsFols" name="Observatório de Aves da Costa Rica" fig="CRBO.jpg" link="https://www.costaricabirds.org" />
            <Amigos classN="MOBIcolabsFols" name="Observatório de Aves do Klamath" fig="KBO.png" link="https://www.klamathbird.org" />
            <Amigos classN="MOBIcolabsFols" name="Mata do Sauá" fig="matadosaua.jpg" link="https://www.instagram.com/matadosaua/" />
            <Amigos classN="MOBIcolabsFols" name="Silo - Arte e Latitude Rural" fig="SILO.png" link="https://www.silo.org.br" />
            <Amigos classN=" MOBIcolabsFols" name="Un Poco del Chocó" fig="unpoco.png" link="https://www.unpocodelchoco.com/" />


            </div>

                        </div>
    </div>


    </div>


)

}
}

export default MobiEquipe;
