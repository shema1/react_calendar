import React from "react";
const PrevWeakButton =( {prevWeak}) =>{
    return(
        <button className="nav-button__prev button-style"  onClick={prevWeak}>
        <i className="material-icons nav-button__size">
          keyboard_arrow_left
        </i>
      </button>
    )
}
export default PrevWeakButton