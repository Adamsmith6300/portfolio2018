import React from "react";
import MainMenu from "../components/Menu";

export default class Layout extends React.Component {
  render(){
    return (
      <div>
        <MainMenu/>
        {this.props.children}
      </div>
    );
  }
}
