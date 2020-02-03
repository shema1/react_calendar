import React from "react";
import Event from "./Event";
import moment from "moment";
import { check } from "../utilites";
import RedLine from "./RedLine";

const TableSectionLine = ({ onPopup, date, events, time,updateEvent  }) => {
  // const startTime = moment(date).format("YYYY-MM-DD")+moment(time).format("HH:mm") ;
  // const startTime = moment(date).format("YYYY-MM-DD")+moment(time).format("HH:mm") ;
  // const endTime ;
  // console.log(events.filter(a => a>10))
    // const checkForLine=()=>{
    //   if(moment().format("YYYY-MM-DD") == date.format("YYYY-MM-DD")
    //   &&moment().format("H")<= time
    //   &&moment().format("H")>= time ){
        
    //     return true
    //   }
    //   return false
    // }
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

      // console.log(curentEvent)
  return (
    <div className="table-sections__section" onClick={() => onPopup(date,time,event)}>
      {date.format("YYYY-MM-DD")} - {time}
      {curentEvent != "" && <Event curentEvent={curentEvent} updateEvent={updateEvent} />}
      {/* {checkForLine() && <RedLine />} */}
    </div>
  );
};

export default TableSectionLine;
