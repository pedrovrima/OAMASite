import React, { Component } from "react";
import MediaQuery from 'react-responsive';
import ReactFullpage from '@fullpage/react-fullpage';
import {DeskEntry, sessoes} from './HomeSects'

class MobiHome extends Component {
  render(){

      return (

          <div className="mobiFirst">

          <div  className="mobiEntry">

          <DeskEntry sect={sessoes}  />
          </div>


          <div className="MOBIeffort">
          <div className="effort-content">

          <h1>Por que anilhamos aves? </h1>
          </div>
          </div>

    ]
          <div className="MOBInews">
          <h1>Ajude o OAMa</h1>
          </div>
          </div>



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
