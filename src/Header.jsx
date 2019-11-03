import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import MetaTags from "react-meta-tags";
import "./Header.css";
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper">
        <MetaTags>
          <title>Admin Dashboard</title>
          <meta
            id="hkjh"
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </MetaTags>
        <div className="header">
          <div className="logo">
            <img src={require("./logo-cse.png")} alt="nlkn" />
          </div>
          <div className="title">
            <h5>DASHBOARD</h5>
          </div>
          <div className="header-right">
            <div className="img">
              <img
                src={require("./tn1.jpg")}
                className="rounded-circle image"
                alt="nlkn"
              />
            </div>
            <div className="name-class">
              <p className="name">Bilal Benoudjit</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
