import React, { Component } from "react";
import Navigation from "./Navigation";
import Days from "./Days";
import Holidays from "./Holidays";
import moment from "moment";
import { generateNumbersRange } from "../utilites";
import "./header.scss";

class Header extends Component {
  state = {
    timeNow: moment()
  };

  nextWeak = () => {
    this.setState({
      timeNow: this.state.timeNow.add(7, "days")
    });
  };

  prevWeak = () => {
    this.setState({
      timeNow: this.state.timeNow.subtract(7, "days")
    });
  };
  handleToday = () => {
    this.setState({
      timeNow: moment()
    });
  };

  render() {
    return (
      <header className="header">
        <Navigation
          timeNow={this.state.timeNow}
          prevWeak={this.prevWeak}
          nextWeak={this.nextWeak}
          handleToday={this.handleToday}
        />
        <Days timeNow={this.state.timeNow} />
        <section className="holidays">
          {generateNumbersRange(0, 6).map(num => (
            <Holidays key={num} />
          ))}
        </section>
      </header>
    );
  }
}

export default Header;
