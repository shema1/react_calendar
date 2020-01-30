import React from "react";
const NextWeakButton =( {nextWeak}) =>{
    return(
        <button className="nav-button__next button-style"  onClick={nextWeak}>
            <i className="material-icons nav-button__size ">chevron_right</i>
          </button>
    )
}
export default NextWeakButton