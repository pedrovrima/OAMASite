import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Image
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Equipe from "./Equipe";



class Main extends Component {
  render() {



    function CloseNav(e) {
      e.preventDefault();
      console.log('The link was clicked.');

      document.getElementById("mySidenav").style.width = "2em";
      document.getElementById("main").style.marginLeft = "0";
    }

    function OpenNav(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    document.getElementById("mySidenav").style.width = "250px";
document.getElementById("main").style.marginLeft = "250px";
};




    return (
 <HashRouter>
        <div>
        <div class="wholesite">
          <div className="header" id="mySidenav" class="sidenav">
          <div class="logohold">
            <NavLink exact to="/"><img class="logo" src="/figs/tt.png"/></NavLink>
            </div>
            <a href="javascript:void(0)" class="closebtn" onClick={CloseNav}>&times;</a>
            <ul class="menu">

            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/equipe">Equipe</NavLink></li>

            <li id="ajude"><NavLink to="/ajude">Ajude
            <div id="heart"></div>
            </NavLink></li>

          </ul>
          <div class="open">
          <span className="hamburger" onClick={OpenNav}>&#9776;</span>
          </div>

          </div>
          <div id="main">
          <Route exact path="/" component={Home}/>
          <Route path="/stuff" component={Stuff}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/equipe" component={Equipe}/>

          </div>


</div>

        </div>

        </HashRouter>
    );
  }
}

export default Main;
