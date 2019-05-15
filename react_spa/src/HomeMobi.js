import React, { Component } from "react";
import MediaQuery from 'react-responsive';
import {DeskEntry, sessoes} from './HomeSects'
import {
  Route,
  NavLink,
  HashRouter,
  Image
} from "react-router-dom";

class MobiHome extends Component {
  render(){

      return (

<div>

          <div  className="mobiEntry">

          <DeskEntry sect={sessoes}  />
          </div>


          <NavLink onClick={() => window.scrollTo(0, 0)} exact to="/anilhamento" className="MOBIeffort">

          <h1>Por que anilhamos aves? </h1>

          </NavLink>


          <NavLink onClick={() => window.scrollTo(0, 0)} exact to="/ajude" className="MOBInews">
          <h1>Quer ajudar o OAMa?</h1>
          </NavLink>


          </div>

)

}
}

export default MobiHome;
