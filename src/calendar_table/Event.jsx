import React from "react";
import { generateNumbersRange } from "../utilites";
import moment from "moment";
import "./event.scss";

const Event = ({ curentEvent }) => {
//   console.log(curentEvent);
  return (
    <div className="event">
      <div className="event__name">{curentEvent[0].text}</div>
      <div className="event__time">
        {moment(curentEvent[0].startDateEvent).format("h:m")} -
        {moment(curentEvent[0].endDateEvent).format("h:m")}

      </div>
      <div className="event__description">{curentEvent[0].text}</div>
    </div>
  );
};

export default Event;
