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



class Main extends Component {
  render() {




    return (
 <HashRouter>
        <div>
        <div className="wholesite">
            <MediaQuery query="(min-device-width: 800px)">
          <DeskMenu/>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 799px)">
          <MobiMenu/>

        </MediaQuery>
          <div id="main">
          <Route exact path="/" component={Home}/>
          <Route path="/stuff" component={Stuff}/>
          <Route path="/projetos" component={Projetos}/>
          <Route path="/equipe" component={Equipe}/>

          </div>


</div>

        </div>

        </HashRouter>
    );
  }
}

export default Main;
