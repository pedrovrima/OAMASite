import React, { Component } from "react";


 function OpenGrid(pos=1,grid="teste"){
  var gridpos= ["auto", "auto", "auto","auto", "auto"];
  gridpos[pos]= "50%";
  console.log(gridpos.join(" "))
  document.getElementById(`${grid}`).style.gridTemplateRows = gridpos.join(" ");
  document.getElementById(`${pos}-image`).style.maxWidth = "30%";
};


function CloseGrid(pos=1,grid="teste"){
 var gridpos= ["auto", "auto", "auto","auto", "auto"];
 document.getElementById(`${grid}`).style.gridTemplateRows = gridpos.join(" ");
 document.getElementById(`${pos}-image`).style.maxWidth = "10%";

};





export class GridMaker extends Component{


render(){
  const {classN,items}=this.props;

   console.log(items)
  return(
  <div className={`${classN}`} id= "teste">
    {items.map((item,i) => {
      console.log(item)
      return(
        <div className="projectFols"  onClick={()=>OpenGrid(i,"teste")}>
        <img src="/figs/logoescritosemfundo.png" id={`${i}-image`} /><h3>{item.name}</h3>
        </div>
      )
      }
      )
    }


    }
  </div>
)};
}
