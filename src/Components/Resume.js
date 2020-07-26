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
            <p>{skillmessage}</p>

            <div id="main-skills">
              <ul>
                <li>Python</li>
                <li>Ruby</li>
                <li>Ruby on Rails</li>
                <li>React</li>
                <li>HTML/CSS</li>
                <li>Bootstrap UI</li>
                <li>Computer Hardware</li>
                <li>RESTful APIs</li>
              </ul>
            </div>

            <div id="skills">
              <ul>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Java</li>
                <li>Node.js</li>
                <li>React-Router</li>
                <li>C</li>
                <li>Ruby</li>
                <li>PostgreSQL</li>
                <li>Semantic UI</li>
                <li>Ubuntu</li>
                <li>JSON</li>
                <li>Windows/MacOS Troubleshooting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
