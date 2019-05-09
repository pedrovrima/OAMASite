import React, { Component } from "react";
import MediaQuery from 'react-responsive';
import {DeskEntry, sessoes} from './HomeSects'
import {
  Route,
  NavLink,
  HashRouter,
  Image
} from "react-router-dom";

class Home extends Component {




  render() {



    return (

      <div className="homecontainer">
      <div className="oqoama">
      <DeskEntry sect={sessoes}/>
    </div>

    <NavLink exact to="/anilhamento" className="effort">

      <h1>Por que anilhamos aves? </h1>
      </NavLink>


      <NavLink exact to="/ajude" className="news">

      <h1>Quer ajudar o OAMa?</h1>
      </NavLink>

      </div>

        );
  }
}

export default Home;
