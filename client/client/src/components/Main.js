import React from "react";
import Pop from "./Pop";
import "../stylesheets/Main.css";
import Popthree from "./pop3";
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      check: false,
    };
  }
  handleClick = () => {
    this.setState({ check: true });
  };

  render() {
    if (this.state.check) {
      return (
        <div>
          <Popthree></Popthree>
        </div>
      );
    } else {
      return (
        <div>
          <button className="button" onClick={this.handleClick}>
            Redirect to Form
          </button>
        </div>
      );
    }
  }
}

export default Main;
