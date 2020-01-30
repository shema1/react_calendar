import React, { Component } from "react";
import moment from "moment";
const Day = ({timeNow}) => {

    const activeDay = timeNow.format("M D YYYY") == moment().format("M D YYYY")? "days__numbe active-day-number" : "days__numbe";
  return (
    <>
      <div className="wrapper">
        <span className="week-day">{timeNow.format("dd")}</span>
        <div className={activeDay}>{timeNow.format("D")}</div>
      </div>
    </>
  );
};

export default Day;
