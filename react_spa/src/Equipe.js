import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Colab, PEquipe, Amigos } from "./equipe";

class Equipe extends Component {
render(){
return(



<div>
<div className="equipe">
<div className="entrypic">

<div className="text">
<h1>Equipe OAMa</h1>
<p className="entrytext">
Acreditamos que juntos podemos ir mais longe. Por isso o OAMa é formado por um grupo de profissionais de diversas áreas que colaboram com suas especialidades, sem as quais a execução de nossos projetos e atividades seria impossível. Conheça abaixo quem são as pessoas e instituições que fazem do OAMa uma organização que preza pela pluraridade e interdisciplinariedade.</p>
</div>
</div>

</div>
<div className="restcontainer">

            <h1>Diretores</h1>

          <div className="NewequipeGrid">
          <PEquipe classN="NewequipeFols" classN2="equipetext" name="Pedro Martins" text="Ecólogo com interesse em estatística e dinâmica de populações de aves. Após concluir mestrado pelo Instituto Nacional de Pesquisas da Amazônia (INPA), Pedro se juntou ao programa de monitoramento de aves de longo prazo do Observatório de Aves de Klamath, nos EUA, no qual foi certificado treinador pelo Conselho Norte-Americano de Anilhamento."/>
          <PEquipe classN="NewequipeFols" classN2="equipetext" name="Raquel Justo" text="Bióloga com mestrado e ênfase em Biologia Animal, especificamente na área de Ornitologia, pela Universidade Federal Rural do Rio de Janeiro. Trabalhando com aves desde 2007, possui ampla experiência em elaboração, execução e coordenação de estudos de impactos ambientais"  />
          <PEquipe classN="NewequipeFols" classN2="equipetext" name="Luiza Figueira" text="Bióloga com mestrado em Ecologia pelo Instituto Nacional de Pesquisas da Amazônia (INPA). Trabalha com pesquisa de aves desde 2014, tendo colaborado com diversos projetos, como o Projeto de Dinâmicas Biológicas de Fragmentos Florestais na Amazônia brasileira, o Observatório de Aves da Costa Rica e o Observatório de Aves de Klamath, no Oregon, Estados Unidos."  />

          </div>
          </div>



          <div className="restcontainer">
          <h1> Colaboradores </h1>

          <div className="colabGrid">

          <Colab classN="colabsFols" name="Renata Miwa" func="Designer" link="" />
          <Colab classN="colabsFols" name="Julia Rodrigues" func="Fotógrafa" link="" />
          <Colab classN="colabsFols" name="Simone Coimbra" func="Estilista" link="" />
          <Colab classN="colabsFols" name="Joaquim Mendonça" func="Consultor Botânico" link="" />
          <Colab classN="colabsFols" name="Dirlene Martins" func="Revisora de Português" link="" />
          <Colab classN="colabsFols" name="Ellen Campbell" func="Revisora de Inglễs" link="" />
          <Colab classN="colabsFols" name="Eduardo Schultz" func="Ornitólogo e Fotógrafo" link="" />
          </div>
            </div>




          <div className="restcontainer">
          <h1> Conselheiros </h1>

          <div className="colabGrid">

          <Colab classN="colabsFols" name="Jared Wolfe" func="Conselho Científico" link="Michigan Institute of Technology" />
          <Colab classN="colabsFols" name="Gonçalo Ferraz" func="Conselho Científico" link="Univ. Federal do Rio Grande do Sul" />
          <Colab classN="colabsFols" name="Pablo Elizondo" func="Conselho Consultivo" link="Costa Rica Bird Observatories" />
          <Colab classN="colabsFols" name="André Luiz Gonçalvez" func="Conselho Consultivo" link="Instituto Federal Catarinense" />
          <Colab classN="colabsFols" name="Luiza Blue" func="Conselho Fiscal" link="" />
          <Colab classN="colabsFols" name="Leonardo Solé" func="Conselho Fiscal" link="" />
          <Colab classN="colabsFols" name="Aline Lopes" func="Conselho Fiscal" link="" />
          </div>
            </div>



        <div className="restcontainer">
        <h1> Instituições Amigas </h1>

        <div className="colabGrid">
        <Amigos classN="colabsFols" name="Observatório de Aves do Instituto Butantã" fig="OAU.jpg.webp" link="https://www.facebook.com/observatoriodeavesibu" />
        <Amigos classN="colabsFols" name="Observatório de Aves da Costa Rica" fig="CRBO.jpg.webp" link="https://www.costaricabirds.org" />
        <Amigos classN="colabsFols" name="Observatório de Aves do Klamath" fig="KBO.png.webp" link="https://www.klamathbird.org" />
        <Amigos classN="colabsFols" name="Observatório de Aves da PUC-RS" fig="PUCRS.png.webp" link="http://www.pucrs.br/ima/projetos/observatorio-de-aves/" />
        <Amigos classN=" colabsFols" name="Un Poco del Chocó" fig="unpoco.png.webp" link="https://www.unpocodelchoco.com/" />

        <Amigos classN="colabsFols" name="Mata do Sauá" fig="matadosaua.jpg.webp" link="https://www.instagram.com/matadosaua/" />
        <Amigos classN=" colabsFols" name="Silo - Arte e Latitude Rural" fig="SILO.png.webp" link="https://www.silo.org.br" />


                    </div>
                    </div>

                    </div>


)

}
}

export default Equipe;
