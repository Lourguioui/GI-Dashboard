import React, { Component } from "react";
import { Bar, Line, Pie, Radar, Doughnut } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.css";
import "./chartBar.css";

class Chart1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: ["2017", "2018", "2019", "2020"],
        datasets: [
          {
            label: "Subscribtions",
            backgroundColor: "rgba(255,0,255,0.4)",
            data: ["30", "28", "32", "45"]
          },
          {
            label: "Integrations",
            backgroundColor: "rgba(0,255,255,0.7)",
            data: ["10", "11", "8", "40"]
          }
        ]
      }
    };
  }
  setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 500, 350);
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.7, "rgba(255,2,23,0.8)");
    return gradient;
  };

  getChartData = canvas => {
    const data = this.state.data;
    if (data.datasets) {
      let colors = ["rgba(255,0,255,0.4)", "rgba(0,255,255,0.7)"];
      data.datasets.forEach((set, i) => {
        set.backgroundColor = this.setGradientColor(canvas, colors[i]);
        set.borderColor = "white";
        set.borderWidth = 2;
      });
    }
    return data;
  };

  render() {
    return (
      <div className="mainChart1">
        <div className="Line">
          <Bar options={{}} data={this.getChartData} />{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Chart1;
