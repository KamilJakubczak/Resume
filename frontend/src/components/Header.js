import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          {/* <nav className="nav navbar-expand-lg fixed-top">
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
              <a href="#tech" className="p-2">
                Technologies
              </a>
              <a href="#education" className="p-2">
                Education
              </a>
              <a href="#projects" className="p-2">
                Projects
              </a>
            </div>
          </nav> */}

          <nav class="navbar navbar-expand-lg navbar-dark">
            <div>
              <h3 className=" logo">Kamil Jakubczak</h3>
              <div className="logo line"></div>
            </div>
            <a
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div class="navbar-toggler-icon"></div>
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a href="#about" className="p-2">
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" className="p-2">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#tech" className="p-2">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#education" className="p-2">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#projects" className="p-2">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
