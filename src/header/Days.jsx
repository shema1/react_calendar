import React, { Component } from "react";
import Day from "./Day";
import "./days.scss";
import { generateNumbersRange } from "../utilites";
import moment from "moment";

const Days = ({timeNow}) => { 

  return (
    <section className="days">
      {generateNumbersRange(0, 6).map(sectionNumber => (
        <Day
          key={sectionNumber}
          timeNow={moment(timeNow).startOf('isoWeek').add(sectionNumber, "days")}
        />
      ))}
    </section>
  );
};

export default Days;

// const time = generateNumbersRange(0, 24).map(elem1 => {
//   generateNumbersRange(0, 4).map(elem => (
//     <option value="${setTime}:${cell}" data-block-number="${timeList}">
//       {elem}
//     </option>
//   ));
// });