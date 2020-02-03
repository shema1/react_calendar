import React from "react";
import { generateNumbersRange } from "../utilites";
import moment from "moment";
import "./event.scss";

const Event = ({ curentEvent, updateEvent }) => {
  const startTime = moment(curentEvent[0].startDateEvent).format("H:mm");
  const endTime = moment(curentEvent[0].endDateEvent).format("H:mm");
  const difference =
    (moment(endTime, "h:m") - moment(startTime, "h:m")) / 60 / 1000;
  const id = curentEvent[0].id;
  const style = {
    height: difference
  };
  // console.log(curentEvent)
  return (
    <div className="event" style={style} onClick={() => updateEvent(event, id)}>
      <div className="event__name">{curentEvent[0].nameEvent}</div>
      <div className="event__time">
        {startTime} -{endTime}
      </div>
      <div className="event__description">{curentEvent[0].description}</div>
    </div>
  );
};

export default Event;
