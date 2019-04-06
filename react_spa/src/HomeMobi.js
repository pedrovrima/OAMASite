import React, { Component } from "react";
import MediaQuery from 'react-responsive';
import ReactFullpage from '@fullpage/react-fullpage';
import {DeskEntry, sessoes} from './HomeSects'

const Fullpage = () => (
  <ReactFullpage
      render={({ state, fullpageApi }) => {

      return (
        <ReactFullpage.Wrapper>
          <div className="section">
          <div className="mobiFirst">

          <div  className="mobiEntry">

          <DeskEntry sect={sessoes}  />
          </div>

          <div  className="Mobimorenews" onClick={() => fullpageApi.moveSectionDown()}>
          <h1>Novidades</h1><img className="plussign" src="/figs/plus.png"/>

          </div>

          </div>
                </div>

          <div className="section">
          </div>


      <div className="section">
      <span>3</span>

                    </div>

        </ReactFullpage.Wrapper>
      );
    }}
  />
);


class MobiHome extends Component {
render(){
return(
    <Fullpage />
)

}
}

export default MobiHome;









class Home extends Component {




  render() {
    function morenewsClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');

      document.getElementById("main").style.marginLeft = "-85em";
    }


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
      <p></p>
      </div>
      </div>

        );
  }
}
