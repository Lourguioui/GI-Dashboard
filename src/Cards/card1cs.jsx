import React, { Component } from "react";
import "./card1cs.css";
import "bootstrap/dist/css/bootstrap.css";

class Card1cs extends Component {
  state = { members1cs: 36 };
  render() {
    document.getElementsByTagName("META")[2].name = "viewport";
    document.getElementsByTagName("META")[2].content =
      "width=device-width, initial-scale=1";
    return (
      <div className="card-main3">
        <div className="container">
          <div className="row">
            <div className="crd-cont3 col-lg-12">
              <div className="icon-container3">
                <i className="fa fa-user-plus"> </i>
              </div>
              <div className="col-lg">
                <p className="title3">
                  {" "}
                  1 CS <h1>{this.state.members1cs}</h1>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card1cs;
