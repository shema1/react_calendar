import React, { Component } from "react";
import Day from "./Day";
import "./days.scss";
import { generateNumbersRange } from "../utilites";
import moment from "moment";

class Days extends Component {
  render() {
    const test =this.props.timeNow
    return (
      <section className="days">
        {generateNumbersRange(0, 6).map(sectionNumber => (
          <Day key={sectionNumber} timeNow={moment(this.props.timeNow).add(sectionNumber, "days")} />
        ))}
      </section>
    );
  }
}

export default Days;
