import React from "react";
import Event from "./Event";
import moment from "moment";

const TableSectionLine = ({ onPopup, date, events, time }) => {
  const text = `testasdas ${time}`
  const curentEvent = events
    .filter(
      event =>
        moment(event.startDateEvent).format("YYYY-MM-DD") ===
        date.format("YYYY-MM-DD")
    )
    .filter(
      elem =>
        moment(elem.startDateEvent).format("H") <= time &&
        moment(elem.startDateEvent).format("H") >= time
    );

  return (
    <div className="table-sections__section" onClick={() => onPopup(date,time)}>
      {date.format("YYYY-MM-DD")} - {time}
      {curentEvent != "" && <Event curentEvent={curentEvent} />}
    </div>
  );
};

export default TableSectionLine;
