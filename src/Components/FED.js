import React, { Component } from "react";

class FED extends Component {
  render() {
    return (
      <section id="resume">
        <div className="row work">
          <div className="twelve columns">
            <h3>Feed Every Devil</h3>
            <p>Skills used: Ruby on Rails, RSpec, jQuery, JavaScript, HTML/CSS, Bootstrap, Transact REST API</p>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Design</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <h4> Here is the design process my team went through: </h4>
            <p>Initially, it was very overwhelming to try and come up with a design from scratch for the Feed Every Devil website, especially since there were no policies implemented at the time. The FED developer team turned to the project lead for advice, and after a week of discussion, the tech stack was decided to be Ruby on Rails web framework using JavaScript, HTML/CSS in the frontend alongside Bootstrap UI library and PostgreSQL as the backend database. While deliberating over the tech stack, the team also began drawing up wireframes based on the official Duke style requirements. </p>
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Development</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <h4> Here is the design process my team went through: </h4>
            <p>After initial planning, my team split up work on the first iteration of the application by assigning pages to a majority of the team while a teammate and I worked on the backend. One of the largest obstacles in backend development was figuring out how to use the Duke Transact API that handles food point transactions; the API had little documentation and used XML but after reaching out to other project leads my teammate and I were able to implement the API using the Nokogiri gem.  </p>
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Final Product</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <h4> Here is the final product that my team created by the end of the internship: </h4>
            <p>Initially, it was very overwhelming to try and come up with a design from scratch for the Feed Every Devil website, especially since there were no policies implemented at the time. The FED developer team turned to the project lead for advice, and after a week of discussion, the tech stack was decided to be Ruby on Rails web framework using JavaScript, HTML/CSS in the frontend alongside Bootstrap UI library and PostgreSQL as the backend database. While deliberating over the tech stack, the team also began drawing up wireframes based on the official Duke style requirements. </p>
          </div>
        </div>
      </section>
    );
  }
}

export default FED;
