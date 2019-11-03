import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./card2cs.css";
class Card2cs extends Component {
  state = {
    members2cs: 34
  };
  render() {
    document.getElementsByTagName("META")[2].name = "viewport";
    document.getElementsByTagName("META")[2].content =
      "width=device-width, initial-scale=1";
    return (
      <div className="card-main4">
        <div className="container">
          <div className="row">
            <div className="crd-cont4 col-lg-12">
              <div className="icon-container4">
                <i className="fa fa-user-plus"> </i>
              </div>
              <div className="col-lg">
                <p className="title4">
                  {" "}
                  2 CS <h1>{this.state.members2cs}</h1>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card2cs;
