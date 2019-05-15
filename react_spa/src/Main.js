import React, { Component } from "react";
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import MediaQuery from 'react-responsive';

import {
  Route,
  NavLink,
  HashRouter,
  Image
} from "react-router-dom";
import Home from "./Home";
import Sobre from "./Sobre";
import Equipe from "./Equipe";
import Anilhamento from "./Anilham";

import DeskMenu from "./DeskMenu";
import MobiMenu from "./MobiMenu";
import MobiHome from "./HomeMobi";
import MobiEquipe from "./MobiEquipe";
import MobiAjude from "./AjudeMOBI";
import Ajude from "./Ajude";
import MobiSobre from "./MobiSobre";




class Main extends Component {
  render() {




    return (
 <HashRouter>
        <div className="ALL">


            <MediaQuery query="(min-device-width: 800px)">
            <div className="wholesite">
            <DeskMenu/>
            <div id="main">
            <Route exact path="/" component={Home}/>
            <Route onClick={() => window.scrollTo(0, 0)} path="/sobre" component={Sobre}/>
            <Route path="/equipe" component={Equipe}/>
            <Route path="/anilhamento" component={Anilhamento}/>
            <Route path="/ajude" component={Ajude}/>

            </div>
            </div>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 799px)">
          <div className="mobiwholesite">

          <MobiMenu/>
          <div id="main">
          <Route exact path="/" component={MobiHome}/>
          <Route path="/sobre" component={MobiSobre}/>
          <Route path="/equipe" component={MobiEquipe}/>
          <Route path="/ajude" component={MobiAjude}/>
          <Route path="/anilhamento" component={Anilhamento}/>


          </div>
          </div>
        </MediaQuery>





        </div>

        </HashRouter>
    );
  }
}

export default Main;
