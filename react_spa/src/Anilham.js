import ImageGallery from 'react-image-gallery';
import React, { Component } from "react";

class Anilhamento extends Component {

  render() {

    const images = [
      {
        original: '/figs/anilhamento/BASCUL1I.JPG.webp.png',
        thumbnail: '/figs/anilhamento/BASCUL1I.JPG.webp.png',
      },
{
      original: '/figs/anilhamento/MYIATR1G.JPG.webp.png',
      thumbnail: '/figs/anilhamento/MYIATR1G.JPG.webp.png',
},
{
      original: '/figs/anilhamento/PLAMYS1A.JPG.webp.png',
      thumbnail: '/figs/anilhamento/PLAMYS1A.JPG.webp.png',
},
{
      original: '/figs/anilhamento/PLAMYS1D.JPG.webp.png',
      thumbnail: '/figs/anilhamento/PLAMYS1D.JPG.webp.png',
},
{
      original: '/figs/anilhamento/PLAMYS1E.JPG.webp.png',
      thumbnail: '/figs/anilhamento/PLAMYS1E.JPG.webp.png',
},
{
      original: '/figs/anilhamento/PLAMYS1H.JPG.webp.png',
      thumbnail: '/figs/anilhamento/PLAMYS1H.JPG.webp.png',
},
{
      original: '/figs/anilhamento/TACCOR1C.JPG.webp.png',
      thumbnail: '/figs/anilhamento/TACCOR1C.JPG.webp.png',
},

{
      original: '/figs/anilhamento/TACCOR1J.JPG.webp.png',
      thumbnail: '/figs/anilhamento/TACCOR1J.JPG.webp.png',
},
{
      original: '/figs/anilhamento/THAFUR1B.JPG.webp.png',
      thumbnail: '/figs/anilhamento/THAFUR1B.JPG.webp.png',
},
{
      original: '/figs/anilhamento/THAFUR1G.JPG.webp.png',
      thumbnail: '/figs/anilhamento/THAFUR1G.JPG.webp.png',
},
{
      original: '/figs/anilhamento/TRIMEL3L.JPG.webp.png',
      thumbnail: '/figs/anilhamento/TRIMEL3F.JPG.webp.png',
},
{
      original: '/figs/anilhamento/TACCOR1L.JPG.webp.png',
      thumbnail: '/figs/anilhamento/TACCOR1L.JPG.webp.png',
},

{
  original: '/figs/anilhamento/BASCUL1D.JPG.webp.png',
  thumbnail: '/figs/anilhamento/BASCUL1D.JPG.webp.png',
},



    ]

    return (
      <div>
      <div className="effortSess">
      <div className="entrypic">

      <div className="text">
      <h1>Por que anilhamos aves?</h1>
      <p className="entrytext">
      O anilhamento de aves é o método pelo qual aves são capturadas e marcadas para estudos científicos. Veja abaixo como o OAMa usa essa técnica para promover a conservação de aves na serra da Mantiqueira.
      </p>
      </div>
      </div>

      </div>
      <div className="restcontainer">
      <h1 className="resth1">  Anilhamento de Aves
    </h1>
      <div className="aentrytext">
      <p>
      O anilhamento de aves é um método utilizado no mundo inteiro em estudos nos quais a identificação do indivíduo é necessária. Alguns exemplos são estimativas de tamanho populacional, de sobrevivência, estudos de movimentação, comportamento, variação intraespecífica, prevalência de doenças e parasitismo em aves, dentre outras.

    </p>
    </div>
    <div className="asecondtext">
    <p>
    No monitoramento com anilhamento do OAMa, usamos redes de neblina como forma de captura, e temos sempre em campo profissionais cuidadosamente treinados para realizar a captura, marcação, coleta de dados e liberação das aves de forma segura e ética. Priorizamos os princípios de segurança e bem-estar da equipe, segurança e bem-estar das aves e coleta de dados de qualidade.

    </p>
    </div>
</div>
      <div className="imgroulette">

      <ImageGallery items={images} />
      </div>

      <div className="restcontainer">

      <div className="asecondtext">
      <p>
      No OAMa coletamos as seguintes informações de cada indivíduo sempre que possível (considerando o bem-estar do indivíduo):
      </p>

      <ul>
      <li>Espécie</li>
<li>Idade (classificação a partir do sistema Wolfe-Ryder-Pyle)</li>
<li>Sexo</li>
<li>Protuberância cloacal</li>
<li>Placa de incubação</li>
<li>Gordura</li>
<li>Muda de corpo</li>
<li>Muda de asa</li>
<li>Dano de penas primárias</li>
<li>Penas juvenis retidas</li>
<li>Limite de muda</li>
<li>Tamanho de asa direita</li>
<li>Comprimento de tarsus direito</li>
<li>Bico (narina-ponta)</li>

      </ul>

    <p>

Coletamos também informações para controlar o esforço amostral e as condições climáticas em cada manhã de anilhamento. Informações coletadas incluem hora de abertura e fechamento das armadilhas de captura (redes de neblina), hora de cada revisão de redes, número de redes abertas, anilhadores e auxiliares presentes, temperatura, preciptação, vento e cobertura de núvens no início, meio e fim da amostragem e outras observações pertinentes.
</p>
<p>

Ficou com qualquer dúvida, quer fazer um comentário ou saber mais sobre nossos dados? Mande um e-mail pra contato@oama.eco.br.

    </p>
      </div>

</div>
      </div>

    );
  }

}



export default Anilhamento;
