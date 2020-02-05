import React, { Component } from "react";
import Navigation from "./Navigation";
import Days from "./Days";
import Holidays from "./Holidays";
import moment from "moment";
import { generateNumbersRange } from "../utilites";
import "./header.scss";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Navigation
          firstMonday={this.props.firstMonday}
          prevWeak={this.props.prevWeak}
          nextWeak={this.props.nextWeak}
          handleToday={this.props.handleToday}
          popup={this.props.popup}
        />
        <Days
          firstMonday={this.props.firstMonday}
        />
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
