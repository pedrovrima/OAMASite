import ImageGallery from 'react-image-gallery';
import React, { Component } from "react";

class Anilhamento extends Component {

  render() {

    const images = [
      {
        original: '/figs/anilhamento/BASCUL1D.JPG.webp',
        thumbnail: '/figs/anilhamento/BASCUL1D.JPG.webp',
      },
      {
        original: '/figs/anilhamento/BASCUL1I.JPG.webp',
        thumbnail: '/figs/anilhamento/BASCUL1I.JPG.webp',
      },

    ]

    return (

      <div className="imgroulette">

      <ImageGallery items={images} />
      </div>
    );
  }

}

export default Anilhamento;
