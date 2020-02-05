import React, { Component } from "react";
import Day from "./Day";
import "./days.scss";
import { generateNumbersRange } from "../utilites";
import moment from "moment";

const Days = ({firstMonday}) => { 

  return (
    <section className="days">
      {generateNumbersRange(0, 6).map(sectionNumber => (
        <Day
          key={sectionNumber}
          timeNow={moment(firstMonday).add(sectionNumber, "days")}
        />
      ))}
    </section>
  );
};

export default Days;
