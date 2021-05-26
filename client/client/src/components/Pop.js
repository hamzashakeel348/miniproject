import React from "react";

import { AiFillCloseCircle } from "react-icons/ai";

import "../stylesheets/Pop.css";

class Pop extends React.Component {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
  }

  toggle = () => {
    document.getElementById("popup").style.display = "block";
    document.getElementById("MainButton").style.display = "none";
  };

  close = () => {
    document.getElementById("popup").style.display = "none";
    document.getElementById("MainButton").style.display = "block";
  };

  render() {
    return (
      <div className="pop">
        <div id="popup">
          <span className="Heading">
            <h2>Create Project</h2>
            <button onClick={this.close}>X</button>
          </span>
          <input type="text" />
        </div>
        <span id="MainButton" onClick={this.toggle}>
          {this.props.head1}
        </span>
      </div>
    );
  }
}

export default Pop;
