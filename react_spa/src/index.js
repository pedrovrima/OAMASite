import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import Favicon from 'react-favicon';


import "./index.css";
ReactDOM.render(
  <div>
 <Favicon url="/figs/thebird.png"/>
  <Main/>
  </div>,
  document.getElementById("root")
);
