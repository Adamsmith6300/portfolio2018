import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
  render(){
    return (
      <div>
        <h1>Adam Portfolio</h1>
        {this.props.children}
        <Link to="/">Projects</Link>
        <Link to="skills">Skills</Link>
        <Link to="about">About</Link>
      </div>
    );
  }
}
