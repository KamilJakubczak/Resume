import React, { Component, Fragment } from "react";
import "./Experience.css";

// import 'react-vertical-timeline-component/style.min.css';
class Experience extends Component {
  state = {
    details: [],
  };

  componentDidMount() {
    fetch("/cv/positions/", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((res) => this.setState({ details: res }))
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <Fragment>
        <h2 id="experience">Experience</h2>
        <hr className="line-title"></hr>
        <div className="timeline">
          <ul>
            {this.state.details.map((detail) => {
              return (
                <li>
                  <hr></hr>
                  <div className="timeline-content">
                    <h3>{detail.position_title}</h3>
                    <h3>{detail.company}</h3>
                    <pre>{detail.description}</pre>
                  </div>
                  <div className="time">
                    <h4>{detail.end_date}</h4>
                  </div>
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

export default Experience;
