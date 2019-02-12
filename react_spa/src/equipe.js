import React, { Component } from "react";

function FigPath(name){
  return "/figs/" + name + ".png"
}


function Colab(props){


return(
  <div className="colabsFols">
    <img src= {FigPath(props.name)}/>
    <h1>{props.name}</h1>
    <h2>{props.func}</h2>
    <p>{props.link}</p>
  </div>

)

}

export default Colab;










;
