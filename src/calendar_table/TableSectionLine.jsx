import React from "react";
import Event from "./Event";
import moment from "moment";
import RedLine from "./RedLine";
import { check } from "../utilites";

const TableSectionLine = ({ onPopup, date, events, time, popupForUpdate }) => {
  const curentEvent = Array.isArray(events)
    ? events.find(event => {
        return (
          moment(event.startDate).format("YYYY-MM-DD") ===
            date.format("YYYY-MM-DD") &&
          event.startTime.slice(0, 2) == check(time)
        );
      })
    : null;
  const checkTimeForRedline =
    moment(date).format("YYYY-MM-DD") == moment().format("YYYY-MM-DD") &&
    moment().format("H") == time;

  return (
    <div
      className="table-sections__section"
      onClick={() => onPopup(date, time, event)}
    >
      {curentEvent != null && (
        <Event curentEvent={curentEvent} popupForUpdate={popupForUpdate} />
      )}
      {checkTimeForRedline && <RedLine />}
    </div>
  );
};

export default TableSectionLine;
