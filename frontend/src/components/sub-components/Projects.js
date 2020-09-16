import React, { Component, Fragment } from "react";
import "./Experience.css";

// import 'react-vertical-timeline-component/style.min.css';
class Projects extends Component {
  state = {
    details: [],
  };

  componentDidMount() {
    fetch("/cv/projects/", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((res) => this.setState({ details: res }))
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <Fragment>
        <h2 id="projects">Projects</h2>
        <hr className="line-title"></hr>
        <div className="timeline">
          <ul>
            {this.state.details.map((detail) => {
              return (
                <li key={"project-" + detail.id}>
                  <hr></hr>
                  <div className="timeline-content">
                    <h3>{detail.title}</h3>
                    <a href={detail.title}>{detail.link}</a>
                    <pre>{detail.description}</pre>
                  </div>
                  <div className="time">{/* <h4>DATA!!!</h4> */}</div>
                  <hr></hr>
                </li>
              );
            })}
          </ul>
          <div className="timeline-after"></div>
        </div>
      </Fragment>
    );
  }
}

export default Projects;
