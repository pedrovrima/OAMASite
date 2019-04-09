import React, { Component } from "react";

function FigPath(name){
  return "/figs/" + name + ".png"
}


export function Colab(props){



return(
  <div className={props.classN}>
    <img src= {FigPath(props.name)}/>
    <h1>{props.name}</h1>
    <h2>{props.func}</h2>
    <p>{props.link}</p>
  </div>

)

}

export function PEquipe(props){


return(
  <div className={props.classN}>
    <img src= {FigPath(props.name)}/>
    <div className={props.classN2}>
    <h1>{props.name}</h1>
    <p>{props.text}</p>
    </div>
  </div>

)

}


export function MOBIPEquipe(props){


return(
  <div className={props.classN}>
    <div className={props.classN2}>
    <img src= {FigPath(props.name)}/>
    <h1>{props.name}</h1>
    <p>{props.text}</p>
    </div>
  </div>

)

}











;
