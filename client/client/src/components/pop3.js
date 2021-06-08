import React from "react";
import "../stylesheets/Page3.css";
import Pop from "./Pop";
import axios from "axios";
import { AiOutlineFolder } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";
//Dateformat library used for the setting the desired dateformat
var dateFormat = require("dateformat");

//Styled Components for Body Tags
const style_component = {
  display: "inline-block",
  color: "#557eea",
  fontSize: "1.1em",
  verticalAlign: "middle",
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
      data: {},
    };
  }
  /*I used ComponentDidMount because it runs the axios and get the data from the requested
   path just after first render of page, and then used Setstate to rerender the page along with the 
   fetched details. It stores data in the "data" object and that Data object is
   then used through out the app*/
  componentDidMount() {
    axios
      .get("http://localhost:3000/project")
      .then((response) => {
        this.setState({ data: response.data });
        this.calcDays(response.data.date);
      })
      .catch((err) => window.alert(err));
  }
  /*CalcDays Function is used the calculate the delivery date of the Projct.
   Basically it uses current date and the Date entered by the user and then 
   find the difference of that two dates.
  */
  calcDays = (registereDate) => {
    let spl = registereDate.split("/");
    const currentDate = new Date();
    let curr = dateFormat(currentDate, "dd/mm/yyyy");
    curr = curr.split("/");
    /*This condition is for date check and calculating the differnce between the Dates to get 
    Delivery Days*/
    if (spl[2] >= curr[2] && spl[1] >= curr[1] && spl[0] > curr[0]) {
      difference =
        (curr[2] - spl[2]) * 365 + (spl[1] - curr[1]) * 30 + (spl[0] - curr[0]);
      document.getElementById("del").innerHTML = difference + " day delivery";
    }
  };
  //handleClick function for conditional rendering
  handleClick = () => {
    this.setState({ check: true });
  };

  clo = () => {
    document.getElementById("pop3").style.display = "none";
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
          <div id="pop3" data-testid="pop3">
            <span className="Heading_pop3">
              <BsFileEarmarkText style={styles} />
              <p>Your project request</p>
            </span>

            <div id="section2">
              <h4>I'll be your business expert</h4>
              <span>
                <h4 data-testid="Cell1">${Math.round(this.state.data.cost)}</h4>
                <p data-testid="Cell2">
                  Total : $
                  {Math.round(
                    +this.state.data.cost * 0.2 + +this.state.data.cost
                  )}{" "}
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
              <span id="Attachment">
                <AiOutlineFolder style={style_component} />
                <p>attachment</p>
              </span>
              <div id="div_Button" data-testid="Cancel-Button">
                <button className="Button" onClick={this.clo}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Popthree;
