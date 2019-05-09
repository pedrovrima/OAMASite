import React, { Component } from "react";
import MediaQuery from 'react-responsive';
import {DeskEntry, sessoes} from './HomeSects'

class MobiHome extends Component {
  render(){

      return (

<div>

          <div  className="mobiEntry">

          <DeskEntry sect={sessoes}  />
          </div>


          <div className="MOBIeffort">
          <div className="effort-content">

          <h1>Por que anilhamos aves? </h1>
          </div>
          </div>


          <div className="MOBInews">
          <h1>Quer ajudar o OAMa?</h1>
          </div>


          </div>

)

}
}

export default MobiHome;
