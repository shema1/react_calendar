import React, { Component } from "react";
import Today from "./Today";
import moment from "moment";
import PrevWeakButton from "./NextWeakButton";
import NextWeakButton from "./PrevWeakButton";

const Navigation = ({ prevWeak, nextWeak, handleToday,popup,firstMonday }) => {
  const secondMonth = moment(firstMonday).format('MMM') ===moment(firstMonday).add(7,"days").format('MMM')
  ? " "
  :"-"+moment(firstMonday).add(7,"days").format('MMM')
  return (
    <>
      <nav className="navigation">
        <button className="add-button add-event" onClick={()=>popup()}>
          <div className="VVsfQ add-event ">
            <svg
              className="add-event"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path
                className="add-event"
                fill="#34A853"
                d="M16 16v14h4V20z"
              ></path>
              <path
                className="add-event"
                fill="#4285F4"
                d="M30 16H20l-4 4h14z"
              ></path>
              <path
                className="add-event"
                fill="#FBBC05"
                d="M6 16v4h10l4-4z"
              ></path>
              <path
                className="add-event"
                fill="#EA4335"
                d="M20 16V6h-4v14z"
              ></path>
              <path className="add-event" fill="none" d="M0 0h36v36H0z"></path>
            </svg>
          </div>
          <span className="add-button__text add-event">Create</span>
        </button>
        <Today handleToday={handleToday} />
        <div className="nav-button">
          <PrevWeakButton prevWeak={prevWeak} />
          <NextWeakButton nextWeak={nextWeak} />
        </div>
        <span className="header-date">{firstMonday.format("MMM")}{secondMonth}</span>
        <span className="status-server"></span>
      </nav>
    </>
  );
};

export default Navigation;
