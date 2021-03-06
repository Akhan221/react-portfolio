import React, { Component } from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import FED from "./Components/FED";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/fed" component={FED} />

            <Route
              path="/"
              render={(props) => (
                <div>
                  <Header data={this.state.resumeData.main} />
                  <About data={this.state.resumeData.main} />
                  <Resume data={this.state.resumeData.resume} />
                  <Portfolio data={this.state.resumeData.portfolio} />
                  <Footer data={this.state.resumeData.main} />
                </div>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
