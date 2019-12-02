import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./side-bar";
import Header from "./Header";
import { NavLink, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import Home from "./Home";
import Membres from "./Membres";
import Events from "./Events";

class App extends Component {
  state = {
    size: '',
    clicked: false


  };
  constructor() {
    super();
  }
  componentDidMount() {
    window.addEventListener(
      "resize",
      () => {
        this.setState({
          size: window.innerWidth < 993
        });
      },
      false
    );
  }
  handleClick = () => {
    if (!this.state.clicked) {
      this.setState({ clicked: true });
    } else {
      this.setState({ clicked: false });
    }
  }
  render() {
    document.body.style =
      "background : rgb(23, 23, 43); padding-bottom : 100px; padding-top : 30px;";
    document.getElementsByTagName("META")[2].name = "viewport";
    document.getElementsByTagName("META")[2].content =
      "width=device-width, initial-scale=1";
    return (
      <div className="container-fluid">
        <div className="row">
          <Header />
          <div className="sidebar-btn">
            <button onClick={this.handleClick}><span><i className="fa fa-arrow-right" /></span></button>
          </div>
          <Router>
            <>

              {this.state.size ? (
                <div></div>
              )
                : (
                  <SideBar />
                )
              }
              {this.state.clicked ? (
                <SideBar />
              )
                : (
                  <div></div>
                )
              }


              <Route exact path="/" component={Home} />
              <Route path="/members" component={Membres} />
              <Route path="/events" component={Events} />
            </>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
