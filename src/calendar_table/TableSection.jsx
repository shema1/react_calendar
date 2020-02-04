import React from "react";
import TableSectionLine from "./TableSectionLine";
import { generateNumbersRange } from "../utilites";
import moment from "moment";
import RedLine from "./RedLine";

const TableSection = ({ onPopup, firstMonday, events, time,popupForUpdate }) => {
  let day = moment(firstMonday)
  let days = generateNumbersRange(1, 7).map(line => {
    // console.log(moment(day).format("YYYY-MM-DD") + "---"+moment().format("YYYY-MM-DD"))
    // const check =
    // moment(day).format("YYYY-MM-DD") == moment().format("YYYY-MM-DD") 
    // &&
    // moment().format("H") >= time &&
    // moment().format("H") <= time;
    let dayElem = (
     <>
     {/* {check && <RedLine/>} */}
      <TableSectionLine
        key={Math.random()*line}
        id={Math.random()}
        onPopup={onPopup}
        date={day}
        time={time}
        events={events}
        popupForUpdate={popupForUpdate}
      />
     </>
    );
    day = moment(day).add("days", 1);
    return dayElem;
  });
  return <div className="table-sections__line">{days}</div>;
};

export default TableSection;
