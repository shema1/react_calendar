import React from "react";
import TableSectionLine from "./TableSectionLine";
import { generateNumbersRange } from "../utilites";
import moment from "moment";

const TableSection = ({ onPopup, firstMonday,events, time }) => {
  let day = moment(firstMonday);
  let days = generateNumbersRange(1, 7).map(line => {
    let dayElem = (
      <TableSectionLine
        key={line}
        id={Math.random()}
        onPopup={onPopup}
        date={day}
        time={time}
        events={events}
      />
    );
    day = moment(day).add("days", 1);
    return dayElem;
  });
  return <div className="table-sections__line">{days}</div>;
};

export default TableSection;
