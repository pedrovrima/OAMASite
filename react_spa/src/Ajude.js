import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import { Colab, PEquipe, Amigos } from "./equipe";


class Ajude extends Component {




  render() {



    return (
<div className="ajudesec">
      <div className="restcontainer">
      <h1 style={{"text-align":"center", "font-size":"4rem"}}>Ajude o OAMa</h1>
      <div  className="entrytext">
      <p>O OAMa é uma iniciativa sem fins lucrativos e independente, que só é viável graças à energia, dedicação e colaboração de pessoas que acreditam que, juntos, podemos fazer diferença.</p>
      </div>
      <div  className="secondtext">

<p>Toda doação feita para o OAMa é direcionada para a realização de nossos projetos de pesquisa e de educação. </p>
<p>Tornando-se um afiliado ou fazendo uma doação para o OAMa você está apoiando a conservação de aves e habitats brasileiros com base em pesquisas científicas. Sua participação será extremamente apreciada pelo OAMa, e nós nos comprometemos em transformar a sua colaboração em pesquisa, conhecimento e conservação!</p>
    </div>
    </div>
    <div className="donationgrid">
    <div className="restcontainer">
    <h1>Quero me Associar</h1>
    <p>Ao se tornar um associado OAMa você está apoiando e fortalecendo nossas atividades mensalmente. Associados são extremamente importantes no nosso modelo de organização independente. Com a sua colaboração regular nós podemos planejar o próximo passo com antecedência, e focar nossos esforços na realização de pesquisa científica de excelência.</p>
    <form action="https://www.paypal.com/cgi-bin/webscr" method="get" target="_top">
    <input type="hidden" name="cmd" value="_s-xclick"/>
    <input type="hidden" name="hosted_button_id" value="MJUN3QTEW56DY"/>
    <table>
    <tr><td><input type="hidden" name="on0" value="Opções de pagamento"/>Opções de pagamento</td></tr><tr><td><select name="os0">
    	<option value="Canario">Canario : R$15,00 BRL - mensalmente</option>
    	<option value="Ticotico">Ticotico : R$30,00 BRL - mensalmente</option>
    	<option value="Sabia">Sabia : R$60,00 BRL - mensalmente</option>
    	<option value="Japu">Japu : R$120,00 BRL - mensalmente</option>
    	<option value="Aguia">Aguia : R$240,00 BRL - mensalmente</option>
    	<option value="Saira">Saira : R$360,00 BRL - mensalmente</option>
    </select> </td></tr>
    </table>
    <input type="hidden" name="currency_code" value="BRL"/>
    <input type="image" src="https://www.paypalobjects.com/pt_BR/i/btn/btn_subscribe_LG.gif" border="0" name="submit" alt="PayPal - A maneira fácil e segura de enviar pagamentos online!"/>
    <img alt="" border="0" src="https://www.paypalobjects.com/pt_BR/i/scr/pixel.gif" width="1" height="1"/>
    </form>

    </div>

    <div className="restcontainer">
    <h1>Doação Única</h1>
    <p>Nem sempre estamos naquela fase de vida em que sabemos o que será do próximo mês, né? A gente do OAMa entende! Neste caso, você pode também colaborar com a realização de nossos projetos com uma doação única, e que você escolhe o quanto e quando. Através da sua doação você está somando com a nossa energia e dedicação para que possamos levar nossos projetos adiante.</p>
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="WFVJ7JENLY856" />
<input type="image" src="https://www.paypalobjects.com/pt_BR/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/pt_BR/i/scr/pixel.gif" width="1" height="1"/>
</form>
    </div>

    </div>
</div>
        );
  }
}


export default Ajude;
