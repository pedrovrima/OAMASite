import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Image
} from "react-router-dom";

class DeskMenu extends Component{

  constructor(props) {
    super(props)
    this.state = { isClosed: true, hamSym: "9776" }
    this.triggerClick = this.triggerClick.bind(this);
    this.OpenNav = this.OpenNav.bind(this);
    this.CloseNav = this.CloseNav.bind(this);
    this.MenuCloseFunction = this.MenuCloseFunction.bind(this);


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
        document.getElementById("mySidenav").style.width = "15vw";
      document.getElementById("main").style.marginLeft = "13vw";
      this.setState({
        ...this.state,
        isClosed: false,
        hamSym: "10005",
      })

    };

    MenuCloseFunction() {
        this.CloseNav();
        window.scrollTo(0, 0);
    };


      CloseNav() {

        document.getElementById("mySidenav").style.width = "2vw";
        document.getElementById("main").style.marginLeft = "0";
        this.setState({
          ...this.state,
          isClosed: true,
          hamSym:"9776",
        })


      }



render() {

function  Hamburguer (props) {
  return(
      <span className="deskhamburger" id="hamb" onClick={props.Click}>{props.sym}</span>
    )
  };

return (
        <div className="header" id="mySidenav" className="sidenav">
        <div className="logohold" onClick={this.MenuCloseFunction}>
          <NavLink exact to="/"><img className="logo" src="/figs/tt.png.webp"/></NavLink>
          </div>
          <ul className="menu">

          <li onClick={this.MenuCloseFunction}><NavLink to="/sobre">Sobre</NavLink></li>
          <li onClick={this.MenuCloseFunction}><NavLink to="/equipe" >Equipe</NavLink></li>

          <li id="ajude" onClick={this.MenuCloseFunction}><NavLink to="/ajude">Ajude
          <div id="heart"></div>
          </NavLink></li>

        </ul>
        <div className="open">
        <Hamburguer Click={this.triggerClick} sym={String.fromCharCode(this.state.hamSym)}/>
        </div>

        </div>
  );
}
}

export default DeskMenu;
