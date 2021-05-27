import React from "react";
import Pop from "./Pop";
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
        </a>
      </div>
    );
  }
}

export default Main;
