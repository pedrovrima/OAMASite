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

    
          <div className="MOBInews">
          <h1>Ajude o OAMa</h1>
          </div>
          </div>



)

}
}

export default MobiHome;
