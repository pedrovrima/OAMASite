import React, { Component } from "react";

class Home extends Component {

  render() {
    function morenewsClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');

      document.getElementById("main").style.marginLeft = "-85em";
    }
    return (
      <div class="homecontainer">
      <div class="oqoama">
      <h2>HELLO</h2>
      <p>Cras facilisis urna ornare ex volutpat, et
      convallis erat elementum. Ut aliquam, ipsum vitae
      gravida suscipit, metus dui bibendum est, eget rhoncus nibh
      metus nec massa. Maecenas hendrerit laoreet augue
      nec molestie. Cum sociis natoque penatibus et magnis
      dis parturient montes, nascetur ridiculus mus.</p>

      <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>



    </div>

      <div class="effort2">
      <p>a</p>
      </div>
      <div class="effort">
      <p>a</p>
      </div>

      <div class="newstittle">
      <p>Novidades</p>
      </div>

      <div class="news">
      <p>Novidades</p>
      </div>

      <div class="morenews" onClick={morenewsClick}>
      <p>>></p>
      </div>
      </div>

        );
  }
}

export default Home;
