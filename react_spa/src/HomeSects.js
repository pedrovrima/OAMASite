import React, { Component } from "react";





export function DeskEntry  (sect) {

return(
<div>
<img src={sect.sect.fig}/>
<span><h1>{sect.sect.pretitle}</h1>
<h2>{sect.sect.oamtit}</h2>
</span>
<p>{sect.sect.text}</p>
</div>
)};

export var sessoes= {id:"entry" ,
pretitle: "Bem-vindo ao portal do",
oamtit: "Observatório de Aves da Mantiqueira",
fig:"/figs/shortlogo_hisres.webp",
text: "O Observatório de Aves da Mantiqueira é uma organização científica independente voltada para a pesquisa e conservação de aves na região da Serra da Mantiqueira."};
