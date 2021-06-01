import React from "react";
import "../stylesheets/Page2.css";
import Popthree from "./pop3";
import Pop from "./Pop";
import { BiArrowBack } from "react-icons/bi";
import { GoVerified } from "react-icons/go";
import { GrClose } from "react-icons/gr";

//Styled Components for Body Tags
const styles = {
  display: "inline-block",
  color: "green",
};

class Poptwo extends React.Component {
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
  };
  check1 = () => {
    document.getElementById("cell1").style.border = "1.5px solid #2955e4";
    document.getElementById("cell2").style.border = "1.5px solid #e0e0e0";
    document.getElementById("Ver1").style.visibility = "visible";
    document.getElementById("Ver2").style.visibility = "hidden";
  };
  check2 = () => {
    document.getElementById("Ver1").style.visibility = "hidden";
    document.getElementById("Ver2").style.visibility = "visible";
    document.getElementById("cell1").style.border = "1.5px solid #e0e0e0";
    document.getElementById("cell2").style.border = "1.5px solid #2955e4";
  };

  render() {
    // checking for the back arrow rendering
    if (this.state.check) {
      return (
        <div>
          <Pop head=" "></Pop>
        </div>
      );
    }
    //Check for the Forward Page Rendering
    else if (this.state.second_check) {
      return (
        <div>
          <Popthree></Popthree>
        </div>
      );
    } else {
      return (
        <div>
          <div id="pop" data-testid="pop2">
            <span className="Heading">
              {/* Backarrow button to move back to first page */}
              <BiArrowBack
                id="arrow"
                onClick={this.handleClick}
                data-testid="back"
              />
              <h2>Choose card</h2>
              {/* exit button to exit the popup */}
              <button onClick={this.clo} data-testid="exit">
                <GrClose />
              </button>
              <hr></hr>
            </span>
            {/* First Card Option */}
            <span id="cell1" onClick={this.check1} data-testid="Cell1">
              <GoVerified id="Ver1" style={styles} />
              <span>
                <img
                  src="https://www.dropbox.com/s/7f5dl373c9hd1ew/MainVisaBlue.png?raw=1"
                  alt="Error"
                />
              </span>
              <p>Visa credit card ending with 2345</p>
            </span>
            {/* Second Card option */}
            <span id="cell2" onClick={this.check2} data-testid="Cell2">
              <GoVerified id="Ver2" style={styles} />
              <span>
                <img
                  src="https://www.dropbox.com/s/7f5dl373c9hd1ew/MainVisaBlue.png?raw=1"
                  alt="Error"
                />
              </span>
              <p>Visa credit card ending with 7645</p>
            </span>
            {/* Dummy Add Card Button */}
            <span id="cell2">
              <h5>+ Add card</h5>
            </span>
            {/* Payment Button to do payment process but here it do conditional rendering */}
            <button
              className="button"
              data-testid="Pay-Button"
              onClick={this.handleCheck}
            >
              Pay
            </button>
          </div>
        </div>
      );
    }
  }
}

export default Poptwo;
