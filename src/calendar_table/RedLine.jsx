import React, { Component } from "react";
import "./timeline.scss";
import moment from "moment";
const RedLine = () => {

const timeNowHour = moment().hour()
const timeNowMin = moment().minute()
const result =  (timeNowMin)
// const widthTableSectionElem = document.querySelector('.table-sections__section').offsetWidth;
const style = {
    top:result,
}
  return (
    <div className="redline setTime" style={style}>
      <div className="redline__ball"></div>
      <div className="redline__line"></div>
    </div>
  );
};

export default RedLine;
