import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Sidebar.css";
import Membres from "./Membres";
import Events from "./Events";
import "./tn1.jpg";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import Home from "./Home";
//import "font-awesome/css/font-awesome.min.css";
import Header from "./Header";

class SideBar extends Component {
  state = {};
  render() {
    return (
      <div className="main">
        <div className="container-fluid">
          <div className="row links">
            <>
              <ul>
                <li>
                  <div className="col-sm-12 icon-count">
                    <span className="icon-menu">
                      <i className="fa fa-home" />
                    </span>
                  </div>

                  <NavLink to="/">
                    <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <div className="col-sm-12 icon-cont">
                    <span className="icon-menu">
                      <i className="fa fa-user" />
                    </span>
                  </div>

                  <NavLink to="/members">
                    <span>Membres</span>
                  </NavLink>
                </li>
                <li>
                  <div className="col-sm-12 icon-cont">
                    <span className="icon-menu">
                      <i className="fa fa-calendar" />
                    </span>
                  </div>

                  <NavLink to="/events">
                    <span>Events</span>
                  </NavLink>
                </li>
              </ul>
            </>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
