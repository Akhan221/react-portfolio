import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;

      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
              <span>&bull;</span>
              <em className="date">{education.gpa}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p className="work-description">{work.description}</p>
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <h3>{skillmessage} </h3>
            <span className="main-skills">
              Python, Ruby, HTML/CSS/JavaScript, Ruby on Rails, PostgreSQL, React, Bootstrap, Windows/Mac Troubleshooting
            </span>

            <div className="extra-skills">
              <h4>I've also worked with these tools in the past:</h4>
              <div className="six columns">
                <h5>Frontend</h5>
                <ul className="text-left">
                  <li>jQuery</li>
                  <li>React-Router</li>
                  <li>Semantic UI</li>
                  <li>JSON</li>
                  <li>SASS</li>
                  <li>Figma</li>
                </ul>
              </div>

              <div className="six columns">
                <h5>Backend</h5>

                <ul className="text-left">
                  <li>Java</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>C</li>
                  <li>REST APIs</li>
                  <li>Ubuntu</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
