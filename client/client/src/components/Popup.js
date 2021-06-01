import React, { useState } from "react";
import Popthree from "./pop3";

import { GrClose } from "react-icons/gr";
import "../stylesheets/Page2.css";
import { BiArrowBack } from "react-icons/bi";
import Pop from "./Pop";
import { GoVerified } from "react-icons/go";

const styles = {
  display: "inline-block",
  color: "green",
};

class Servicespop extends React.Component {
  constructor() {
    super();
    this.state = {
      check: false,
      second_check: false,
    };
  }
  handleClick = () => {
    this.setState({ check: true });
  };
  handleCheck = () => {
    this.setState({ second_check: true });
  };
  clo = () => {
    document.getElementById("pop").style.display = "none";
    document.getElementById("Button").style.display = "block";
  };
  check1 = () => {
    document.getElementById("cell1").style.border = "1.5px solid #3a52a1";
    document.getElementById("cell2").style.border = "1.5px solid #e0e0e0";
    document.getElementById("Ver1").style.visibility = "visible";
    document.getElementById("Ver2").style.visibility = "hidden";
  };
  check2 = () => {
    document.getElementById("Ver1").style.visibility = "hidden";
    document.getElementById("Ver2").style.visibility = "visible";
    document.getElementById("cell1").style.border = "1.5px solid #e0e0e0";
    document.getElementById("cell2").style.border = "1.5px solid #3a52a1";
  };

  render() {
    if (this.state.check) {
      return (
        <div>
          <Pop head=" "></Pop>
        </div>
      );
    } else if (this.state.second_check) {
      return (
        <div>
          <Popthree></Popthree>
        </div>
      );
    } else {
      return (
        <div>
          <div id="pop">
            <span className="Heading">
              <BiArrowBack id="arrow" onClick={this.handleClick} />
              <h2>Choose card</h2>

              <button onClick={this.clo}>
                <GrClose />
              </button>
              <hr></hr>
            </span>

            <span id="cell1" onClick={this.check1}>
              <GoVerified id="Ver1" style={styles} />
              <span>
                <img src="https://www.dropbox.com/s/7f5dl373c9hd1ew/MainVisaBlue.png?raw=1" />
              </span>
              <p>Visa credit card ending with 2345</p>
            </span>
            <span id="cell2" onClick={this.check2}>
              <GoVerified id="Ver2" style={styles} />
              <span>
                <img src="https://www.dropbox.com/s/7f5dl373c9hd1ew/MainVisaBlue.png?raw=1" />
              </span>
              <p>Visa credit card ending with 7645</p>
            </span>

            <span id="cell2">
              <h5>+ Add card</h5>
            </span>
            <br></br>

            <button className="button" onClick={this.handleCheck}>
              Pay
            </button>
          </div>
        </div>
      );
    }
  }
}

export default Servicespop;
