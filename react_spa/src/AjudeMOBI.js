import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';



const Fullpage = () => (
  <ReactFullpage
  controlArrows={false}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>

        <div className={"section"}>

        <div className={"slide"}>
          <div className="AjudeGrid">
            <div className="Ajudetittle">
              <h1>Parceiro OAMa</h1>
              <p>
              Texto sobre como a pessoa pode ajudar
              </p>

            </div>
            <div className="ajudeMensal"  onClick={() =>fullpageApi.moveSlideRight()}>
            a
            </div>
            <div className="ajudeSolo" onClick={() =>fullpageApi.moveSlideLeft()}>
            a
            </div>

          </div>
        </div>
          <div className={"slide active"}>
            <div className="MOBIAjudeGrid">
              <div className="Ajudetittle">
                <h1>Ajude2</h1>
                <p>
                Texto sobre como a pessoa pode ajudar
                </p>

              </div>
              <div className="MOBIajudeGrid1"  onClick={() =>fullpageApi.moveSlideRight()}>
              <div>
              <h2>Ajuda Única </h2>
              <p>Apoie os projetos do OAMa com uma doação única em qualquer valor.</p>
              </div>

              <div className="imgdiv">
              <div className="imgGrid">

              <img src="/figs/arr_right.png" />
              </div>


              </div>
              </div>

              <div className="MOBIajudeGrid2" onClick={() =>fullpageApi.moveSlideLeft()}>
              <div className="imgdiv">
              <div className="imgGrid">
              <img src="/figs/arr_left.png" />
              </div>
              </div>

              <div>

              <h2>Ajuda Mensal </h2>
              <p>Torne-se um apoiador mensal do OAMa e faça parte do nosso time de associados.</p>
              </div>
              </div>
              </div>

            </div>


          <div className={"slide"}>
                <h1>Ajuda única</h1>
                <p>
                Entre abaixo o valor de sua contribuição. Você será direcionado para uma página de check-out do PayPal.
                </p>




          </div>
          </div>


        </ReactFullpage.Wrapper>
      );
    }}
  />
);

class MobiAjude extends Component {
render(){
return(
    <Fullpage  />
)

}
}

export default MobiAjude;
