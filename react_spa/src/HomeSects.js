import React, { Component } from "react";





export function DeskEntry  (sect) {

return(
<div>
<img src={sect.sect.fig}/>
<h1>{sect.sect.title}</h1>
<span>{sect.sect.text}</span>
</div>
)};

export var sessoes= {id:"entry" ,
title: "Bem-vindo ao portal do Observatório de Aves da Mantiqueira",
fig:"/figs/logoescritosemfundo.png",
text: "O Observatório de Aves da Mantiqueira é uma organização científica independente voltada para a pesquisa e conservação de aves na região da Serra da Mantiqueira"};
