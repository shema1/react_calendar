import React from "react";
import TableSectionLine from "./TableSectionLine";
import { generateNumbersRange } from "../utilites";
import moment from "moment";
import RedLine from "./RedLine";

const TableSection = ({ onPopup, firstMonday, events, time, updateEvent }) => {
  let day = moment(firstMonday)
  let days = generateNumbersRange(1, 7).map(line => {
    let dayElem = (
     <>
     {moment(day).format("YYYY-MM-DD") ==moment().format("YYYY-MM-DD")
     ?<RedLine/>:null}
      <TableSectionLine
        key={line}
        id={Math.random()}
        onPopup={onPopup}
        date={day}
        time={time}
        events={events}
        updateEvent={updateEvent}
      />
     </>
    );
    day = moment(day).add("days", 1);
    return dayElem;
  });
  return <div className="table-sections__line">{days}</div>;
};

export default TableSection;
