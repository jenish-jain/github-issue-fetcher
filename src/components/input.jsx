import React, { Component } from "react";
import Issue from "./issue";

class Input extends Component {
  state = {
    userName: "jenish-jain",
    repoName: "ledger",
    issues: []
  };

  getIssues = () => {
    fetch(
      " https://api.github.com/repos/" +
        this.state.userName +
        "/" +
        this.state.repoName +
        "/issues"
    )
      .then(response => response.json())
      .then(issues => this.setState({ issues: issues }));
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="input-container">
          <img
            className="logo"
            src="github-white.png"
            alt="github issues"
          ></img>
          <span>Your Github Name </span>
          <input
            className="text-input"
            type="text"
            name="userName"
            placeholder="jenish-jain"
            onChange={event => this.handleChange(event)}
          />
          <span>Your Github Repository Name </span>
          <input
            className="text-input"
            type="text"
            name="repoName"
            placeholder="ledger"
            onChange={event => this.handleChange(event)}
          />
          <button onClick={this.getIssues}>Fetch Issues</button>
        </div>
        <div className="issues-container">
          {this.state.issues.map(issue => (
            <Issue issue={issue} />
            // console.log(issue)
          ))}
        </div>
      </div>
    );
  }
}

export default Input;
