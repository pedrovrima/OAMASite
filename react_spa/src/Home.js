import React, { Component } from "react";
import MediaQuery from 'react-responsive';

class Home extends Component {

  render() {
    function morenewsClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');

      document.getElementById("main").style.marginLeft = "-85em";
    }

    function DeskEntry  (sect) {
      console.log(sect.sect.title)

    return(
    <div>
    <img src={sect.sect.fig}/>
    <h1>{sect.sect.title}</h1>
    <span>{sect.sect.text}</span>
    </div>
  )};

  var sessoes= {id:"entry" ,
  title: "Bem-vindo ao portal do Observatório de Aves da Mantiqueira",
  fig:"/figs/logoescritosemfundo.png",
  text: "O Observatório de Aves da Mantiqueira é uma organização científica independente voltada para a pesquisa e conservação de aves na região da Serra da Mantiqueira"};

  console.log(sessoes)

    return (

      <div className="homecontainer">
      <div className="oqoama">
      <DeskEntry sect={sessoes}/>
    </div>

      <div className="effort2">
      <p>a</p>
      </div>
      <div className="effort">
      <p>a</p>
      </div>

      <div className="newstittle">
      <p>Novidades</p>
      </div>

      <div className="news">
      <p>Novidades</p>
      </div>

      <div className="morenews" onClick={morenewsClick}>
      <p>>></p>
      </div>
      </div>

        );
  }
}

export default Home;
