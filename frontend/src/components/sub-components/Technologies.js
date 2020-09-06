import React, { Component, Fragment } from "react";
import "./Technologies.css";

class Technologies extends Component {
  state = {
    details: [],
  };

  componentDidMount() {
    fetch("/cv/skills/", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((res) => this.setState({ details: res }))
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <Fragment>
        <h2 id="tech">Technologies</h2>
        <hr className="line-title"></hr>
        <div className="technologies-container">
          {this.state.details.map((detail) => {
            console.log(detail.order);
            return (
              <div
                key={detail.name}
                id={detail.order}
                className="technologies-card"
              >
                <div className="technologies-box">
                  <h1>
                    <i className={detail.icon}></i>
                  </h1>
                  <h4>{detail.name}</h4>
                  <hr></hr>
                  <hr></hr>
                  <pre>{detail.desc}</pre>
                </div>
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default Technologies;
