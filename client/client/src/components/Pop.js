import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import "../stylesheets/Pop.css";
import Servicespop from "./Popup";
import moment from "moment";
import axios from "axios";
const mystyle = {
  height: "7em",
};
const updated = {
  width: "25%",
};
let title,
  description,
  delDate,
  projectCost,
  IsTitleInValid,
  IsdescriptionInValid;
const getvalues = () => {
  title = document.getElementById("title").value;
  projectCost = document.getElementById("Cost").value;
  description = document.getElementById("Description").value;
  delDate = document.getElementById("Delivery").value;
  console.log(title, projectCost, description, delDate);
};

class Pop extends React.Component {
  constructor() {
    super();
  }

  handleSubmit = (event) => {
    getvalues();
    let isInvalidForm = false;
    const currentDate = moment().format("DD.MM.YYYY ");
    const dateIsValid = moment(delDate, "DD.MM.YYYY", true).isValid();
    let check = moment(currentDate).isAfter(delDate);
    if (title.length > 80 || title === "") {
      alert("Invalid Title");
      isInvalidForm = true;
    } else if (description.length > 200 || description === "") {
      alert("Invalid Description");
      isInvalidForm = true;
    } else if (!dateIsValid || !check) {
      alert("Invalid format Or Deadline should be in future");
      // setIsDelDateInValid(true);
      isInvalidForm = true;
    } else if (
      isNaN(+projectCost) ||
      +projectCost < 100 ||
      +projectCost > 1000 ||
      projectCost === ""
    ) {
      // setIsProjectCostInvalid(true);
      alert("Invalid Cost");

      isInvalidForm = true;
    }
    if (isInvalidForm) {
      return -1;
    } else {
      axios
        .post("http://localhost:3000/project", {
          name: title,
          summary: description,
          date: delDate,
          cost: projectCost,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      return true;
    }
  };

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
          {/* <form method="post" action="/project" onSubmit={this.handleSubmit}> */}
          <input
            id="title"
            type="text"
            className="input"
            placeholder="Title"
            value={title}
          />
          <input
            type="text"
            style={mystyle}
            className="input"
            id="Description"
            value={description}
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
            value={delDate}
          />
          <input
            type="text"
            className="input"
            id="Cost"
            placeholder="Project Cost"
            value={projectCost}
          />{" "}
          <br></br>
          <span className="Fee_Details">
            <p id="Details_Main">CleverX transaction fees(20%)</p>
            <p>$0.00</p>
          </span>
          <span className="Fee_Details">
            <p id="Details_Main">Total Amount in $USD</p>
            <p style={updated}>{projectCost * 0.2}</p>
            <br></br>
          </span>
          <button className="button" onClick={this.handleSubmit}>
            Create Project
          </button>
          {/* </form> */}
        </div>

        <span id="MainButton" onClick={this.toggle}>
          {this.props.head1}
        </span>
      </div>
    );
  }
}

export default Pop;
