import React, { Component } from "react";

class FED extends Component {
  render() {
    return (
      <section id="resume">
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <h3>Feed Every Devil</h3>
            <p className="info">
              Head Developer
              <span>&bull;</span> <em className="date">2020 - Present</em>
            </p>
            <p className="work-description">A Code+ Program project</p>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <h3> Here are the skills I used in this project: </h3>
            <span className="main-skills">
              Python, Ruby on Rails, React, HTML5/CSS3, Bootstrap, Windows/Mac
              Troubleshooting, RESTful APIs
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default FED;
