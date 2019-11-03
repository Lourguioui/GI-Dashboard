import React, { Component } from "react";
import "./card1cp.css";
import "bootstrap/dist/css/bootstrap.css";

class Card1cp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      membres1cp: 30
    };
  }

  render() {
    document.getElementsByTagName("META")[2].name = "viewport";
    document.getElementsByTagName("META")[2].content =
      "width=device-width, initial-scale=1";
    return (
      <div className="card-main1">
        <div className="container">
          <div className="row">
            <div className="crd-cont1 col-lg-12">
              <div className="icon-container1">
                <i className="fa fa-user-plus"> </i>
              </div>
              <div className="col-lg">
                <p className="title1">
                  {" "}
                  1 CP <h1>{this.state.membres1cp}</h1>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card1cp;
