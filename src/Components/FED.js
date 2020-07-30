import React, { Component } from "react";

class FED extends Component {
  render() {
    return (
      <section id="resume">
        <div className="row work">
          <div className="twelve columns">
            <h3>Feed Every Devil</h3>
            <p>
              Skills used: Ruby on Rails, RSpec, jQuery, JavaScript, HTML/CSS,
              Bootstrap, Transact REST API
            </p>

            <a href="https://dfp-test.cloud.duke.edu" target="_blank">
              <h6>
                <i className="fa fa-link"></i> Check out the project here
              </h6>
            </a>
          </div>
          <img className="header-pic" src="https://imgur.com/rrtJc8O.png" />
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Design</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <h4> Creating an application from scratch: </h4>
            <p>
              In order to combat food insecurity on Duke's campus, the Feed
              Every Devil (FED) team decided that a website allowing students to
              donate or request food points would be the most effective
              approach. However, after extensive research our team could not
              find any food insecurity programs similar to Duke's environment.
              Consequently, the FED team turned to the Duke Styles Guide for
              reference and decided that Bootstrap would alleviate design
              frustrations. During this initial design & research phase the team
              also explored options for the optimal tech stack to use for the
              application; the tech stack was decided to be the Ruby on Rails
              web framework using JavaScript, HTML/CSS in the frontend alongside
              the Bootstrap UI library and PostgreSQL as the backend database.
              While deliberating over the tech stack, the team also began
              drawing up wireframes based on the Duke Style Guide requirements,
              as well as creating multiple iterations of team logos.
            </p>
          </div>
          <div className="six columns">
            <img className="header-pic" src="https://imgur.com/MFBm4X5.png" />
          </div>
          <div className="six columns">
            <img className="header-pic" src="https://imgur.com/yQ75vRI.png" />
          </div>
        </div>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Development</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <h4> Responsive Web Design & Admin Interface: </h4>
            <p>
              Throughout the primary development phase of FED, I was responsible
              for responsive frontend design, implementing an admin interface,
              and guiding the team with daily standups and Git training. After
              the first iteration of webpages were complete, I went through
              every individual page and made it mobile-responsive using
              Bootstrap's grid and breakpoints system, as well as CSS media
              queries. The admin backend interface was created using Ruby and
              the Transact API which managed donation / request transactions as
              well as account balances. The Transact API was initially difficult
              to utilize due to limited documentation and the use of older
              syntax (XML); this issue was rectified using the Nokogiri Ruby gem
              that parses XML for data as specified by Ruby. In order to
              maintain development pace in the limited ten week deadline, our
              team held daily standups where I delegated tasks to team members
              and assisted with any technical difficulties as needed such as Git
              conflicts, merge requests.
            </p>
          </div>
          <div className="six columns">
            <img className="header-pic" src="https://imgur.com/oYY56Np.png" />
          </div>
          <div className="six columns">
            <img className="header-pic" src="https://imgur.com/4jSFESS.png" />
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Final Product</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <h4>Fully Functional Application Deployed:</h4>
            <p>
              By the end of the ten-week Codeplus program, the FED team deployed
              a web application capable of handling student donations & requests
              and storing all transaction records in a PostgreSQL database; all
              transactions worked directly with Duke's food point systems,
              allowing users to make donations with their own meal plan's food
              points. In the final week of the program, the FED team was
              selected out of ten teams to present the program to Duke's head IT
              Advisory Council where it received great praise and got approved
              for official deployment on Duke's campus.
            </p>
          </div>
          <div className="six columns">
            <img className="header-pic" src="https://imgur.com/hkJ9qHS.png" />
            <img className="header-pic" src="https://imgur.com/0ky8x2x.png" />
          </div>
          <div className="six columns">
            <img className="header-pic" src="https://imgur.com/Lggaz8b.png" />
          </div>
        </div>
      </section>
    );
  }
}

export default FED;
