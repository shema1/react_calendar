import React from "react";
import moment from "moment";
import "./event.scss";

const Event = ({ curentEvent, popupForUpdate }) => {
  const startTime = moment(curentEvent.startDate+"T"+curentEvent.startTime).format("H:mm");
  const endTime = moment(curentEvent.endDate+"T"+curentEvent.endTime).format("H:mm");
  const difference =
    (moment(endTime, "h:m") - moment(startTime, "h:m")) / 60 / 1000;
  const id = curentEvent.id;
  const style = {
    height: difference
  };

  return (
    <div className="event" style={style} onClick={() => popupForUpdate(id)}>
      <div className="event__name">{curentEvent.nameEvent}</div>
      <div className="event__time">
        {startTime} -{endTime}
      </div>
      <div className="event__description">{curentEvent.description}</div>
    </div>
  );
};

export default Event;
