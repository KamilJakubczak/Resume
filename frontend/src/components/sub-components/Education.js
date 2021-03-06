import React, { Component } from "react";
import "./Education.css";

class Education extends Component {
  state = {
    details: [],
  };

  componentDidMount() {
    fetch("/cv/educations/", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((res) => this.setState({ details: res }))
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <React.Fragment>
        <h2 id="education">Education</h2>
        <hr className="line-title"></hr>
        <div className="education-container">
          {this.state.details.map((detail) => {
            return (
              <div
                key={"education-" + detail.id}
                id="id-{detail.order}"
                className="box"
              >
                <div className="content-box">
                  <h2>{detail.school_name}</h2>
                  <h4>{detail.course_name}</h4>
                  <p>{detail.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Education;
