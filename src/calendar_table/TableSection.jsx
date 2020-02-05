import React from "react";
import TableSectionLine from "./TableSectionLine";
import { generateNumbersRange } from "../utilites";
import moment from "moment";

const TableSection = ({
  onPopup,
  firstMonday,
  events,
  time,
  popupForUpdate
}) => {
  let day = moment(firstMonday);
  let days = generateNumbersRange(1, 7).map(line => {
    let dayElem = (
      <TableSectionLine
        key={Math.random() * line}
        id={Math.random()}
        onPopup={onPopup}
        date={day}
        time={time}
        events={events}
        popupForUpdate={popupForUpdate}
      />
    );
    day = moment(day).add("days", 1);
    return dayElem;
  });
  return <div className="table-sections__line">{days}</div>;
};

export default TableSection;
