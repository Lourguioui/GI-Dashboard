import React, { Component } from "react";
import "./Home.css";
import Chart1 from "./Charts/chartBar.jsx";
import ChartLine from "./Charts/chartLine.jsx";
import CardMembers from "./Cards/cardMembers.jsx";
import Card1cp from "./Cards/card1cp.jsx";
import Card2cp from "./Cards/card2cp.jsx";
import Card1cs from "./Cards/card1cs.jsx";
import Card2cs from "./Cards/card2cs.jsx";
import MetaTags from "react-meta-tags";
import "bootstrap/dist/css/bootstrap.css";
//import "font-awesome/css/font-awesome.min.css";
class Home extends Component {
  state = {
    size: false
  };
  componentDidMount() {
    window.addEventListener(
      "resize",
      () => {
        this.setState({
          size: window.innerWidth < 1200
        });
      },
      false
    );
  }

  render() {
    const className = this.state.size ? "col-lg-6" : "col-xl-3";
    document.title = "Admin dashboard | Home";
    document.getElementsByTagName("META")[2].name = "viewport";
    document.getElementsByTagName("META")[2].content =
      "width=device-width, initial-scale=1";
    return (
      <div className="container-fluid home-main">
        <div className="row">
          <div className="col-sm-12 card-members">
            <div className="crd-mbr">
              <CardMembers />
            </div>
          </div>
          <div className={className}>
            <div className="crd-cp1">
              <Card1cp />
            </div>
          </div>
          <div className={className}>
            <div className="crd-cp2">
              <Card2cp />
            </div>
          </div>
          <div className={className}>
            <div className="crd-cs1">
              <Card1cs />
            </div>
          </div>
          <div className={className}>
            <div className="crd-cs2">
              <Card2cs />
            </div>
          </div>
          <div className="col-lg-6">

            <Chart1 className="chart" />

          </div>
          <div className="col-lg-6 chart1">
            <ChartLine />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
