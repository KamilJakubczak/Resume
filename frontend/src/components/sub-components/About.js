import React, { Component, Fragment } from "react";
import "./About.css";
class About extends Component {
  state = {
    details: [],
  };

  componentDidMount() {
    fetch("/cv/info/", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((res) => this.setState({ details: res }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <Fragment>
        <h2 id="about">About me</h2>
        <hr className="line-title"></hr>
        <div className="about-container">
          {this.state.details.map((detail) => {
            return (
              <div>
                <div className="about-content-box">
                  <div className="img-box">
                    <img src={detail.icon} />
                  </div>
                  <div className="text-box">{detail.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default About;
