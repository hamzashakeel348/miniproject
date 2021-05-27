import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import "../stylesheets/Pop.css";
let title, description, delivery, cost;
const mystyle = {
  height: "7em",
};
const updated = {
  width: "8em",
};
const Pass = () => {
  title = document.getElementById("title").value;
  cost = document.getElementById("Cost").value;
  description = document.getElementById("Description").value;
  delivery = document.getElementById("Delivery").value;
  console.log(title, cost, delivery, description);
};
class Pop extends React.Component {
  constructor() {
    super();
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

            <button onClick={this.close}>
              <GrClose />
            </button>
            <hr></hr>
          </span>
          <input id="title" type="text" className="input" placeholder="Title" />
          <input
            type="text"
            style={mystyle}
            className="input"
            id="Description"
            placeholder="Description"
          />
          <input
            className="input"
            type="text"
            placeholder="Upload attachment"
          />
          <input
            type="text"
            className="input"
            id="Delivery"
            placeholder="Delivery Date"
          />
          <input
            type="text"
            className="input"
            id="Cost"
            placeholder="Project Cost"
          />{" "}
          <br></br>
          <span className="Fee_Details">
            <p id="Details_Main">CleverX transaction fees(20%)</p>
            <p>$0.00</p>
          </span>
          <span className="Fee_Details">
            <p id="Details_Main">Total Amount in $USD</p>
            <p style={updated}>$0.00</p>
            <br></br>
          </span>
          <button className="button">Create Project</button>
        </div>
        <span id="MainButton" onClick={this.toggle}>
          {this.props.head1}
        </span>
      </div>
    );
  }
}

export default Pop;
