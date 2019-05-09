import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Image
} from "react-router-dom";

class MobiMenu extends Component{


  constructor(props) {
    super(props)
    this.state = { isClosed: true, hamSym: "9776" }
    this.triggerClick = this.triggerClick.bind(this);
    this.OpenNav = this.OpenNav.bind(this);
    this.CloseNav = this.CloseNav.bind(this);

}


triggerClick() {
  console.log(this.state)
    if(this.state.isClosed){
    this.OpenNav()
  }
  if(this.state.isClosed==false){
    this.CloseNav()
  }
}


  OpenNav() {
    document.getElementById("myMobinav").style.height = "35vh";
    document.getElementById("myMobinav").style.maxHeight = "35vh";
    this.setState({
      ...this.state,
      isClosed: false,
      hamSym: "10005",
    })

  };




    CloseNav() {

      document.getElementById("myMobinav").style.height = "7.5vh";
      document.getElementById("myMobinav").style.maxHeight = "7.5vh";
      this.setState({
        ...this.state,
        isClosed: true,
        hamSym:"9776",
      })


    }

render() {

  function  Hamburguer (props) {
    return(
        <span className="mobihamburger" id="hamb" onClick={props.Click}>{props.sym}</span>
      )
    };


  return (
        <div className="header" id="myMobinav" className="mobinav">
        <div className="Mobilogohold">
          <NavLink exact to="/"><img className="mobilogo" src="/figs/tt.png"/></NavLink>
          <Hamburguer Click={this.triggerClick} sym={String.fromCharCode(this.state.hamSym)}/>

          </div>


          <ul className="menu">
          <li onClick={this.CloseNav}><NavLink to="/stuff">Stuff</NavLink></li>
          <li onClick={this.CloseNav}><NavLink to="/projetos">Projetos</NavLink></li>
          <li onClick={this.CloseNav}><NavLink to="/equipe" >Equipe</NavLink></li>

          <li id="ajude" onClick={this.CloseNav}><NavLink to="/ajude">Ajude
          <div id="heart"></div>
          </NavLink></li>

        </ul>

        </div>
  );
}
}

export default MobiMenu;
