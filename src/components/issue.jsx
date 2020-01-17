import React, { Component } from "react";

class Issue extends Component {
  render() {
    const { issue } = this.props;
    return (
      <div className="issue-card" key={issue.id}>
        <div className="user-info">
          <img
            className="card-image"
            src={issue.user.avatar_url}
            alt="user"
          ></img>
          <p className="username">{issue.user.login}</p>
        </div>
        <div className="card-content">
          <span>
            <b>#</b> {issue.number}{" "}
          </span>
          <span className="card-title">{issue.title}</span>
          <br />
          <br />
          {/* <span>Comment</span> */}
          <div className="card-body">{issue.body}</div>
          <div className="card-body">
            Check out issue <a href={issue.html_url}> here</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Issue;
