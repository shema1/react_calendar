import React, { Component } from "react";

const Today =( {handleToday}) =>{
    return(
        <button className="today-button"  onClick={handleToday}>Today</button>
    )
}
export default Today