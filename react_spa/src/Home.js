import React, { Component } from "react";
import MediaQuery from 'react-responsive';

class Home extends Component {




  render() {

    function DeskEntry  (sect, style) {

    return(
    <div>
    <img src={sect.sect.fig}/>
    <h1>{sect.sect.title}</h1>
    <span>{sect.sect.text}</span>
    </div>
  )};

  var sessoes= {
  title: "Bem-vindo ao portal do Observatório de Aves da Mantiqueira",
  fig:"/figs/logoescritosemfundo.png",
  text: "O Observatório de Aves da Mantiqueira é uma organização científica independente voltada para a pesquisa e conservação de aves na região da Serra da Mantiqueira"};


    return (

      <div className="homecontainer">
      <div className="oqoama">
      <DeskEntry sect={sessoes}/>
    </div>

      <div className="effort">
      <div className="effort-content">

      <h1>Por que anilhamos aves? </h1>
      </div>
      </div>



      <div className="news">
      <p>Novidades</p>
      </div>

      </div>

        );
  }
}

export default Home;
