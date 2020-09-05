import React, { Component, Fragment } from "react";
import "./About.css";
class About extends Component {
  state = {
    details: [],
    socialMedia: [],
  };

  componentDidMount() {
    fetch("/cv/info/", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((res) => this.setState({ details: res }))
      .catch((error) => console.log(error));

    fetch("/cv/social-media/", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((res) => this.setState({ socialMedia: res }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <Fragment>
        <h2 id="about">About</h2>
        <hr className="line-title"></hr>
        <div className="about-container">
          {this.state.details.map((detail) => {
            return (
              <div>
                <div className="about-content-box">
                  <div className="img-box">
                    <img src={detail.icon} />
                  </div>
                  <div className="text-box">
                    {detail.description}
                    <div className="contact-box">
                      <div className="find-me-on">
                        <h4>Find me on</h4>
                      </div>
                      {this.state.socialMedia.map((media) => {
                        return (
                          <div className="contact-point">
                            <a href={media.link} target="_blank">
                              <h3>
                                <i className={media.icon_code}></i>
                              </h3>
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
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
