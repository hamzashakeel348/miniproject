import React from "react";
import Pop from "./Pop";
import Popup from "./Popup";
import "../stylesheets/Main.css";
const check = () => {
  console.log("working");
  <Pop />;
};
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <a>
          <Pop head1="Create offer popup" />

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Popup head="Terms of Services" />
        </a>
      </div>
    );
  }
}

export default Main;
