import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <nav className="nav navbar-expand-lg fixed-top">
            <div className="logo-wrap">
              <h3 className=" logo">Kamil Jakubczak</h3>
              <div className="logo line"></div>
            </div>
            <div className="ml-md-auto pr-3 mr-3">
              <a href="#about" className="p-2">
                About
              </a>
              <a href="#experience" className="p-2">
                Experience
              </a>
              <a href="#technologies" className="p-2">
                Technologies
              </a>
              <a href="#education" className="p-2">
                Education
              </a>
              <a href="#projects" className="p-2">
                Projects
              </a>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
