import React, { useState } from "react";
import axios from "axios";
import { GrClose } from "react-icons/gr";
import "../stylesheets/Page3.css";
import { BiArrowBack } from "react-icons/bi";
import Pop from "./Pop";
import moment from "moment";

import { AiOutlineCalendar } from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
var dateFormat = require("dateformat");

const style_component = {
  display: "inline-block",
};
const styles = {
  fontSize: "1.3em",
  paddingRight: "0.2em",
  color: "#3de78d",
};
let difference = 0;
class Popthree extends React.Component {
  constructor() {
    super();
    this.state = {
      delivery: 0,
      data: {},
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/project")
      .then((response) => {
        this.setState({ data: response.data });
        console.log(this.state.data.cost);
        this.calcDays(response.data.date);
      })
      .catch((err) => window.alert(err));
  }

  //   componentDidUpdate = () => {
  //     axios
  //       .get("http://localhost:3000/project")
  //       .then((response) => {
  //         data = response.data;
  //         console.log(data.cost);
  //         // setLoading(false);
  //         this.calcDays(response.data.date);
  //       })
  //       .catch((err) => window.alert(err));
  //   };
  calcDays = (registereDate) => {
    let spl = registereDate.split("/");
    const currentDate = new Date();
    let curr = dateFormat(currentDate, "dd/mm/yyyy");
    curr = curr.split("/");
    if (spl[2] >= curr[2] || spl[1] || curr[1] || spl[0] > curr[0]) {
      difference =
        (curr[2] - spl[2]) * 365 + (spl[1] - curr[1]) * 30 + (spl[0] - curr[0]);
      document.getElementById("del").innerHTML = difference + " day delivery";
    }
  };
  handleClick = () => {
    this.setState({ check: true });
  };

  clo = () => {
    document.getElementById("pop").style.display = "none";
    document.getElementById("Button").style.display = "block";
  };

  render() {
    if (this.state.check) {
      return (
        <div>
          <Pop head=" "></Pop>
        </div>
      );
    } else {
      return (
        <div>
          <div id="pop3">
            <span className="Heading_pop3">
              <BsFileEarmarkText style={styles} />
              <p>Your project request</p>
            </span>

            <div id="section2">
              <h4>I'll be your business expert</h4>
              <span>
                <h4>${this.state.data.cost}</h4>
                <p>
                  Total : ${+this.state.data.cost * 0.2 + +this.state.data.cost}{" "}
                </p>
                <p>(CleverX fee + 20%)</p>
              </span>
            </div>
            <div id="section3">
              <h5>
                Instead of the typical seamless color transitions that you see
                in gradient
              </h5>
              <span id="delivery_date">
                <AiOutlineCalendar style={style_component} />
                <p id="del">day delivery</p>
              </span>
              <button className="button" onClick={this.calcDays}>
                Pay
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Popthree;
