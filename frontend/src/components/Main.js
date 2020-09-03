import React, { Component } from "react";
import About from "./sub-components/About";
import Experience from "./sub-components/Experience";
import Education from "./sub-components/Education";
import Technologies from "./sub-components/Technologies";
import Projects from "./sub-components/Projects";
class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <main role="main" className="inner cover">
          <div className="main">
            <About />
            <Experience />
            <Technologies />
            <Education />
            <Projects />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Main;
