import React from "react";
import "../stylesheets/Main.css";
import Pop from "./Pop";

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
          <Pop></Pop>
        </div>
      );
    } else {
      return (
        <div>
          <button
            className="button"
            onClick={this.handleClick}
            data-testid="Main"
          >
            Redirect to Form
          </button>
        </div>
      );
    }
  }
}

export default Main;
