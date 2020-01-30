import React from "react";
import { check } from "../utilites";


const Times = ({ time }) => {
  return (
    <div className="times__blocks">
      <span className="clock">{ check(time)}:00</span>
    </div>
  );
};

export default Times;
