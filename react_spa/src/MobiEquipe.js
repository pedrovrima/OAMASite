import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import { Colab, MOBIPEquipe, Amigos } from "./equipe";



class MobiEquipe extends Component {
  render() {
    return (
      <div>

      <div className="MOBIequipe">
      <div className="MOBIentrypic">

      <div className="MOBItext">
      <h1>Equipe OAMa</h1>
      <p className="MOBIentrytext">
Acreditamos que juntos podemos ir mais longe. Por isso o OAMa é formado por um grupo de profissionais de diversas áreas que colaboram com suas especialidades, sem as quais a execução de nossos projetos e atividades seria impossível. Conheça abaixo quem são as pessoas e instituições que fazem do OAMa uma organização que preza pela pluraridade e interdisciplinariedade.</p>
      </div>
      </div>

      </div>

<div className="MOBIdummy">
<h1 className="MobipageTit">Diretores</h1>
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

          <div><Colab  classN="MOBIcolabsFols" name="Renata Miwa" func="Designer" link="" /></div>
          <div><Colab classN="MOBIcolabsFols" name="Julia Rodrigues" func="Fotógrafa" link="" /></div>
          <div><Colab classN="MOBIcolabsFols" name="Simone Coimbra" func="Estilista" link="" /></div>
          <div><Colab classN="MOBIcolabsFols" name="Joaquim Mendonça" func="Consultor Botânico" link="" /></div>
          <div><Colab classN="MOBIcolabsFols" name="Dirlene Martins" func="Revisora de Português" link="" /></div>
          <div><Colab classN="MOBIcolabsFols" name="Ellen Campbell" func="Revisora de Inglễs" link="" /></div>
          <div><Colab classN="MOBIcolabsFols" name="Eduardo Schultz" func="Ornitólogo e Fotógrafo" link="" /></div>
          </div>
            </div>
          </div>


          <div className="MOBIdummy">

          <h1> Conselheiros </h1>
          <div className="MOBIrestcontainer">

          <div className="MOBIcolabGrid">

          <Colab classN="MOBIcolabsFols" name="Jared Wolfe" func="Conselho Científico" link="Michigan Institute of Technology" />
          <Colab classN="MOBIcolabsFols" name="Gonçalo Ferraz" func="Conselho Científico" link="Univ. Federal do Rio Grande do Sul" />
          <Colab classN="MOBIcolabsFols" name="Pablo Elizondo" func="Conselho Consultivo" link="Costa Rica Bird Observatories" />
          <Colab classN="MOBIcolabsFols" name="André Luiz Gonçalvez" func="Conselho Consultivo" link="Instituto Federal Catarinense" />
          <Colab classN="MOBIcolabsFols" name="Luiza Blue" func="Conselho Fiscal" link="" />
          <Colab classN="MOBIcolabsFols" name="Leonardo Solé" func="Conselho Fiscal" link="" />
          <Colab classN="MOBIcolabsFols" name="Aline Lopes" func="Conselho Fiscal" link="" />
          </div>
            </div>
          </div>


          <div className="MOBIdummy">

            <h1> Instituições Amigas </h1>


            <div className="MOBIrestcontainer">
            <div className="MOBIamigosGrid">

            <Amigos classN="MOBIcolabsFols" name="Observatório de Aves do Instituto Butantã" fig="OAU.jpg.webp.png" link="https://www.facebook.com/observatoriodeavesibu" />
            <Amigos classN="MOBIcolabsFols" name="Observatório de Aves da Costa Rica" fig="CRBO.jpg.webp.png" link="https://www.costaricabirds.org" />
            <Amigos classN="MOBIcolabsFols" name="Observatório de Aves do Klamath" fig="KBO.png.webp.png" link="https://www.klamathbird.org" />
            <Amigos classN="MOBIcolabsFols" name="Observatório de Aves da PUC-RS" fig="PUCRS.png.webp.png" link="http://www.pucrs.br/ima/projetos/observatorio-de-aves/" />
            <Amigos classN=" MOBIcolabsFols" name="Un Poco del Chocó" fig="unpoco.png.webp.png" link="https://www.unpocodelchoco.com/" />

            <Amigos classN="MOBIcolabsFols" name="Mata do Sauá" fig="matadosaua.jpg.webp.png" link="https://www.instagram.com/matadosaua/" />
            <Amigos classN="MOBIcolabsFols" name="Silo - Arte e Latitude Rural" fig="SILO.png.webp.png" link="https://www.silo.org.br" />


            </div>

                        </div>
    </div>


    </div>


)

}
}

export default MobiEquipe;
