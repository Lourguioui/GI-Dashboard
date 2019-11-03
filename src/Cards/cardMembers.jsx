import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./cardMembers.css";

class CardMembers extends Component {
  state = {
    members: 120
  };
  render() {
    document.getElementsByTagName("META")[2].name = "viewport";
    document.getElementsByTagName("META")[2].content =
      "width=device-width, initial-scale=1";
    return (
      <div className="card-main">
        <div className="container">
          <div className="row">
            <div className="crd-cont col-lg-12">
              <div className="icon-container">
                <i className="fa fa-address-card"> </i>
              </div>
              <div className="col-lg">
                <p className="title">
                  {" "}
                  Membres <h1>{this.state.members}</h1>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CardMembers;
