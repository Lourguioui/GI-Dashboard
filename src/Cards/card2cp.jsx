import React, { Component } from "react";
import "./card2cp.css";
import "bootstrap/dist/css/bootstrap.css";

class Card2cp extends Component {
  state = {
    members2cp: 24,
    size: false
  };
  render() {
    document.getElementsByTagName("META")[2].name = "viewport";
    document.getElementsByTagName("META")[2].content =
      "width=device-width, initial-scale=1";
    return (
      <div className="card-main2">
        <div className="container">
          <div className="row">
            <div className="crd-cont2 col-lg-12">
              <div className="icon-container2">
                <i className="fa fa-user-plus"> </i>
              </div>
              <div className="col-lg">
                <p className="title2">
                  {" "}
                  2 CP <h1>{this.state.members2cp}</h1>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card2cp;
