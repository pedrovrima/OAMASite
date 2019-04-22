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
import Stuff from "./Stuff";
import Projetos from "./Projetos";
import Equipe from "./Equipe";
import DeskMenu from "./DeskMenu";
import MobiMenu from "./MobiMenu";
import MobiHome from "./HomeMobi";
import MobiEquipe from "./MobiEquipe";
import MobiAjude from "./AjudeMOBI";




class Main extends Component {
  render() {




    return (
 <HashRouter>
        <div>
            <MediaQuery query="(min-device-width: 800px)">
            <div className="wholesite">
            <DeskMenu/>
            <div id="main">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/projetos" component={Projetos}/>
            <Route path="/equipe" component={Equipe}/>

            </div>
            </div>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 799px)">
          <div className="mobiwholesite">

          <MobiMenu/>
          <div id="main">
          <Route exact path="/" component={MobiHome}/>
          <Route path="/stuff" component={Stuff}/>
          <Route path="/projetos" component={Projetos}/>
          <Route path="/equipe" component={MobiEquipe}/>
          <Route path="/ajude" component={MobiAjude}/>

          </div>
          </div>
        </MediaQuery>





        </div>

        </HashRouter>
    );
  }
}

export default Main;
