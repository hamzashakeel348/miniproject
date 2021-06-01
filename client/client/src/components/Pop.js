import React from "react";
import { GrClose } from "react-icons/gr";
import "../stylesheets/Pop.css";
import Poptwo from "./Popup";
import axios from "axios";

//Styled Components for Body Tags
const mystyle = {
  height: "7em",
};
const updated = {
  width: "25%",
};
var dateFormat = require("dateformat");

let title,
  description,
  delDate,
  projectCost,
  difference = 0;
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
    this.state = {
      check: false,
      number: 0,
      cost: 0,
    };
  }
  handleChange = (num) =>
    this.setState({ number: num * 0.2, cost: num * 1 + num * 0.2 });

  handleClick = () => {
    this.setState({ check: true });
  };
  handleSubmit = (event) => {
    getvalues();
    let isInvalidForm = false;
    let spl = delDate.split("/");
    const currentDate = new Date();
    let curr = dateFormat(currentDate, "dd/mm/yyyy");
    curr = curr.split("/");

    if (title === "" || title.length > 80) {
      alert("Invalid Title");
      isInvalidForm = true;
    } else if (description === "" || description.length > 200) {
      alert("Invalid Description");
      isInvalidForm = true;
    } else if (
      isNaN(+projectCost) ||
      +projectCost > 1000 ||
      +projectCost < 100 ||
      projectCost === ""
    ) {
      alert("Invalid Cost");

      isInvalidForm = true;
    }
    if (spl[2] < curr[2]) {
      isInvalidForm = true;
      console.log("yes less");
    } else if (spl[1] < curr[1]) {
      isInvalidForm = true;
      console.log("month less");
    } else if (spl[0] <= curr[0] && spl[1] < curr[1] && spl[2] < curr[2]) {
      isInvalidForm = true;
      console.log("day less");
    } else {
      if (spl[2] >= curr[2] && spl[1] >= curr[1] && spl[0] > curr[0]) {
        difference =
          (curr[2] - spl[2]) * 365 +
          (spl[1] - curr[1]) * 30 +
          (spl[0] - curr[0]);
        console.log(difference);
      }
    }
    if (isInvalidForm) {
      return -1;
    } else {
      this.handleClick();
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

  close = () => {
    document.getElementById("popup").style.display = "none";
  };

  render() {
    if (this.state.check) {
      return (
        <div>
          <Poptwo></Poptwo>
        </div>
      );
    } else {
      return (
        <div className="pop" data-testid="pop1">
          <div id="popup">
            <span className="Heading">
              <h2>Create project</h2>

              <button onClick={this.close} data-testid="Close">
                <GrClose />
              </button>
              <hr></hr>
            </span>
            <input
              id="title"
              type="text"
              className="input"
              placeholder="Title"
              required
            />
            <input
              type="text"
              style={mystyle}
              className="input"
              id="Description"
              required
              placeholder="Description"
            />
            <input
              className="input"
              type="text"
              placeholder="&#xf342; Upload Attachment"
            />
            <input
              type="text"
              className="input"
              id="Delivery"
              placeholder="Delivery Date in DD/MM/YYYY Format"
            />
            <input
              type="text"
              className="input"
              id="Cost"
              required
              onChange={(e) => this.handleChange(e.target.value)}
              placeholder="Project Cost"
            />{" "}
            <br></br>
            <span className="Fee_Details">
              <p id="Details_Main">CleverX transaction fees(20%)</p>
              <p data-testid="Cell1">${this.state.number}</p>
            </span>
            <span className="Fee_Details">
              <p id="Details_Main">Total Amount in $USD</p>
              <p data-testid="Cell2" style={updated}>
                ${this.state.cost}
              </p>
              <br></br>
            </span>
            <button
              className="button"
              data-testid="Project-Button"
              onClick={this.handleSubmit}
            >
              Create Project
            </button>
          </div>
        </div>
      );
    }
  }
}

export default Pop;
