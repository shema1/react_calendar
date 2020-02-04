import React from "react";
import Event from "./Event";
import moment from "moment";
import RedLine from "./RedLine";

const TableSectionLine = ({ onPopup, date, events, time, popupForUpdate }) => {
  const curentEvent = Array.isArray(events)
    ? events.filter(
        event =>
          moment(event.startDateEvent).format("YYYY-MM-DD") ===
            date.format("YYYY-MM-DD") &&
          moment(event.startDateEvent).format("H") == time
      )
    : "";
  const check =
    moment(date).format("YYYY-MM-DD") == moment().format("YYYY-MM-DD") &&
    moment().format("H") == time;
    
  return (
    <div
      className="table-sections__section"
      onClick={() => onPopup(date, time, event)}
    >
      {curentEvent != "" && (
        <Event curentEvent={curentEvent} popupForUpdate={popupForUpdate} />
      )}
      {check && <RedLine />}
    </div>
  );
};

export default TableSectionLine;
